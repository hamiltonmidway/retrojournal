import React from 'react';
import './Admiral75.css';

function Admiral75({ 
  entry, 
  setEntry, 
  triggerLoad, 
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
        placeholder="Tap here to begin writing."
        autoFocus
        spellCheck="false"
      />
      
      {/* C64 FOOTER / STATUS BAR */}
      <div className="retro-status-bar">
         {/* Updated to our clean 3-button layout */}
         <div className="command-group" style={{ width: '100%', justifyContent: 'space-between' }}>
           <button onClick={triggerLoad}>[F3] LOAD</button>
           <button onClick={triggerSave}>[F1] SAVE</button>
           <button onClick={handleExit}>[ESC] EXIT</button>
         </div>
      </div>

    </div>
  );
}

export default Admiral75;