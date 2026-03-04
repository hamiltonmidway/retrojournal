import React, { useState, useEffect } from 'react';
import './PeachAqua.css';

function PeachAqua({ 
  entry, 
  setEntry, 
  fileName, 
  setFileName, 
  triggerSave, 
  triggerLoad,
  handleExit, 
  programName 
}) {
  // 1. Set up the local clock state
  const [time, setTime] = useState(new Date());

  // 2. Make the clock tick every minute (no internet required!)
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="aqua-desktop">
      
      {/* 1. TOP GLOBAL MENU BAR */}
      <div className="aqua-global-menu">
         <div className="aqua-menu-left">
            <span className="aqua-apple-icon">🍑</span>
            <span className="aqua-menu-active">{programName}</span>
            <span>File</span>
            <span>Edit</span>
            <span>Format</span>
            <span>Text</span>
            <span>Outline</span>
            <span>Table</span>
            <span>Window</span>
            <span>Help</span>
         </div>
         <div className="aqua-menu-right">
            {/* Dynamic local day and time */}
            <span>
              {time.toLocaleDateString(undefined, { weekday: 'short' })} {time.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' })}
            </span>
         </div>
      </div>

      {/* 2. MAIN WINDOW FRAME */}
      <div className="aqua-window">
        
        {/* Title Bar with Stoplights and Pinstripes */}
        <div className="aqua-title-bar">
           <div className="aqua-stoplights">
             {/* Red Close Button exits the journal! */}
             <div className="aqua-light red" onClick={handleExit}></div>
             <div className="aqua-light yellow"></div>
             <div className="aqua-light green"></div>
           </div>
           <div className="aqua-title-text">
             {fileName ? fileName : 'Untitled.doc'} (WP)
           </div>
           {/* Empty div to balance flexbox */}
           <div className="aqua-title-spacer"></div>
        </div>

        {/* 3. APPLEWORKS TOOLBAR */}
        <div className="aqua-toolbar">
           <div className="aqua-tool-group">
              <button className="aqua-btn" onClick={triggerSave} title="Save">💾</button>
              <button className="aqua-btn">🖨️</button>
           </div>
           <div className="aqua-divider"></div>
           <div className="aqua-tool-group">
              <button className="aqua-btn" style={{ fontWeight: 'bold', fontFamily: 'serif' }}>B</button>
              <button className="aqua-btn" style={{ fontStyle: 'italic', fontFamily: 'serif' }}>I</button>
              <button className="aqua-btn" style={{ textDecoration: 'underline', fontFamily: 'serif' }}>U</button>
           </div>
           <div className="aqua-divider"></div>
           <div className="aqua-tool-group">
              <div className="aqua-dropdown" style={{ width: '140px' }}>
                  <span>Lucida Grande</span>
                  <div className="aqua-drop-arrows">↕</div>
              </div>
              <div className="aqua-dropdown" style={{ width: '50px' }}>
                  <span>12</span>
                  <div className="aqua-drop-arrows">↕</div>
              </div>
           </div>
        </div>

        {/* 4. THE RULER */}
        <div className="aqua-ruler">
            <div className="aqua-ruler-ticks">
               <span>0</span><span>.</span><span>.</span><span>.</span><span>1</span><span>.</span><span>.</span><span>.</span><span>2</span><span>.</span><span>.</span><span>.</span><span>3</span><span>.</span><span>.</span><span>.</span><span>4</span><span>.</span><span>.</span><span>.</span><span>5</span><span>.</span><span>.</span><span>.</span><span>6</span><span>.</span><span>.</span><span>.</span><span>7</span>
            </div>
        </div>

        {/* 5. CONTENT AREA */}
        <div className="aqua-content-wrapper">
           <textarea
             className="aqua-textarea"
             value={entry}
             onChange={(e) => setEntry(e.target.value)}
             placeholder="Tap here to begin writing."
             autoFocus
             spellCheck="false"
           />
           {/* Aqua Gel Scrollbar */}
           <div className="aqua-scrollbar-v">
              <div className="aqua-scroll-track">
                  <div className="aqua-scroll-thumb">
                      <div className="aqua-thumb-ridges">
                          <div></div><div></div><div></div>
                      </div>
                  </div>
              </div>
              <div className="aqua-scroll-buttons">
                  <button className="aqua-scroll-btn">▲</button>
                  <button className="aqua-scroll-btn">▼</button>
              </div>
           </div>
        </div>

        {/* 6. BOTTOM STATUS BAR */}
        <div className="aqua-status-bar" style={{ justifyContent: 'space-between', padding: '0 10px', alignItems: 'center' }}>
           <div style={{ display: 'flex', gap: '15px', padding: '4px 0' }}>
              <button onClick={triggerLoad} style={{ cursor: 'pointer', background: 'none', border: 'none', color: '#0055cc' }}>Load</button>
              <button onClick={triggerSave} style={{ cursor: 'pointer', background: 'none', border: 'none', color: '#0055cc' }}>Save</button>
              <button onClick={handleExit} style={{ cursor: 'pointer', background: 'none', border: 'none', color: '#cc0000' }}>Exit</button>
           </div>
           <div className="aqua-status-item" style={{ borderRight: 'none' }}>
              <span style={{color: '#0055cc'}}>▼</span> Page {entry.split('\n').length}
           </div>
        </div>
      </div>
    </div>
  );
}

export default PeachAqua;