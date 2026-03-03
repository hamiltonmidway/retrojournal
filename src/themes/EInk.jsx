import React from 'react';
import './EInk.css';

function EInk({ 
  entry, 
  setEntry, 
  triggerLoad, 
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
        placeholder="Tap here to begin writing."
        autoFocus
        spellCheck="false"
      />
      
      {/* E-INK FOOTER */}
      <div className="e-ink-footer">
         <div className="e-ink-controls" style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
             
             {/* Toggles the Night Mode state! Wrapped in e-ink-button-row to get the CSS back! */}
             <div className="e-ink-button-row">
                 <button 
                   onClick={() => setIsNightMode(!isNightMode)} 
                   style={{ cursor: 'pointer', padding: '10px 25px', fontSize: '1.1rem', marginLeft: '0' }}
                 >
                   {isNightMode ? '☼ Day' : '☾ Night'}
                 </button>
             </div>
             
             {/* Standardized 3-Button Layout */}
             <div className="e-ink-button-row" style={{ display: 'flex', gap: '5px' }}>
                <button onClick={triggerLoad} style={{ cursor: 'pointer' }}>Load</button>
                <button onClick={triggerSave} style={{ cursor: 'pointer' }}>Save</button>
                <button onClick={handleExit} style={{ cursor: 'pointer' }}>Exit</button>
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