import React from 'react';
import './EInk.css';

function EInk({ 
  entry, 
  setEntry, 
  fileName, 
  setFileName, 
  triggerSave, 
  handleExit, 
  programName,
  isNightMode,
  setIsNightMode
}) {
  return (
    <div className="screen">
      
      {/* E-INK HEADER */}
      <div className="e-ink-header">
         <span className="e-ink-title-text">{programName}</span>
         <span className="e-ink-wifi">Wi-Fi: OFF</span>
      </div>

      {/* TEXT AREA */}
      <textarea
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="Start journaling..."
        autoFocus
        spellCheck="false"
      />
      
      {/* E-INK FOOTER */}
      <div className="e-ink-footer">
         <div className="e-ink-controls">
             <input 
               type="text"
               value={fileName} 
               onChange={(e) => setFileName(e.target.value)} 
               className="e-ink-filename" 
             />
             <div className="e-ink-button-row">
                {/* Toggles the Night Mode state held in Journal.jsx! */}
                <button onClick={() => setIsNightMode(!isNightMode)}>
                  {isNightMode ? '☼ Day' : '☾ Night'}
                </button>
                <button onClick={triggerSave}>Save</button>
                <button onClick={handleExit}>Menu</button>
             </div>
         </div>
         <div className="e-ink-status-line">
            <span>Loc {entry.length}</span>
            <span className="battery-icon">🔋 84%</span>
         </div>
      </div>

    </div>
  );
}

export default EInk;