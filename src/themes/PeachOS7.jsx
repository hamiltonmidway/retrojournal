import React from 'react';
import './PeachOS7.css';

function PeachOS7({ 
  entry, 
  setEntry, 
  fileName, 
  setFileName, 
  triggerSave, 
  handleExit,
  programName
}) {
  return (
    <div className="screen">
      <div className="os7-window">
        
        {/* 1. TITLE BAR */}
        <div className="os7-title-bar">
           {/* Close Box exits the app! */}
           <button className="os7-close-box" onClick={handleExit}></button>
           <div className="os7-title-stripes">
              <span className="os7-title-text">{fileName || 'Untitled1'}</span>
           </div>
           <button className="os7-zoom-box"></button>
        </div>

        {/* 2. THE OVERWHELMING TOOLBARS */}
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

        {/* 3. THE RULER */}
        <div className="os7-ruler">
           <div className="os7-ruler-numbers">
              <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span>
           </div>
        </div>

        {/* 4. THE TEXT AREA */}
        <div className="os7-content">
           <textarea
             value={entry}
             onChange={(e) => setEntry(e.target.value)}
             placeholder="Start typing your document here..."
             autoFocus
             spellCheck="false"
           />
        </div>

        {/* 5. STATUS BAR */}
        <div className="os7-status-bar">
           <span>Page 1</span>
           <div className="os7-divider" style={{height: '10px'}}></div>
           <span>Normal</span>
           <div className="os7-divider" style={{height: '10px'}}></div>
           <span>File: <input className="os7-filename-input" value={fileName} onChange={(e) => setFileName(e.target.value)} /></span>
        </div>

      </div>
    </div>
  );
}

export default PeachOS7;