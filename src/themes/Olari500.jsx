import React from 'react';
import './Olari500.css';

function Olari500({ 
  entry, 
  setEntry, 
  fileName, 
  setFileName, 
  triggerSave, 
  handleExit,
  programName
}) {
  // Quick math for the bottom status bar!
  const lineCount = entry.split('\n').length;
  const colCount = entry.length;

  return (
    <div className="screen">
      
      {/* 1. TOP TITLE */}
      <div className="olari-header">
         {programName}
      </div>

      {/* 2. THE BLUE EDITOR SCREEN */}
      <div className="olari-blue-screen">
         
         {/* The Cryptic Formatting Codes */}
         <div className="olari-top-bar">
            <span><span className="inv-char">B</span>12</span>
            <span><span className="inv-char">D</span>4</span>
            <span><span className="inv-char">G</span>1</span>
            <span><span className="inv-char">I</span>5</span>
            <span><span className="inv-char">J</span>0</span>
            <span><span className="inv-char">L</span>10</span>
            <span><span className="inv-char">R</span>70</span>
            <span><span className="inv-char">S</span>2</span>
            <span><span className="inv-char">T</span>12</span>
            <span><span className="inv-char">Y</span>132</span>
            <span className="inv-char">←</span>
         </div>

         <textarea
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            autoFocus
            spellCheck="false"
         />

         {/* The Bottom Ruler & Stats */}
         <div className="olari-bottom-bar">
            <div className="olari-arrows">
              <span>↑</span><span>↑</span><span>↑</span><span>↑</span><span>↑</span><span>↑</span>
            </div>
            <div className="olari-stats">
              <span>L:{lineCount} &nbsp; C:{colCount}</span>
            </div>
         </div>

      </div>

      {/* 3. THE BLACK OVERSCAN FOOTER */}
      <div className="olari-footer">
         <div className="olari-commands">
            <button onClick={handleExit} className="olari-btn">
               PRESS <span className="key">ESC</span> TO RETURN TO MENU
            </button>
            <div className="olari-filename">
               FILE: <input value={fileName} onChange={(e) => setFileName(e.target.value)} />
            </div>
            <button onClick={triggerSave} className="olari-btn">
               PRESS <span className="key">F1</span> TO SAVE
            </button>
         </div>

         <div className="olari-copyright">
            (c) 1982 Olari, Inc All Rights Reserved
         </div>
      </div>

    </div>
  );
}

export default Olari500;