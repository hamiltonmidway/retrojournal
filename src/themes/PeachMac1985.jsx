import React from 'react';

function PeachMac1985({ 
  entry, 
  setEntry, 
  fileName, 
  triggerSave, 
  handleExit 
}) {
  return (
    <div className="mac-desktop">
      
      <div className="mac-menu-bar">
        <span className="mac-menu-apple"></span>
        <span className="mac-menu-item active">File</span>
        <span className="mac-menu-item">Edit</span>
        <span className="mac-menu-item">Search</span>
        <span className="mac-menu-item">Format</span>
        <span className="mac-menu-item">Font</span>
        <span className="mac-menu-item">Style</span>
      </div>

      <div className="mac-window">
         <div className="mac-title-bar">
            {/* Using our new secure handleExit tool! */}
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
              placeholder="Type your masterpiece..."
              autoFocus
              spellCheck="false"
            />
            <div className="mac-scrollbar">
               <div className="scroll-arrow">▲</div>
               <div className="scroll-track"><div className="scroll-thumb"></div></div>
               <div className="scroll-arrow">▼</div>
            </div>
         </div>
         
         <div className="mac-footer">
            <div className="mac-resize-box"><div className="resize-icon"></div></div>
         </div>
      </div>
      
      {/* Using our new secure triggerSave tool! */}
      <button className="mac-floppy-btn" onClick={triggerSave}>Save to Disk</button>
    </div>
  );
}

export default PeachMac1985;