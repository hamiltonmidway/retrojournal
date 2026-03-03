import React from 'react';
import './Olari500.css';

function Olari500({ entry, setEntry, triggerLoad, triggerSave, handleExit, programName }) {
  const lineCount = entry.split('\n').length;
  const colCount = entry.length;

  return (
    <div className="screen">
      <div className="olari-header">{programName}</div>
      <div className="olari-blue-screen">
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
            placeholder="Tap here to begin writing."
            autoFocus
            spellCheck="false"
         />

         <div className="olari-bottom-bar">
            <div className="olari-arrows">
              <span>↑</span><span>↑</span><span>↑</span><span>↑</span><span>↑</span><span>↑</span>
            </div>
            <div className="olari-stats">
              <span>L:{lineCount} &nbsp; C:{colCount}</span>
            </div>
         </div>
      </div>

      <div className="olari-footer">
         <div className="olari-commands" style={{ justifyContent: 'center', gap: '3rem' }}>
            <button onClick={triggerLoad} className="olari-btn">
               <span className="key">F2</span> LOAD
            </button>
            <button onClick={triggerSave} className="olari-btn">
               <span className="key">F1</span> SAVE
            </button>
            <button onClick={handleExit} className="olari-btn">
               <span className="key">ESC</span> EXIT
            </button>
         </div>
         <div className="olari-copyright">(c) 1982 Olari, Inc All Rights Reserved</div>
      </div>
    </div>
  );
}

export default Olari500;