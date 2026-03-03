import React from 'react';
import './Dos1987.css';

function Dos1987({ 
  entry, 
  setEntry, 
  fileName, 
  triggerLoad, 
  triggerSave, 
  handleExit,
  programName
}) {
  // We can use the actual entry length to make the column counter dynamic!
  const colCount = entry.length;

  return (
    <div className="screen dos-1987-container">
      
      {/* 1. TOP MENU BAR (Grey) */}
      <div className="dos-menu-bar">
        <div className="dos-menu-items">
          <span>File</span>
          <span>Edit</span>
          <span>View</span>
          <span>Insert</span>
          <span>Format</span>
          <span>Utilities</span>
          <span>Macro</span>
          <span>Window</span>
        </div>
        <div>Help</div>
      </div>

      {/* 2. TITLE BAR (Cyan) */}
      <div className="dos-title-bar">
        <span className="dos-window-control">■</span>
        <div className="dos-title-line"></div>
        
        {/* If no filename is set, it defaults to Document1 just like the screenshot */}
        <span className="dos-filename">{fileName || 'Document1'}</span>
        
        <div className="dos-title-line"></div>
        <span className="dos-window-control">↕</span>
      </div>

      {/* 3. MAIN EDITOR AREA */}
      <div className="dos-main-area">
        
        <textarea
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          placeholder="Tap here to begin writing."
          autoFocus
          spellCheck="false"
        />

        {/* Vertical Scrollbar (Grey) */}
        <div className="dos-scrollbar-v">
          <div className="dos-arrow">↑</div>
          <div className="dos-scroll-track-v">
             <div className="dos-scroll-thumb-v"></div>
          </div>
          <div className="dos-arrow">↓</div>
        </div>
      </div>

      {/* 4. BOTTOM SECTION */}
      <div className="dos-bottom-section">
         
         {/* Horizontal Scrollbar (Grey & Dithered) */}
         <div className="dos-scrollbar-h">
            <span className="dos-window-control">■</span>
            <div className="dos-scroll-track-h">
               <div className="dos-scroll-thumb-h"></div>
            </div>
            <div className="dos-h-arrows">
               <span>◄</span>
               <span>►</span>
               <span className="dos-window-control corner-box">■</span>
            </div>
         </div>

         {/* Status Bar (Grey) */}
         <div className="dos-status-bar">
            <span>Pg1 Co{colCount}</span>
            <span>{`{}`}</span>
            <span>&lt;F1=Help&gt;</span>
            <span className="dos-brand-name">DX-Disk 87</span>
         </div>

         {/* Command Bar (Cyan) */}
         <div className="dos-command-bar" style={{ display: 'flex', justifyContent: 'space-between', padding: '0 50px' }}>
            <button onClick={triggerLoad} style={{ cursor: 'pointer', background: 'none', border: 'none', fontFamily: 'inherit', color: 'inherit' }}>Load</button>
            <button onClick={triggerSave} style={{ cursor: 'pointer', background: 'none', border: 'none', fontFamily: 'inherit', color: 'inherit' }}>Save</button>
            <button onClick={handleExit} style={{ cursor: 'pointer', background: 'none', border: 'none', fontFamily: 'inherit', color: 'inherit' }}>Exit</button>
         </div>

      </div>

    </div>
  );
}

export default Dos1987;