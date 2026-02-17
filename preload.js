const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  saveJournal: (data) => ipcRenderer.invoke('save-journal', data),
  loadJournal: (fileName) => ipcRenderer.invoke('load-journal', fileName),
});