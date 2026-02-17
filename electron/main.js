import { app, BrowserWindow, ipcMain, dialog } from 'electron';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs/promises';

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
  const devUrl = 'http://localhost:5173';
  console.log(`[Main] Attempting to load: ${devUrl}`);

  // 3. LOAD URL (With NO crashing backup plan)
  mainWindow.loadURL(devUrl).catch((err) => {
    console.error('[Main] FAILED TO LOAD URL:', err);
  });
}

// === FILE SYSTEM HANDLERS ===
ipcMain.handle('save-journal', async (event, { fileName, content }) => {
  try {
    const { filePath } = await dialog.showSaveDialog(mainWindow, {
      title: 'Save Journal Entry',
      defaultPath: fileName,
      filters: [{ name: 'Text Documents', extensions: ['txt', 'md'] }]
    });

    if (filePath) {
      await fs.writeFile(filePath, content, 'utf-8');
      return { success: true, path: filePath };
    }
    return { canceled: true };
  } catch (err) {
    return { error: err.message };
  }
});

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