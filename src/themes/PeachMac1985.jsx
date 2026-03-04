import React from 'react';
import './PeachMac1985.css';

function PeachMac1985({ 
  entry, 
  setEntry, 
  fileName, 
  triggerLoad, 
  triggerSave, 
  handleExit 
}) {
  return (
    <div className="mac-desktop">
      
      <div className="mac-menu-bar">
        {/* Replaced the proprietary Apple logo with our Black Peach! */}
        <span className="mac-menu-apple">🍑</span>
        <span className="mac-menu-item active">File</span>
        <span className="mac-menu-item">Edit</span>
        <span className="mac-menu-item">Search</span>
        <span className="mac-menu-item">Format</span>
        <span className="mac-menu-item">Font</span>
        <span className="mac-menu-item">Style</span>
      </div>

      <div className="mac-window">
         <div className="mac-title-bar">
            {/* Using our secure handleExit tool! */}
            <button className="mac-close-box" onClick={handleExit}></button>
            <div className="mac-title-text-container">
               <span className="mac-title-text">{fileName}</span>
            </div>
         </div>

         <div className="mac-ruler">
            <div className="ruler-line">
              <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span>
            </div>
         </div>

         <div className="mac-content">
            <textarea
              value={entry}
              onChange={(e) => setEntry(e.target.value)}
              placeholder="Tap here to begin writing."
              autoFocus
              spellCheck="false"
            />
            <div className="mac-scrollbar">
               <div className="scroll-arrow">▲</div>
               <div className="scroll-track"><div className="scroll-thumb"></div></div>
               <div className="scroll-arrow">▼</div>
            </div>
         </div>
         
         <div className="mac-footer" style={{ justifyContent: 'space-between', alignItems: 'center', paddingLeft: '15px' }}>
            <div style={{ display: 'flex', gap: '15px' }}>
               <button onClick={triggerLoad} style={{ cursor: 'pointer', fontFamily: 'inherit', background: 'none', border: 'none', textDecoration: 'underline', color: 'inherit' }}>Load</button>
               <button onClick={triggerSave} style={{ cursor: 'pointer', fontFamily: 'inherit', background: 'none', border: 'none', textDecoration: 'underline', color: 'inherit' }}>Save</button>
               <button onClick={handleExit} style={{ cursor: 'pointer', fontFamily: 'inherit', background: 'none', border: 'none', textDecoration: 'underline', color: 'inherit' }}>Exit</button>
            </div>
            <div className="mac-resize-box"><div className="resize-icon"></div></div>
         </div>
      </div>
      
    </div>
  );
}

export default PeachMac1985;