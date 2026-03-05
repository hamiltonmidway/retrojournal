import React from 'react';
import './PeachOS7.css';

function PeachOS7({ 
  entry, 
  setEntry, 
  fileName, 
  setFileName, 
  triggerSave, 
  triggerLoad,
  handleExit,
  programName
}) {
  return (
    <div className="screen">
      
      {/* === 1. GLOBAL MENU BAR === */}
      <div className="os7-global-menu">
         <div className="os7-menu-left">
            {/* Colorful Peach Icon */}
            <div className="os7-apple-menu">
               <svg width="21" height="24" viewBox="0 0 100 120">
                  <defs>
                    <linearGradient id="rainbowStripes" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="16%" stopColor="#57b947" /><stop offset="16%" stopColor="#f3c200" />
                      <stop offset="32%" stopColor="#f3c200" /><stop offset="32%" stopColor="#f48020" />
                      <stop offset="48%" stopColor="#f48020" /><stop offset="48%" stopColor="#db3038" />
                      <stop offset="64%" stopColor="#db3038" /><stop offset="64%" stopColor="#b633ad" />
                      <stop offset="80%" stopColor="#b633ad" /><stop offset="80%" stopColor="#5c3b93" />
                    </linearGradient>
                  </defs>
                  <path d="M 50 20 Q 65 0 80 20 Q 65 40 50 20" fill="#57b947" transform="rotate(-20 50 20)"/>
                  <path d="M 50 35 C 30 35 5 50 5 75 C 5 110 50 120 50 120 C 50 120 95 110 95 75 C 95 50 70 35 50 35 Q 50 45 50 35 Z" fill="url(#rainbowStripes)" />
               </svg>
            </div>
            <span className="os7-menu-item">File</span>
            <span className="os7-menu-item">Edit</span>
            <span className="os7-menu-item">View</span>
            <span className="os7-menu-item">Label</span>
            <span className="os7-menu-item">Special</span>
         </div>
         
         <div className="os7-menu-right">
            {/* Help Balloon Icon */}
            <div className="os7-menu-icon">
               <svg width="27" height="24" viewBox="0 0 20 20">
                  <path d="M 2 4 L 16 4 L 16 12 L 10 12 L 6 16 L 6 12 L 2 12 Z" fill="#fff" stroke="#000" strokeWidth="1.5" />
                  <text x="9" y="10.5" fontFamily="sans-serif" fontSize="9" fontWeight="bold" textAnchor="middle" fill="#000">?</text>
               </svg>
            </div>
            {/* Little Computer Monitor Icon */}
            <div className="os7-menu-icon">
               <svg width="24" height="24" viewBox="0 0 20 20">
                  <rect x="2" y="3" width="14" height="10" fill="#fff" stroke="#000" strokeWidth="1.5" rx="1" />
                  <rect x="4" y="5" width="10" height="6" fill="#000" />
                  <path d="M 6 13 L 12 13 L 14 17 L 4 17 Z" fill="#fff" stroke="#000" strokeWidth="1.5" strokeLinejoin="round" />
               </svg>
            </div>
         </div>
      </div>

      <div className="os7-window">
        
        {/* 2. TITLE BAR */}
        <div className="os7-title-bar">
           {/* Close Box exits the app! */}
           <button className="os7-close-box" onClick={handleExit}></button>
           <div className="os7-title-stripes">
              <span className="os7-title-text">{fileName || 'Untitled1'}</span>
           </div>
           <button className="os7-zoom-box"></button>
        </div>

        {/* 3. THE OVERWHELMING TOOLBARS */}
        <div className="os7-toolbars">
           
           {/* Top Row: File & Basic Actions */}
           <div className="os7-toolbar-row">
              <button className="os7-btn">📄</button>
              <button className="os7-btn">📂</button>
              {/* The Save Button! */}
              <button className="os7-btn" onClick={triggerSave} title="Save to Disk">💾</button>
              <button className="os7-btn">🖨</button>
              <div className="os7-divider"></div>
              <button className="os7-btn">✂</button>
              <button className="os7-btn">📋</button>
              <button className="os7-btn">📋</button>
              <div className="os7-divider"></div>
              <button className="os7-btn">▤</button>
              <button className="os7-btn">▥</button>
              <button className="os7-btn">▦</button>
              <div className="os7-divider"></div>
              <button className="os7-btn">ABC</button>
              <button className="os7-btn">✓</button>
           </div>

           {/* Bottom Row: Formatting Chaos */}
           <div className="os7-toolbar-row">
              <select className="os7-dropdown font-drop" defaultValue="New York">
                 <option>New York</option>
                 <option>Chicago</option>
                 <option>Monaco</option>
                 <option>Geneva</option>
              </select>
              <select className="os7-dropdown size-drop" defaultValue="12">
                 <option>10</option>
                 <option>12</option>
                 <option>14</option>
                 <option>18</option>
                 <option>24</option>
              </select>
              <div className="os7-divider"></div>
              <button className="os7-btn"><b>B</b></button>
              <button className="os7-btn"><i>I</i></button>
              <button className="os7-btn"><u>U</u></button>
              <div className="os7-divider"></div>
              <button className="os7-btn active">≡</button>
              <button className="os7-btn">≢</button>
              <button className="os7-btn">≣</button>
              <button className="os7-btn">▤</button>
              <div className="os7-divider"></div>
              <button className="os7-btn">↑</button>
              <button className="os7-btn">↓</button>
              <button className="os7-btn">⊟</button>
              <button className="os7-btn">⊞</button>
           </div>
        </div>

        {/* 4. THE RULER */}
        <div className="os7-ruler">
           <div className="os7-ruler-numbers">
              <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span>
           </div>
        </div>

        {/* 5. THE TEXT AREA */}
        <div className="os7-content">
           <textarea
             value={entry}
             onChange={(e) => setEntry(e.target.value)}
             placeholder="Tap here to begin writing."
             autoFocus
             spellCheck="false"
           />
        </div>

        {/* 6. STATUS BAR */}
        <div className="os7-status-bar" style={{ justifyContent: 'space-between' }}>
           <div style={{ display: 'flex', gap: '15px' }}>
             <button onClick={triggerLoad} style={{ cursor: 'pointer', background: 'none', border: 'none', fontFamily: 'inherit' }}>Load</button>
             <button onClick={triggerSave} style={{ cursor: 'pointer', background: 'none', border: 'none', fontFamily: 'inherit' }}>Save</button>
             <button onClick={handleExit} style={{ cursor: 'pointer', background: 'none', border: 'none', fontFamily: 'inherit' }}>Exit</button>
           </div>
           <span>Page 1 | Normal</span>
        </div>
      </div>
    </div>
  );
}

export default PeachOS7;