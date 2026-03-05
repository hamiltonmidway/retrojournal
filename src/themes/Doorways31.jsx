import React from 'react';
import './Doorways31.css';


function Doorways31({ 
  entry, 
  setEntry, 
  fileName, 
  setFileName, 
  triggerLoad, 
  triggerSave, 
  handleExit, 
  programName 
}) {
  const lineCount = entry.split('\n').length;
  
  return (
    <div className="screen win31-container">
      
      {/* 1. THE MAIN WINDOW FRAME */}
      <div className="win31-window">
        
        {/* 2. TITLE BAR (Deep Blue) */}
        <div className="win31-title-bar">
           <div className="win31-control-box"><span>-</span></div>
           <div className="win31-title-text">
             {programName} - {fileName ? fileName.toUpperCase() : 'DOCUMENT1'}
           </div>
           <div className="win31-window-controls">
             <button className="win31-btn-arrow">▼</button>
             <button className="win31-btn-arrow">▲</button>
           </div>
        </div>

        {/* 3. MENU BAR */}
        <div className="win31-menu-bar">
          <span className="win31-menu-item"><span className="underline">F</span>ile</span>
          <span className="win31-menu-item"><span className="underline">E</span>dit</span>
          <span className="win31-menu-item"><span className="underline">V</span>iew</span>
          <span className="win31-menu-item"><span className="underline">I</span>nsert</span>
          <span className="win31-menu-item"><span className="underline">F</span>ormat</span>
          <span className="win31-menu-item"><span className="underline">T</span>ools</span>
          <span className="win31-menu-item"><span className="underline">T</span>able</span>
          <span className="win31-menu-item"><span className="underline">W</span>indow</span>
          <span className="win31-menu-item"><span className="underline">H</span>elp</span>
        </div>

        {/* 4. CHUNKY TOOLBARS */}
        <div className="win31-toolbar-area">
            {/* Top Row: File Controls */}
            <div className="win31-toolbar-row">
                <button className="win31-tool-btn">📄</button>
                <button className="win31-tool-btn">📂</button>
                <div className="win31-divider"></div>
                <button className="win31-tool-btn">✂️</button>
                <button className="win31-tool-btn">📋</button>
                <div className="win31-divider"></div>
                <button className="win31-tool-btn">undo</button>
            </div>

            {/* Bottom Row: Formatting Controls */}
            <div className="win31-toolbar-row">
                <div className="win31-dropdown">
                    <span>Normal</span>
                    <button className="win31-drop-arrow">↓</button>
                </div>
                <div className="win31-dropdown">
                    <span>Arial</span>
                    <button className="win31-drop-arrow">↓</button>
                </div>
                <div className="win31-dropdown" style={{ width: '40px' }}>
                    <span>10</span>
                    <button className="win31-drop-arrow">↓</button>
                </div>
                <div className="win31-divider"></div>
                <button className="win31-tool-btn" style={{ fontWeight: 'bold', fontFamily: 'Arial' }}>B</button>
                <button className="win31-tool-btn" style={{ fontStyle: 'italic', fontFamily: 'Arial' }}>I</button>
                <button className="win31-tool-btn" style={{ textDecoration: 'underline', fontFamily: 'Arial' }}>U</button>
            </div>
        </div>

        {/* 5. THE RULER */}
        <div className="win31-ruler">
            <span>[</span>
            <span>. . . . 1 . . . . 2 . . . . 3 . . . . 4 . . . . 5 . . . . 6 . . . . 7</span>
            <span>]</span>
        </div>


        {/* 6. CONTENT AREA (White Paper) */}
        <div className="win31-content-wrapper">
           <textarea
             className="win31-textarea"
             value={entry}
             onChange={(e) => setEntry(e.target.value)}
             placeholder="Tap here to begin writing."
             autoFocus
             spellCheck="false"
           />
           {/* Vertical Scrollbar */}
           <div className="win31-scrollbar-v">
              <button className="win31-scroll-btn">▲</button>
              <div className="win31-scroll-track"><div className="win31-scroll-thumb"></div></div>
              <button className="win31-scroll-btn">▼</button>
           </div>
        </div>

        {/* Horizontal Scrollbar Row */}
        <div className="win31-h-scroll-row">
           <div className="win31-h-blank"></div>
           <div className="win31-scrollbar-h">
              <button className="win31-scroll-btn-h">◄</button>
              <div className="win31-scroll-track-h"><div className="win31-scroll-thumb-h"></div></div>
              <button className="win31-scroll-btn-h">►</button>
           </div>
           <div className="win31-scroll-corner"></div>
        </div>

        {/* 7. STATUS BAR */}
        <div className="win31-status-bar" style={{ display: 'flex', justifyContent: 'space-between', padding: '0 5px' }}>
           <div style={{ display: 'flex', gap: '15px', alignItems: 'center', paddingLeft: '10px' }}>
              <button onClick={triggerLoad} style={{ cursor: 'pointer', background: 'none', border: 'none', fontFamily: 'inherit', fontWeight: 'bold' }}>Load</button>
              <button onClick={triggerSave} style={{ cursor: 'pointer', background: 'none', border: 'none', fontFamily: 'inherit', fontWeight: 'bold' }}>Save</button>
              <button onClick={handleExit} style={{ cursor: 'pointer', background: 'none', border: 'none', fontFamily: 'inherit', fontWeight: 'bold' }}>Exit</button>
           </div>
           <div style={{ display: 'flex' }}>
              <div className="win31-status-panel">Ln {lineCount}</div>
              <div className="win31-status-panel">Col {entry.length}</div>
           </div>
        </div>

      </div>
    </div>
  );
}

export default Doorways31;