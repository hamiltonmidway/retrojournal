import React from 'react';
import './Doorways95.css';

function Doorways95({ 
  entry, 
  setEntry, 
  fileName, 
  setFileName, 
  triggerSave, 
  handleExit, 
  programName 
}) {
  const lineCount = entry.split('\n').length;
  
  return (
    <div className="win95-desktop">
      
      {/* 1. THE MAIN WINDOW FRAME */}
      <div className="win95-window">
        
        {/* 2. TITLE BAR (Classic Blue Gradient) */}
        <div className="win95-title-bar">
           <div className="win95-title-text">
             <span className="win95-app-icon">📝</span> {programName} - {fileName ? fileName : 'Document1'}
           </div>
           <div className="win95-window-controls">
             <button className="win95-control-btn">_</button>
             <button className="win95-control-btn">□</button>
             <button className="win95-control-btn close-btn" onClick={handleExit}>×</button>
           </div>
        </div>

        {/* 3. MENU BAR */}
        <div className="win95-menu-bar">
          <span className="win95-menu-item"><span className="underline">F</span>ile</span>
          <span className="win95-menu-item"><span className="underline">E</span>dit</span>
          <span className="win95-menu-item"><span className="underline">V</span>iew</span>
          <span className="win95-menu-item"><span className="underline">I</span>nsert</span>
          <span className="win95-menu-item"><span className="underline">F</span>ormat</span>
          <span className="win95-menu-item"><span className="underline">T</span>able</span>
          <span className="win95-menu-item"><span className="underline">G</span>raphics</span>
          <span className="win95-menu-item"><span className="underline">T</span>ools</span>
          <span className="win95-menu-item"><span className="underline">W</span>indow</span>
          <span className="win95-menu-item"><span className="underline">H</span>elp</span>
        </div>

        {/* 4. CHUNKY TOOLBARS (Mimicking WordPerfect) */}
        <div className="win95-toolbar-area">
            {/* Top Row: File & Edit Controls */}
            <div className="win95-toolbar-row">
                <button className="win95-tool-btn">📂</button>
                <button className="win95-tool-btn" onClick={triggerSave} title="Save">💾</button>
                <div className="win95-divider"></div>
                <button className="win95-tool-btn">🖨️</button>
                <div className="win95-divider"></div>
                <button className="win95-tool-btn">✂️</button>
                <button className="win95-tool-btn">📋</button>
                <button className="win95-tool-btn">🗑️</button>
                <div className="win95-divider"></div>
                <button className="win95-tool-btn" style={{ fontWeight: 'bold' }}>b</button>
                <button className="win95-tool-btn" style={{ fontStyle: 'italic' }}>i</button>
                <button className="win95-tool-btn" style={{ textDecoration: 'underline' }}>u</button>
                <div className="win95-divider"></div>
                <button className="win95-tool-btn">A<span style={{fontSize:'8px'}}>b</span></button>
                <button className="win95-tool-btn">📑</button>
            </div>

            {/* Bottom Row: Formatting Dropdowns */}
            <div className="win95-toolbar-row">
                <div className="win95-dropdown" style={{ width: '100px' }}>
                    <span>QuickFonts</span>
                    <button className="win95-drop-arrow">▼</button>
                </div>
                <div className="win95-dropdown" style={{ width: '140px' }}>
                    <span>Times New Roman</span>
                    <button className="win95-drop-arrow">▼</button>
                </div>
                <div className="win95-dropdown" style={{ width: '60px' }}>
                    <span>12 pt</span>
                    <button className="win95-drop-arrow">▼</button>
                </div>
                <div className="win95-dropdown" style={{ width: '80px' }}>
                    <span>Styles</span>
                    <button className="win95-drop-arrow">▼</button>
                </div>
            </div>
        </div>

        {/* 5. CONTENT AREA */}
        <div className="win95-content-wrapper">
           <textarea
             className="win95-textarea"
             value={entry}
             onChange={(e) => setEntry(e.target.value)}
             placeholder="Start typing..."
             autoFocus
             spellCheck="false"
           />
           {/* Vertical Scrollbar */}
           <div className="win95-scrollbar-v">
              <button className="win95-scroll-btn">▲</button>
              <div className="win95-scroll-track"><div className="win95-scroll-thumb"></div></div>
              <button className="win95-scroll-btn">▼</button>
           </div>
        </div>

        {/* Horizontal Scrollbar Row */}
        <div className="win95-h-scroll-row">
           <div className="win95-h-blank"></div>
           <div className="win95-scrollbar-h">
              <button className="win95-scroll-btn-h">◄</button>
              <div className="win95-scroll-track-h"><div className="win95-scroll-thumb-h"></div></div>
              <button className="win95-scroll-btn-h">►</button>
           </div>
           <div className="win95-scroll-corner"></div>
        </div>

        {/* 6. STATUS BAR (Inset 3D panels) */}
        <div className="win95-status-bar">
           <div className="win95-status-panel">Insert</div>
           <div className="win95-status-panel">No Printer</div>
           <div className="win95-status-panel">Select</div>
           <div className="win95-status-panel" style={{ flexGrow: 1 }}>
              Pg 1 Ln {lineCount}" Pos {entry.length}"
           </div>
        </div>

      </div>

      {/* 7. THE TASKBAR */}
      <div className="win95-taskbar">
        <button className="win95-start-btn" onClick={handleExit}>
          <span className="win95-flag">❖</span> <strong>Start</strong>
        </button>
        <div className="win95-taskbar-divider"></div>
        <div className="win95-task-item active">
          <span className="win95-app-icon">📝</span> Doorways 95 - [{fileName ? fileName : 'Document1'}]
        </div>
        <div className="win95-system-tray">
          <span>3:27 PM</span>
        </div>
      </div>

    </div>
  );
}

export default Doorways95;