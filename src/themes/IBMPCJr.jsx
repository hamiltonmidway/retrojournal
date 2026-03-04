import React from 'react';
import './IBMPCJr.css';

function IBMPCJr({ 
  entry, 
  setEntry, 
  fileName, 
  setFileName, 
  triggerLoad, 
  triggerSave, 
  handleExit,
  programName
}) {
  // Calculate the lines dynamically just like the real software!
  const lineCount = entry.split('\n').length;
  
// The exact, chaotic ruler from the 1984 screenshot, repeated to fill any screen!
  const baseRuler = "«_.1._..:.._.2._..:.._.3._..:.._.4._..:.._.5._..:.._.6._..:.._.7._..:.._.8._..:.._.9._..:..";
  const displayWriteRuler = baseRuler.repeat(10);

  return (
    <div className="screen">
      
      {/* 1. THE DISPLAYWRITE HEADER */}
      <div className="ox-header-container">
         <div className="ox-header-row">
            <div className="ox-left-col">Revising Document</div>
            <div className="ox-right-col">
               <span className="ox-pipe">|</span>
               {/* DisplayWrite liked uppercase extensions like .TX or .DOC */}
               <span>{fileName ? fileName.toUpperCase() : 'UNTITLED.DOC'}</span>
            </div>
         </div>
         <div className="ox-header-row">
            <div className="ox-left-col">Page Format Change</div>
            <div className="ox-right-col">
               <span className="ox-pipe">|</span><span>Ins</span>
               <span className="ox-pipe">|</span><span>Pg.1</span>
               <span className="ox-pipe">|</span><span>Ln.{lineCount}</span>
            </div>
         </div>
      </div>

      {/* 2. THE RULER */}
      <div className="ox-ruler">
         {displayWriteRuler}
      </div>

      {/* 3. THE EDITOR */}
      <textarea
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="Tap here to begin writing."
        autoFocus
        spellCheck="false"
      />

      {/* 4. THE COMMAND FOOTER */}
      <div className="ox-footer">
         <div className="ox-commands" style={{ width: '100%', justifyContent: 'space-between', display: 'flex' }}>
            <button onClick={triggerLoad}>[F3] Load</button>
            <button onClick={triggerSave}>[F1] Save</button>
            <button onClick={handleExit}>[Esc] Exit</button>
         </div>
      </div>

    </div>
  );
}

export default IBMPCJr;