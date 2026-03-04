import React, { useState, useEffect } from 'react';
import './DoorwaysXP.css';

function DoorwaysXP({ 
  entry, 
  setEntry, 
  fileName, 
  triggerLoad, 
  triggerSave, 
  handleExit, 
  programName 
}) {
  // 1. Set up the local clock state
  const [time, setTime] = useState(new Date());

  // 2. Make the clock tick every minute (no internet required!)
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="xp-desktop">
      
      <div className="xp-window">
        <div className="xp-title-bar">
           <div className="xp-title-text">
             {/* Swapped "W" for "P" */}
             <span className="xp-app-icon">P</span> {programName} - {fileName || 'Document1'}
           </div>
           <div className="xp-window-controls">
             <button className="xp-control-btn min">-</button>
             <button className="xp-control-btn max">□</button>
             <button className="xp-control-btn close" onClick={handleExit}>×</button>
           </div>
        </div>

        <div className="xp-menu-bar">
          <span>File</span><span>Edit</span><span>View</span><span>Insert</span><span>Format</span><span>Help</span>
        </div>

        <div className="xp-toolbar">
           <button className="xp-tool-btn" title="Save">💾</button>
           <div className="xp-divider"></div>
           <button className="xp-tool-btn">🖨️</button>
           <button className="xp-tool-btn">✂️</button>
           <button className="xp-tool-btn">📋</button>
        </div>

        <div className="xp-content-area">
           <textarea
             value={entry}
             onChange={(e) => setEntry(e.target.value)}
             placeholder="Tap here to begin writing."
             autoFocus
             spellCheck="false"
           />
        </div>

        <div className="xp-status-bar" style={{ display: 'flex', justifyContent: 'space-between', padding: '0 5px', alignItems: 'center' }}>
           <div style={{ display: 'flex', gap: '15px', alignItems: 'center', paddingLeft: '10px' }}>
              <button onClick={triggerLoad} style={{ cursor: 'pointer', background: 'none', border: 'none', fontFamily: 'inherit', color: 'inherit' }}>Load</button>
              <button onClick={triggerSave} style={{ cursor: 'pointer', background: 'none', border: 'none', fontFamily: 'inherit', color: 'inherit' }}>Save</button>
              <button onClick={handleExit} style={{ cursor: 'pointer', background: 'none', border: 'none', fontFamily: 'inherit', color: 'inherit' }}>Exit</button>
           </div>
           <div style={{ display: 'flex' }}>
              <div className="xp-status-item">Ln {entry.split('\n').length}</div>
              <div className="xp-status-item">Col {entry.length}</div>
           </div>
        </div>
      </div>

      <div className="xp-taskbar">
         <button className="xp-start-button" onClick={handleExit}>
            <span className="xp-flag">❖</span> start
         </button>
         <div className="xp-task-group">
            <div className="xp-task-item active">
               {/* Swapped "W" for "P" */}
               <span className="xp-app-icon">P</span> {fileName || 'Document1'}
            </div>
         </div>
         <div className="xp-tray">
            {/* Formatted local time */}
            <span className="xp-time">
              {time.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' })}
            </span>
         </div>
      </div>
    </div>
  );
}

export default DoorwaysXP;