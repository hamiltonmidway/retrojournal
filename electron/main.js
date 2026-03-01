import { app, BrowserWindow, ipcMain, dialog } from 'electron';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs/promises';

// === NEW LIBRARIES FOR FILE FORMATTING ===
import { Document, Packer, Paragraph, TextRun } from 'docx';
import JSZip from 'jszip';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    title: 'Retro Journal',
    autoHideMenuBar: true, 
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  // 1. Force DevTools to open
  mainWindow.webContents.openDevTools();

  // 2. USE 127.0.0.1 (More reliable on Linux than localhost)
  const devUrl = 'http://127.0.0.1:5173';
  console.log(`[Main] Attempting to load: ${devUrl}`);

  // 3. LOAD URL (With NO crashing backup plan)
  mainWindow.loadURL(devUrl).catch((err) => {
    console.error('[Main] FAILED TO LOAD URL:', err);
  });
}

// === FILE SYSTEM HANDLERS ===
// === save journal ===
ipcMain.handle('save-journal', async (event, { fileName, content, format }) => {
  try {
    // 1. Determine the extension based on the user's setting
    const ext = format || 'txt'; 
    
    // 2. Configure the save dialog to match that extension
    const { filePath } = await dialog.showSaveDialog(mainWindow, {
      title: 'Save Journal Entry',
      defaultPath: fileName.endsWith(`.${ext}`) ? fileName : `${fileName}.${ext}`,
      filters: [
        { name: `${ext.toUpperCase()} File`, extensions: [ext] },
        { name: 'All Files', extensions: ['*'] }
      ]
    });

    if (filePath) {
      
      // === FORMAT 1: MICROSOFT WORD (.docx) ===
      if (format === 'docx') {
        // Construct a proper Microsoft Word Document
        const doc = new Document({
          sections: [{
            properties: {},
            children: content.split('\n').map(line => 
              new Paragraph({
                children: [new TextRun(line)]
              })
            ),
          }],
        });
        
        const buffer = await Packer.toBuffer(doc);
        await fs.writeFile(filePath, buffer);

      // === FORMAT 2: OPEN DOCUMENT (.odt) ===
      } else if (format === 'odt') {
        // Construct a proper OpenDocument Text file using JSZip
        const zip = new JSZip();
        
        // 1. ODT requires a mimetype file (must be uncompressed in a strict spec, but standard text works fine)
        zip.file('mimetype', 'application/vnd.oasis.opendocument.text');
        
        // 2. The manifest tells LibreOffice what is inside the zip
        const manifestXML = `<?xml version="1.0" encoding="UTF-8"?>
<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.2">
  <manifest:file-entry manifest:full-path="/" manifest:media-type="application/vnd.oasis.opendocument.text"/>
  <manifest:file-entry manifest:full-path="content.xml" manifest:media-type="text/xml"/>
</manifest:manifest>`;
        zip.folder('META-INF').file('manifest.xml', manifestXML);
        
        // 3. The actual text content (we escape XML characters to prevent crashes if they type < or &)
        const paragraphs = content.split('\n').map(line => {
           const safeLine = line.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
           return `<text:p>${safeLine}</text:p>`;
        }).join('');
        
        const contentXML = `<?xml version="1.0" encoding="UTF-8"?>
<office:document-content xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:text="urn:oasis:names:tc:opendocument:xmlns:text:1.0" office:version="1.2">
  <office:body>
    <office:text>
      ${paragraphs}
    </office:text>
  </office:body>
</office:document-content>`;
        zip.file('content.xml', contentXML);
        
        // Generate the final zipped buffer and write it to disk
        const buffer = await zip.generateAsync({ type: 'nodebuffer' });
        await fs.writeFile(filePath, buffer);

      // === FORMAT 3 & 4: PLAIN TEXT (.txt & .md) ===
      } else {
        await fs.writeFile(filePath, content, 'utf-8');
      }
      
      return { success: true, path: filePath };
    }
    return { canceled: true };
  } catch (err) {
    return { error: err.message };
  }
});

// === load journal ===
ipcMain.handle('load-journal', async (event) => {
  try {
    const { filePaths } = await dialog.showOpenDialog(mainWindow, {
      properties: ['openFile'],
      filters: [{ name: 'Text Documents', extensions: ['txt', 'md'] }]
    });
    if (filePaths && filePaths.length > 0) {
      return await fs.readFile(filePaths[0], 'utf-8');
    }
    return null;
  } catch (err) {
    return { error: err.message };
  }
});

app.whenReady().then(createWindow);
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });