import React from 'react';
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
  return (
    <div className="xp-desktop">
      
      <div className="xp-window">
        <div className="xp-title-bar">
           <div className="xp-title-text">
             <span className="xp-app-icon">W</span> {programName} - {fileName || 'Document1'}
           </div>
           <div className="xp-window-controls">
             <button className="xp-control-btn min">-</button>
             <button className="xp-control-btn max">□</button>
             {/* Using our secure handleExit tool! */}
             <button className="xp-control-btn close" onClick={handleExit}>×</button>
           </div>
        </div>

        <div className="xp-menu-bar">
          <span>File</span><span>Edit</span><span>View</span><span>Insert</span><span>Format</span><span>Help</span>
        </div>

        <div className="xp-toolbar">
           {/* The icon stays for the retro aesthetic, but the functional button is moved to the bottom! */}
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
         {/* Using our secure handleExit tool to go back to the menu! */}
         <button className="xp-start-button" onClick={handleExit}>
            <span className="xp-flag">❖</span> start
         </button>
         <div className="xp-task-group">
            <div className="xp-task-item active">
               <span className="xp-app-icon">W</span> {fileName || 'Document1'}
            </div>
         </div>
         <div className="xp-tray">
            <span className="xp-time">12:00 PM</span>
         </div>
      </div>
    </div>
  );
}

export default DoorwaysXP;