const { contextBridge, ipcRenderer } = require('electron');

// We expose a strictly defined API to the frontend (React)
// In your React components, you will access this via: window.electronAPI
contextBridge.exposeInMainWorld('electronAPI', {
  
  // 1. SAVE: Sends the journal data to the Main process to be written to disk
  saveJournal: (data) => ipcRenderer.invoke('save-journal', data),

  // 2. LOAD: Asks the Main process to open a file dialog and read text
  loadJournal: (fileName) => ipcRenderer.invoke('load-journal', fileName)

});