import React from 'react';
import './IBMPCJr.css';

function IBMPCJr({ 
  entry, 
  setEntry, 
  fileName, 
  setFileName, 
  triggerSave, 
  handleExit,
  programName
}) {
  // Calculate the lines dynamically just like the real software!
  const lineCount = entry.split('\n').length;
  
  // The exact, chaotic ruler from the 1984 screenshot
  const displayWriteRuler = "«..:.._..2.._..:.._.3._..:.._.4.⌂..:.._.5._..:.._.6._..:.._.7.»..:.._.8._..▪.._.9.";

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
        placeholder="Start typing..."
        autoFocus
        spellCheck="false"
      />

      {/* 4. THE COMMAND FOOTER */}
      <div className="ox-footer">
         <div className="ox-file-controls">
            <span>File: </span>
            <input 
              className="ox-filename-input"
              value={fileName} 
              onChange={(e) => setFileName(e.target.value)} 
            />
         </div>
         <div className="ox-commands">
            <button onClick={triggerSave}>[F1] Save</button>
            <button onClick={handleExit}>[Esc] Exit</button>
         </div>
      </div>

    </div>
  );
}

export default IBMPCJr;