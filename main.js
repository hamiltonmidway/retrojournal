const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });
  win.loadURL('http://localhost:5173'); // Vite dev server
  // For production: win.loadFile('dist/index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// IPC for file saving (secure)
ipcMain.handle('save-journal', async (event, { fileName, content }) => {
  const dir = path.join(app.getPath('documents'), 'RetroJournal');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
  const filePath = path.join(dir, `${fileName}.txt`);
  fs.writeFileSync(filePath, content);
  return 'Saved!';
});

ipcMain.handle('load-journal', async (event, fileName) => {
  const dir = path.join(app.getPath('documents'), 'RetroJournal');
  const filePath = path.join(dir, `${fileName}.txt`);
  if (fs.existsSync(filePath)) return fs.readFileSync(filePath, 'utf-8');
  return '';
});