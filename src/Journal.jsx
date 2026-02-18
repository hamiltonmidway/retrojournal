import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Journal() {
  const { retro } = useParams();
  const [entry, setEntry] = useState('');
  const [fileName, setFileName] = useState('Untitled'); 
  const [isNightMode, setIsNightMode] = useState(false);

  // NEW: State for Visual Settings
  const [visuals, setVisuals] = useState({
    crt: false,
    curve: false,
    cursor: false,
    bezel: false
  });

  useEffect(() => {
    // 1. Load Content
    const loadContent = async () => {
      if (retro === 'windows-xp-2001' && fileName === 'Untitled') {
        setFileName('Document1.doc');
      }
      
      if (window.electronAPI) {
        const loaded = await window.electronAPI.loadJournal(fileName);
        setEntry(loaded);
      } else {
        setEntry(localStorage.getItem(fileName) || '');
      }
    };

    // 2. Load Visual Settings
    const loadSettings = () => {
      const saved = JSON.parse(localStorage.getItem('retroSettings')) || {};
      setVisuals({
        crt: saved.crtFilter || false,       // The Scanlines
        curve: saved.curvedMonitor || false, // The Bubble Shape
        cursor: saved.blockCursor || false,  // The Blinking Block
        bezel: saved.monitorFrame || false   // The Plastic Case
      });
    };

    loadContent();
    loadSettings();
  }, [fileName, retro]); 


  // SAVE FUNCTIONALITY
const save = async () => {
    // 1. Get the preferred format from Settings (default to txt)
    const settings = JSON.parse(localStorage.getItem('retroSettings')) || {};
    const format = settings.fileFormat || 'txt';

    if (window.electronAPI) {
      // 2. Send the content AND the format to the backend
      await window.electronAPI.saveJournal({ fileName, content: entry, format });
      alert('Saved to Disk.');
    } else {
      localStorage.setItem(fileName, entry);
      alert('Saved Locally.');
    }
  };

  const getProgramName = () => {
    if (retro === 'apple-mac-1985') return "PeachWrite";
    if (retro === 'apple-iie') return "PEACH WRITER ][";
    if (retro === 'commodore-64') return "*** ADMIRAL 75 WORD PROCESSOR ***";
    if (retro === 'e-ink') return "InkWriter 2008";
    if (retro === 'windows-xp-2001') return "Doorways Word";
    return "RETRO JOURNAL";
  };

  // HELPER: Build the main class string based on settings
  const getVisualClasses = () => {
    let classes = `journal ${retro} ${isNightMode ? 'night-mode' : ''}`;
    if (visuals.crt) classes += ' visual-crt';
    if (visuals.curve) classes += ' visual-curve';
    if (visuals.cursor) classes += ' visual-cursor';
    if (visuals.bezel) classes += ' visual-bezel';
    return classes;
  };

  return (
    <div className={getVisualClasses()}>
      
      {/* ========================================= */}
      {/* LAYOUT 1: PEACH MACANDCHEESE (1985)       */}
      {/* ========================================= */}
      {retro === 'apple-mac-1985' ? (
        <div className="mac-desktop">
          
          <div className="mac-menu-bar">
            <span className="mac-menu-apple"></span>
            <span className="mac-menu-item active">File</span>
            <span className="mac-menu-item">Edit</span>
            <span className="mac-menu-item">Search</span>
            <span className="mac-menu-item">Format</span>
            <span className="mac-menu-item">Font</span>
            <span className="mac-menu-item">Style</span>
          </div>

          <div className="mac-window">
             <div className="mac-title-bar">
                <button className="mac-close-box" onClick={() => window.history.back()}></button>
                <div className="mac-title-text-container">
                   <span className="mac-title-text">{fileName}</span>
                </div>
             </div>

             <div className="mac-ruler">
                <div className="ruler-line">
                  <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span>
                </div>
             </div>

             <div className="mac-content">
                <textarea
                  value={entry}
                  onChange={(e) => setEntry(e.target.value)}
                  placeholder="Type your masterpiece..."
                  autoFocus
                  spellCheck="false"
                />
                <div className="mac-scrollbar">
                   <div className="scroll-arrow">▲</div>
                   <div className="scroll-track"><div className="scroll-thumb"></div></div>
                   <div className="scroll-arrow">▼</div>
                </div>
             </div>
             
             <div className="mac-footer">
                <div className="mac-resize-box"><div className="resize-icon"></div></div>
             </div>
          </div>
          
          <button className="mac-floppy-btn" onClick={save}>Save to Disk</button>
        </div>

      /* ========================================= */
      /* LAYOUT 2: DOORWAYS XP (2001)              */
      /* ========================================= */
      ) : retro === 'windows-xp-2001' ? (
        <div className="xp-desktop">
          
          <div className="xp-window">
            <div className="xp-title-bar">
               <div className="xp-title-text">
                 <span className="xp-app-icon">W</span> {getProgramName()} - {fileName}
               </div>
               <div className="xp-window-controls">
                 <button className="xp-control-btn min">-</button>
                 <button className="xp-control-btn max">□</button>
                 <button className="xp-control-btn close" onClick={() => window.history.back()}>×</button>
               </div>
            </div>

            <div className="xp-menu-bar">
              <span>File</span><span>Edit</span><span>View</span><span>Insert</span><span>Format</span><span>Help</span>
            </div>

            <div className="xp-toolbar">
               <button className="xp-tool-btn" onClick={save} title="Save">💾</button>
               <div className="xp-divider"></div>
               <button className="xp-tool-btn">🖨️</button>
               <button className="xp-tool-btn">✂️</button>
               <button className="xp-tool-btn">📋</button>
               <div className="xp-divider"></div>
               <input 
                 className="xp-filename-input"
                 value={fileName}
                 onChange={(e) => setFileName(e.target.value)}
               />
            </div>

            <div className="xp-content-area">
               <textarea
                 value={entry}
                 onChange={(e) => setEntry(e.target.value)}
                 placeholder="Type your document here..."
                 autoFocus
                 spellCheck="false"
               />
            </div>

            <div className="xp-status-bar">
               <div className="xp-status-item">Page 1</div>
               <div className="xp-status-item">Sec 1</div>
               <div className="xp-status-item">1/1</div>
               <div className="xp-status-item">Ln {entry.split('\n').length}</div>
               <div className="xp-status-item">Col {entry.length}</div>
            </div>
          </div>

          <div className="xp-taskbar">
             <button className="xp-start-button" onClick={() => window.history.back()}>
                <span className="xp-flag">❖</span> start
             </button>
             <div className="xp-task-group">
                <div className="xp-task-item active">
                   <span className="xp-app-icon">W</span> {fileName}
                </div>
             </div>
             <div className="xp-tray">
                <span className="xp-time">12:00 PM</span>
             </div>
          </div>
        </div>

      /* ========================================= */
      /* LAYOUT 3: STANDARD SCREEN (Everything Else) */
      /* ========================================= */
      ) : (
        <div className="screen">
          
          {/* Apple IIe Header */}
          {retro === 'apple-iie' && (
             <div className="apple-header">
               <div className="apple-header-border">
                 <div className="apple-header-text">
                   {getProgramName()} <br/> COPYRIGHT 1981, PEACH COMPUTER INC.
                 </div>
               </div>
             </div>
          )}

          {/* Commodore 64 Header */}
          {retro === 'commodore-64' && (
             <div className="c64-header-container">
               <div className="c64-header-bar">{getProgramName()}</div>
               <div className="c64-subtext">A Product of Gemini & Friend</div>
             </div>
          )}

          {/* E-Ink Header */}
          {retro === 'e-ink' && (
            <div className="e-ink-header">
               <span className="e-ink-title-text">{getProgramName()}</span>
               <span className="e-ink-wifi">Wi-Fi: OFF</span>
            </div>
          )}

          <textarea
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            placeholder="Start journaling..."
            autoFocus
            spellCheck="false"
          />
          
          {/* --- FOOTERS --- */}

          {/* E-INK Footer Logic */}
          {retro === 'e-ink' ? (
             <div className="e-ink-footer">
                <div className="e-ink-controls">
                    <input 
                      type="text"
                      value={fileName} 
                      onChange={(e) => setFileName(e.target.value)} 
                      className="e-ink-filename" 
                    />
                    <div className="e-ink-button-row">
                       <button onClick={() => setIsNightMode(!isNightMode)}>{isNightMode ? '☼ Day' : '☾ Night'}</button>
                       <button onClick={save}>Save</button>
                       <button onClick={() => window.history.back()}>Menu</button>
                    </div>
                </div>
                <div className="e-ink-status-line">
                   <span>Loc {entry.length}</span>
                   <span className="battery-icon">🔋 84%</span>
                </div>
             </div>
          ) : (
            /* Standard Retro Footer (Apple/C64) */
            <div className="retro-status-bar">
               <div className="status-field">
                 <span>FILE:</span>
                 <input 
                   type="text" 
                   value={fileName} 
                   onChange={(e) => setFileName(e.target.value.toUpperCase())} 
                 />
               </div>
               <div className="command-group">
                 <button onClick={save}>{retro === 'commodore-64' ? '[F1] SAVE' : '[CTRL-S] SAVE'}</button>
                 <button onClick={() => window.history.back()}>[ESC] EXIT</button>
               </div>
            </div>
          )}
        </div>
      )}

      {/* Bezel Overlay (If selected in settings) */}
      {visuals.bezel && <div className="monitor-bezel-overlay"></div>}
      
    </div>
  );
}

export default Journal;