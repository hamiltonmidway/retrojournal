import { useState, useEffect } from 'react';
import './SettingsModal.css';

function SettingsModal({ onClose }) {
  const [activeTab, setActiveTab] = useState('encryption');

  // STATE: General
  const [enableEncryption, setEnableEncryption] = useState(false);

  // STATE: Visual
  const [crtFilter, setCrtFilter] = useState(false);
  // Removed curve, cursor, and bezel states!

  // STATE: File
  const [fileFormat, setFileFormat] = useState('txt');

  // 1. LOAD SETTINGS ON MOUNT
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('retroSettings')) || {};
    
    if (saved.enableEncryption) setEnableEncryption(saved.enableEncryption);
    
    if (saved.crtFilter) setCrtFilter(saved.crtFilter);

    if (saved.fileFormat) setFileFormat(saved.fileFormat);
  }, []);

  // 2. SAVE SETTINGS
  const handleSave = () => {
    const settings = {
      enableEncryption,
      crtFilter,
      fileFormat
    };
    localStorage.setItem('retroSettings', JSON.stringify(settings));
    alert('Settings Saved!');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="clean-modal" onClick={(e) => e.stopPropagation()}>
        
        {/* CLEAN HEADER */}
        <div className="clean-modal-header">
           <h2>System Preferences</h2>
           <button onClick={onClose} title="Close">&times;</button>
        </div>

        <div className="clean-modal-content settings-override">
            
            {/* CLEAN TABS */}
            <div className="clean-tabs">
              <button 
                className={activeTab === 'encryption' ? 'active' : ''} 
                onClick={() => setActiveTab('encryption')}
              >
                Encryption
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
            <div className="clean-tab-content">
              
              {/* TAB 1: ENCRYPTION */}
              {activeTab === 'encryption' && (
                <div className="tab-panel">
                  <label className="clean-input-row">
                    <input 
                      type="checkbox" 
                      checked={enableEncryption} 
                      onChange={(e) => setEnableEncryption(e.target.checked)} 
                    />
                    <strong>Enable Password Encryption for Journals</strong>
                  </label>
                  
                  {/* EXPLANTION BOX */}
                  <div className="encryption-explanation">
                    <h4>How it works:</h4>
                    <p>
                      When you save or load a file, you will be prompted to enter a password. 
                      <strong> This password is never saved anywhere in the app.</strong> Instead, 
                      the password becomes a mathematical "key" used to encrypt your file.
                    </p>

                    <h4>What gets encrypted?</h4>
                    <p>
                      Turning this on does <strong>*not*</strong> retroactively encrypt your old files.  Turning on this setting changes what happens when you click "Save". 
                      From now on, the app will encrypt files on a <em>per-file</em> basis. If you have old journals on your hard drive, or on a USB stick, 
                      or on an external hard drive, they will remain unencrypted plain text until you open them and save them again with this setting turned on.
                    </p>

                    <h4>I have multiple journals.  Can I use multiple different passwords?</h4>
                    <p>
                      Yes, if you want to.  The initial prompt, which asks you for the password for the first time, happens when you first click on "Save" with this setting turned on.   
                      When you enable this setting, the password prompt happens every time you save a (1) brand new; or (2) currently existing, but unencrypted journal file.  So, you can 
                      use a different password for every single journal file.  If you don't want to do that, you can just type the same one every time. The individual file itself holds the lock.
                    </p>

                    <h4>Protection from Hackers:</h4>
                    <p>
                      If someone gains access to your computer and tries to open your encrypted journal file 
                      using a text editor like Notepad or Plain Text Editor, they will not see your writing. They will only see random, 
                      scrambled gibberish (like <em><i>U2FsdGVkX1+x9/z3...</i></em>). 
                    </p>

                    <h4>What quality is the encryption?</h4>
                    <p>
                      Retro Journal uses <strong>AES-256 encryption</strong>. This is the industry-standard, military-grade encryption algorithm used by banks, password managers, and governments worldwide to secure classified information. 
                    </p>

                    <h4 className="warning-text">⚠️ CRITICAL WARNING:</h4>
                    <p className="warning-text">
                      When most people think of a password, they think of something that is temporary.   
                      This isn't temporary; this is the one-time, permanent, unchanging encryption key for your journal.
                      Because your password *is* the encryption key, <strong>it cannot be reset or changed</strong>. 
                      If you forget your password, your journal is gone forever. It cannot be recovered, it cannot be retrieved.  It's gone.  We cannot help you recover a 
                      lost password because we have absolutely no idea what your password is!
                    </p>
                  </div>
                </div>
              )}

              {/* TAB 2: VISUAL */}
              {activeTab === 'visual' && (
                <div className="tab-panel">
                  <label className="clean-input-row">
                    <input 
                      type="checkbox" 
                      checked={crtFilter} 
                      onChange={(e) => setCrtFilter(e.target.checked)} 
                    />
                    Enable CRT Filter (Scanlines)
                  </label>
                </div>
              )}

              {/* TAB 3: FILE SETTINGS */}
              {activeTab === 'files' && (
                <div className="tab-panel">
                  <p className="clean-panel-label">Default Save Format:</p>
                  
                  <label className="clean-input-row">
                    <input 
                      type="radio" 
                      name="format" 
                      value="txt" 
                      checked={fileFormat === 'txt'} 
                      onChange={(e) => setFileFormat(e.target.value)} 
                    />
                    .TXT (Plain Text)
                  </label>

                  <label className="clean-input-row">
                    <input 
                      type="radio" 
                      name="format" 
                      value="md" 
                      checked={fileFormat === 'md'} 
                      onChange={(e) => setFileFormat(e.target.value)} 
                    />
                    .MD (Markdown)
                  </label>

                  <label className="clean-input-row">
                    <input 
                      type="radio" 
                      name="format" 
                      value="odt" 
                      checked={fileFormat === 'odt'} 
                      onChange={(e) => setFileFormat(e.target.value)} 
                    />
                    .ODT (OpenDocument Text)
                  </label>

                  <label className="clean-input-row">
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
            <div className="clean-settings-footer">
               <button onClick={onClose} className="clean-btn-cancel">Cancel</button>
               <button onClick={handleSave} className="clean-btn-save">Save Preferences</button>
            </div>

        </div>
      </div>
    </div>
  );
}

export default SettingsModal;