import { useState, useEffect } from 'react';
import './SettingsModal.css';

function SettingsModal({ onClose }) {
  const [activeTab, setActiveTab] = useState('general');

  // STATE: General
  const [skipMenu, setSkipMenu] = useState(false);
  const [passwordProtect, setPasswordProtect] = useState(false);
  const [encryptFile, setEncryptFile] = useState(false);

  // STATE: Visual
  const [crtFilter, setCrtFilter] = useState(false);
  const [curvedMonitor, setCurvedMonitor] = useState(false);
  const [blockCursor, setBlockCursor] = useState(false);
  const [monitorFrame, setMonitorFrame] = useState(false);

  // STATE: File
  const [fileFormat, setFileFormat] = useState('txt');

  // 1. LOAD SETTINGS ON MOUNT
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('retroSettings')) || {};
    if (saved.skipMenu) setSkipMenu(saved.skipMenu);
    if (saved.passwordProtect) setPasswordProtect(saved.passwordProtect);
    if (saved.encryptFile) setEncryptFile(saved.encryptFile);
    
    if (saved.crtFilter) setCrtFilter(saved.crtFilter);
    if (saved.curvedMonitor) setCurvedMonitor(saved.curvedMonitor);
    if (saved.blockCursor) setBlockCursor(saved.blockCursor);
    if (saved.monitorFrame) setMonitorFrame(saved.monitorFrame);

    if (saved.fileFormat) setFileFormat(saved.fileFormat);
  }, []);

  // 2. SAVE SETTINGS
  const handleSave = () => {
    const settings = {
      skipMenu,
      passwordProtect,
      encryptFile,
      crtFilter,
      curvedMonitor,
      blockCursor,
      monitorFrame,
      fileFormat
    };
    localStorage.setItem('retroSettings', JSON.stringify(settings));
    alert('Settings Saved!');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="settings-window" onClick={(e) => e.stopPropagation()}>
        
        {/* TITLE BAR */}
        <div className="settings-title-bar">
          <span>Preferences</span>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        {/* TABS */}
        <div className="settings-tabs">
          <button 
            className={activeTab === 'general' ? 'active' : ''} 
            onClick={() => setActiveTab('general')}
          >
            General
          </button>
          <button 
            className={activeTab === 'visual' ? 'active' : ''} 
            onClick={() => setActiveTab('visual')}
          >
            Visual
          </button>
          <button 
            className={activeTab === 'files' ? 'active' : ''} 
            onClick={() => setActiveTab('files')}
          >
            File Save
          </button>
        </div>

        {/* CONTENT AREA */}
        <div className="settings-content">
          
          {/* TAB 1: GENERAL */}
          {activeTab === 'general' && (
            <div className="tab-panel">
              <label className="checkbox-row">
                <input 
                  type="checkbox" 
                  checked={skipMenu} 
                  onChange={(e) => setSkipMenu(e.target.checked)} 
                />
                Skip menu and open last used journal
              </label>
              <hr className="divider"/>
              <label className="checkbox-row">
                <input 
                  type="checkbox" 
                  checked={passwordProtect} 
                  onChange={(e) => setPasswordProtect(e.target.checked)} 
                />
                Password protect journal file
              </label>
              <label className="checkbox-row">
                <input 
                  type="checkbox" 
                  checked={encryptFile} 
                  onChange={(e) => setEncryptFile(e.target.checked)} 
                />
                Encrypt journal file
              </label>
            </div>
          )}

          {/* TAB 2: VISUAL */}
          {activeTab === 'visual' && (
            <div className="tab-panel">
              <label className="checkbox-row">
                <input 
                  type="checkbox" 
                  checked={crtFilter} 
                  onChange={(e) => setCrtFilter(e.target.checked)} 
                />
                Enable CRT Filter (Scanlines)
              </label>
              <label className="checkbox-row">
                <input 
                  type="checkbox" 
                  checked={curvedMonitor} 
                  onChange={(e) => setCurvedMonitor(e.target.checked)} 
                />
                Enable Curved Monitor Effect
              </label>
              <label className="checkbox-row">
                <input 
                  type="checkbox" 
                  checked={blockCursor} 
                  onChange={(e) => setBlockCursor(e.target.checked)} 
                />
                Use Square Blinking Cursor
              </label>
              <label className="checkbox-row">
                <input 
                  type="checkbox" 
                  checked={monitorFrame} 
                  onChange={(e) => setMonitorFrame(e.target.checked)} 
                />
                Show Retro Monitor Frame
              </label>
            </div>
          )}

          {/* TAB 3: FILE SETTINGS */}
          {activeTab === 'files' && (
            <div className="tab-panel">
              <p className="panel-label">Default Save Format:</p>
              
              <label className="radio-row">
                <input 
                  type="radio" 
                  name="format" 
                  value="txt" 
                  checked={fileFormat === 'txt'} 
                  onChange={(e) => setFileFormat(e.target.value)} 
                />
                .TXT (Plain Text)
              </label>

              <label className="radio-row">
                <input 
                  type="radio" 
                  name="format" 
                  value="md" 
                  checked={fileFormat === 'md'} 
                  onChange={(e) => setFileFormat(e.target.value)} 
                />
                .MD (Markdown)
              </label>

              <label className="radio-row">
                <input 
                  type="radio" 
                  name="format" 
                  value="odt" 
                  checked={fileFormat === 'odt'} 
                  onChange={(e) => setFileFormat(e.target.value)} 
                />
                .ODT (OpenDocument Text)
              </label>

              <label className="radio-row">
                <input 
                  type="radio" 
                  name="format" 
                  value="docx" 
                  checked={fileFormat === 'docx'} 
                  onChange={(e) => setFileFormat(e.target.value)} 
                />
                .DOCX (Microsoft Word)
              </label>
            </div>
          )}

        </div>

        {/* FOOTER BUTTONS */}
        <div className="settings-footer">
           <button onClick={handleSave} className="save-btn">OK</button>
           <button onClick={onClose} className="cancel-btn">Cancel</button>
        </div>

      </div>
    </div>
  );
}

export default SettingsModal;