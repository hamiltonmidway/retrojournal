import React from 'react';
import './DoorwaysXP.css';

function DoorwaysXP({ 
  entry, 
  setEntry, 
  fileName, 
  setFileName, 
  triggerSave, 
  handleExit, 
  programName 
}) {
  return (
    <div className="xp-desktop">
      
      <div className="xp-window">
        <div className="xp-title-bar">
           <div className="xp-title-text">
             <span className="xp-app-icon">W</span> {programName} - {fileName}
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
           {/* Using our secure triggerSave tool! */}
           <button className="xp-tool-btn" onClick={triggerSave} title="Save">💾</button>
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
         {/* Using our secure handleExit tool to go back to the menu! */}
         <button className="xp-start-button" onClick={handleExit}>
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
  );
}

export default DoorwaysXP;