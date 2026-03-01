import React from 'react';
import './Admiral75.css';

function Admiral75({ 
  entry, 
  setEntry, 
  fileName, 
  setFileName, 
  triggerSave, 
  handleExit, 
  programName 
}) {
  return (
    <div className="screen">
      
      {/* C64 HEADER */}
      <div className="c64-header-container">
        <div className="c64-header-bar">{programName}</div>
        <div className="c64-subtext">(c) 1984 Admiral Computers</div>
      </div>

      {/* TEXT AREA */}
      <textarea
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="Start journaling..."
        autoFocus
        spellCheck="false"
      />
      
      {/* C64 FOOTER / STATUS BAR */}
      <div className="retro-status-bar">
         <div className="status-field">
           <span>FILE:</span>
           <input 
             type="text" 
             value={fileName} 
             /* C64 loved uppercase file names! */
             onChange={(e) => setFileName(e.target.value.toUpperCase())} 
           />
         </div>
         <div className="command-group">
           <button onClick={triggerSave}>[F1] SAVE</button>
           <button onClick={handleExit}>[ESC] EXIT</button>
         </div>
      </div>

    </div>
  );
}

export default Admiral75;