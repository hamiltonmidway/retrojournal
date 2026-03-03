import React from 'react';
import './PeachIIe.css';

function PeachIIe({ entry, setEntry, triggerLoad, triggerSave, handleExit, programName }) {
  return (
    <div className="screen">
      <div className="apple-header">
        <div className="apple-header-border">
          <div className="apple-header-text">
            {programName} <br/> COPYRIGHT 1981, PEACH COMPUTER INC.
          </div>
        </div>
      </div>

      <textarea
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="Tap here to begin writing."
        autoFocus
        spellCheck="false"
      />
      
      <div className="retro-status-bar">
         {/* Updated to a clean 3-button layout */}
         <div className="command-group" style={{ width: '100%', justifyContent: 'space-between' }}>
           <button onClick={triggerLoad}>[CTRL-L] LOAD</button>
           <button onClick={triggerSave}>[CTRL-S] SAVE</button>
           <button onClick={handleExit}>[ESC] EXIT</button>
         </div>
      </div>
    </div>
  );
}

export default PeachIIe;