import React from 'react';
import './PeachIIe.css';

function PeachIIe({ 
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
      
      {/* HEADER */}
      <div className="apple-header">
        <div className="apple-header-border">
          <div className="apple-header-text">
            {programName} <br/> COPYRIGHT 1981, PEACH COMPUTER INC.
          </div>
        </div>
      </div>

      {/* TEXT AREA */}
      <textarea
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="Start journaling..."
        autoFocus
        spellCheck="false"
      />
      
      {/* FOOTER / STATUS BAR */}
      <div className="retro-status-bar">
         <div className="status-field">
           <span>FILE:</span>
           <input 
             type="text" 
             value={fileName} 
             /* We keep the uppercase logic here because it fits the Apple IIe aesthetic! */
             onChange={(e) => setFileName(e.target.value.toUpperCase())} 
           />
         </div>
         <div className="command-group">
           <button onClick={triggerSave}>[CTRL-S] SAVE</button>
           <button onClick={handleExit}>[ESC] EXIT</button>
         </div>
      </div>

    </div>
  );
}

export default PeachIIe;