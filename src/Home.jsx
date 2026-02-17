import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

// Keep your vibes array exactly as it is!
const vibes = [
  { id: 'apple-iie', label: 'Peach //e' },
  { id: 'commodore-64', label: 'Admiral 75' },
  { id: 'atari-400', label: 'Olari 500' },
  { id: 'ibm-pc-jr', label: 'Big Blue Ox Jr' },
  { id: 'apple-mac-1985', label: 'MacAndCheese' },
  { id: 'dos-1987', label: 'DX-DISK 87' },
  { id: 'windows-31-1990', label: 'Doorways 3.1' },
  { id: 'mac-system-7-1994', label: 'Peach OS 7' },
  { id: 'windows-95', label: 'Doorways 95' },
  { id: 'mac-osx-2001', label: 'Peach Aqua' },
  { id: 'windows-xp-2001', label: 'Doorways XP' },
  { id: 'e-ink', label: 'Electronic Paper' },
];

function Home() {
  const navigate = useNavigate();
  const [selectedVibe, setSelectedVibe] = useState(vibes[0]);
  
  // State for the About Modal
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div className="split-layout">
      
      {/* LEFT SIDE: The Scrollable Gallery (The Menu) */}
      <div className="gallery-section">
         
         <div className="gallery-header">
            <div className="terminal-box">
              <h1>WELCOME TO RETROJOURNAL<span className="cursor"></span></h1>
            </div>
            <p>PICK A RETRO VIBE TO PREVIEW:</p>
         </div>

         <div className="vibe-grid">
            {vibes.map(vibe => (
               <div
                 key={vibe.id}
                 className={`vibe-card ${vibe.id} ${selectedVibe.id === vibe.id ? 'active-card' : ''}`}
                 onClick={() => setSelectedVibe(vibe)}
               >
                 {/* === BIG LOGO LOGIC === */}
                 
                 {/* 1. PEACH IIe */}
                 {vibe.id === 'apple-iie' ? (
                    <div className="peach-logo-container">
                      <svg width="100" height="100" viewBox="0 0 100 120" className="peach-icon">
                        <defs>
                          <linearGradient id="peachStripes" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="16%" stopColor="#57b947" /><stop offset="16%" stopColor="#f3c200" /><stop offset="32%" stopColor="#f3c200" /><stop offset="32%" stopColor="#f48020" /><stop offset="48%" stopColor="#f48020" /><stop offset="48%" stopColor="#db3038" /><stop offset="64%" stopColor="#db3038" /><stop offset="64%" stopColor="#b633ad" /><stop offset="80%" stopColor="#b633ad" /><stop offset="80%" stopColor="#5c3b93" />
                          </linearGradient>
                        </defs>
                        <path d="M 50 20 Q 65 0 80 20 Q 65 40 50 20" fill="#57b947" transform="rotate(-20 50 20)"/>
                        <path d="M 50 35 C 30 35 5 50 5 75 C 5 110 50 120 50 120 C 50 120 95 110 95 75 C 95 50 70 35 50 35 Q 50 45 50 35 Z" fill="url(#peachStripes)" />
                      </svg>
                      <div className="peach-text-group"><span className="peach-word">peach</span><span className="iie-word">//e</span></div>
                    </div>

                 /* 2. ADMIRAL 75 */
                 ) : vibe.id === 'commodore-64' ? (
                    <div className="admiral-badge">
                      <svg width="60" height="60" viewBox="0 0 100 100" className="admiral-icon">
                         <path d="M 50 10 L 90 90 L 65 90 L 50 55 L 35 90 L 10 90 Z" fill="#2a2c7a" />
                         <path d="M 10 45 L 60 45 L 50 25 L 20 25 Z" fill="#e63e34" transform="translate(0, 15)"/>
                      </svg>
                      <div className="admiral-text-group">
                        <span className="admiral-word">admiral</span>
                        <div className="c64-stripes"><div className="c-stripe s-red"></div><div className="c-stripe s-orange"></div><div className="c-stripe s-yellow"></div><div className="c-stripe s-green"></div><div className="c-stripe s-blue"></div></div>
                        <span className="model-75">75</span>
                      </div>
                    </div>

                 /* 3. OLARI 500 */
                 ) : vibe.id === 'atari-400' ? (
                    <div className="solaris-badge">
                      <div className="solaris-icon-box">
                        <svg width="60" height="60" viewBox="0 0 100 100" className="solaris-icon"><path d="M 42 100 L 58 100 L 58 20 Q 50 10 42 20 Z" fill="#333" /><path d="M 35 100 L 15 100 Q 15 60 5 40 Q 25 50 35 60 Z" fill="#333" /><path d="M 65 100 L 85 100 Q 85 60 95 40 Q 75 50 65 60 Z" fill="#333" /></svg>
                      </div>
                      <div className="solaris-text-group"><span className="solaris-word"><strong>OLARI</strong></span><span className="model-500">500</span></div>
                    </div>

                 /* 4. BIG BLUE OX JR */
                 ) : vibe.id === 'ibm-pc-jr' ? (
                    <div className="ox-container">
                      <span className="big-blue-text">Big Blue</span>
                      <div className="ox-main-row"><span className="ox-logo">OX</span><span className="ox-jr">jr</span></div>
                    </div>

                 /* 5. MACANDCHEESE */
                 ) : vibe.id === 'apple-mac-1985' ? (
                    <div className="mac-badge-container">
                       <div className="mac-inset-box logo-box">
                          <svg width="50" height="50" viewBox="0 0 100 120" className="peach-icon-small">
                            <defs><linearGradient id="peachStripesSmall" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="16%" stopColor="#57b947" /><stop offset="16%" stopColor="#f3c200" /><stop offset="32%" stopColor="#f3c200" /><stop offset="32%" stopColor="#f48020" /><stop offset="48%" stopColor="#f48020" /><stop offset="48%" stopColor="#db3038" /><stop offset="64%" stopColor="#db3038" /><stop offset="64%" stopColor="#b633ad" /><stop offset="80%" stopColor="#b633ad" /><stop offset="80%" stopColor="#5c3b93" /></linearGradient></defs>
                            <path d="M 50 20 Q 65 0 80 20 Q 65 40 50 20" fill="#57b947" transform="rotate(-20 50 20)"/>
                            <path d="M 50 35 C 30 35 5 50 5 75 C 5 110 50 120 50 120 C 50 120 95 110 95 75 C 95 50 70 35 50 35 Q 50 45 50 35 Z" fill="url(#peachStripesSmall)" />
                          </svg>
                       </div>
                       <div className="mac-inset-box text-box"><span className="mac-word">MacAndCheese</span></div>
                    </div>

                 /* 6. DX DISK */
                 ) : vibe.id === 'dos-1987' ? (
                    <div className="dos-container">
                       <div className="dos-main-text"><span className="dx-text">DX-</span><span className="disk-text">DISK</span><span className="number-87">87</span></div>
                       <div className="dos-subtitle">Operating System</div>
                    </div>

                 /* 7. DOORWAYS 3.1 */
                 ) : vibe.id === 'windows-31-1990' ? (
                    <div className="doorways-container">
                       <div className="doorways-logo-row">
                          <div className="pixel-trail"><div className="pix p1"></div><div className="pix p2"></div><div className="pix p3"></div><div className="pix p4"></div><div className="pix p5"></div><div className="pix p6"></div></div>
                          <svg width="60" height="60" viewBox="0 0 100 100" className="doorways-icon"><path d="M 20 10 L 45 15 L 45 85 L 20 90 Z" fill="#4169e1" stroke="black" strokeWidth="2"/><path d="M 50 15 L 75 20 L 75 80 L 50 85 Z" fill="#e68334" stroke="black" strokeWidth="2"/><path d="M 80 25 L 95 28 L 95 50 L 80 52 Z" fill="#55a846" stroke="black" strokeWidth="2"/><path d="M 80 55 L 95 57 L 95 75 L 80 72 Z" fill="#f3c200" stroke="black" strokeWidth="2"/></svg>
                       </div>
                       <div className="doorways-text-stack"><span className="seattle-text">SeattleSoft</span><span className="doorways-text">DOORWAYS</span><span className="ver-text">Version 3.1</span></div>
                    </div>

                 /* 8. PEACH OS 7 */
                 ) : vibe.id === 'mac-system-7-1994' ? (
                    <div className="orchard-container">
                       <div className="orchard-window">
                          <svg width="60" height="70" viewBox="0 0 100 120" className="picasso-peach"><defs><path id="peachShape" d="M 50 20 Q 65 0 80 20 Q 65 40 50 20 M 50 35 C 30 35 5 50 5 75 C 5 110 50 120 50 120 C 50 120 95 110 95 75 C 95 50 70 35 50 35 Q 50 45 50 35 Z" /><clipPath id="splitLeft"><rect x="0" y="0" width="50" height="120" /></clipPath></defs><use href="#peachShape" fill="#869ce0" /><use href="#peachShape" fill="#4b62b0" clipPath="url(#splitLeft)" /><path d="M 50 35 Q 35 55 50 75 Q 65 95 50 120" stroke="white" strokeWidth="3" fill="none" /></svg>
                          <div className="orchard-text-group"><span className="orchard-title">Peach OS 7</span><span className="orchard-subtitle">Starting up...</span><div className="orchard-progress-bar"><div className="orchard-progress-fill"></div></div></div>
                       </div>
                    </div>

                 /* 9. DOORWAYS 95 */
                 ) : vibe.id === 'windows-95' ? (
                    <div className="doorways-95-container">
                       <div className="doorways-95-logo-group">
                          <div className="pixel-trail trail-95"><div className="pix p1"></div><div className="pix p2"></div><div className="pix p3"></div><div className="pix p4"></div><div className="pix p5"></div><div className="pix p6"></div></div>
                          <svg width="60" height="60" viewBox="0 0 100 100" className="doorways-icon icon-95"><path d="M 20 10 L 45 15 L 45 85 L 20 90 Z" fill="#4169e1" stroke="black" strokeWidth="2"/><path d="M 50 15 L 75 20 L 75 80 L 50 85 Z" fill="#e68334" stroke="black" strokeWidth="2"/><path d="M 80 25 L 95 28 L 95 50 L 80 52 Z" fill="#55a846" stroke="black" strokeWidth="2"/><path d="M 80 55 L 95 57 L 95 75 L 80 72 Z" fill="#f3c200" stroke="black" strokeWidth="2"/></svg>
                       </div>
                       <div className="doorways-95-text-stack"><span className="seattle-95">SeattleSoft</span><div className="doorways-row"><span className="doorways-95-title">DOORWAYS</span><span className="number-95">95</span></div></div>
                    </div>

                 /* 10. PEACH AQUA */
                 ) : vibe.id === 'mac-osx-2001' ? (
                    <div className="aqua-container">
                       <div className="aqua-peach-wrapper">
                          <svg width="70" height="80" viewBox="0 0 100 120" className="aqua-icon">
                             <defs><linearGradient id="aquaBlue" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#4facfe" /><stop offset="100%" stopColor="#00f2fe" /></linearGradient><linearGradient id="aquaShine" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="rgba(255,255,255,0.9)" /><stop offset="100%" stopColor="rgba(255,255,255,0)" /></linearGradient></defs>
                             <path d="M 50 20 Q 65 0 80 20 Q 65 40 50 20 M 50 35 C 30 35 5 50 5 75 C 5 110 50 120 50 120 C 50 120 95 110 95 75 C 95 50 70 35 50 35 Q 50 45 50 35 Z" fill="#007aff" stroke="#004499" strokeWidth="1" />
                             <path d="M 20 50 Q 50 35 80 50 Q 85 45 80 40 Q 50 20 20 40 Q 15 45 20 50 Z" fill="white" opacity="0.5" />
                          </svg>
                       </div>
                       <div className="aqua-text-group"><span className="aqua-title">Peach Aqua</span><div className="aqua-loader"><div className="aqua-bar"></div></div></div>
                    </div>

                 /* 11. DOORWAYS XP */
                 ) : vibe.id === 'windows-xp-2001' ? (
                    <div className="xp-container">
                       <div className="xp-flag-wrapper">
                          <svg width="80" height="80" viewBox="0 0 100 100" className="xp-flag">
                            <defs><linearGradient id="xpRed" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#ff7d5d" /><stop offset="100%" stopColor="#e83618" /></linearGradient><linearGradient id="xpGreen" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#8ccf5d" /><stop offset="100%" stopColor="#5ba922" /></linearGradient><linearGradient id="xpBlue" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#6ebcfd" /><stop offset="100%" stopColor="#2d7df7" /></linearGradient><linearGradient id="xpYellow" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#ffce56" /><stop offset="100%" stopColor="#f4b208" /></linearGradient><filter id="plasticGlow" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur"/><feOffset in="blur" dx="1" dy="1" result="offsetBlur"/><feMerge><feMergeNode in="offsetBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
                            <path d="M 50 52 L 15 57 Q 15 35 25 25 L 50 33 Z" fill="url(#xpRed)" filter="url(#plasticGlow)" /><path d="M 55 32 L 85 20 Q 95 35 90 50 L 55 52 Z" fill="url(#xpGreen)" filter="url(#plasticGlow)" /><path d="M 50 57 L 25 90 Q 30 75 35 62 L 50 57 Z" fill="url(#xpBlue)" filter="url(#plasticGlow)" transform="translate(-5, 0)" /><path d="M 55 57 L 85 53 Q 80 75 70 85 L 55 57 Z" fill="url(#xpYellow)" filter="url(#plasticGlow)" transform="translate(0, 5)" />
                          </svg>
                       </div>
                       <div className="xp-text-group"><span className="xp-doorways">DOORWAYS</span><span className="xp-badge">XP</span></div>
                    </div>

                 /* 12. E-INK */
                 ) : vibe.id === 'e-ink' ? (
                    <div className="e-ink-container">
                       <div className="e-ink-icon-box">
                          <svg width="60" height="70" viewBox="0 0 100 120" className="e-ink-icon"><path d="M 20 10 L 80 10 L 80 110 L 20 110 Z" fill="#e0e0e0" stroke="#333" strokeWidth="3" /><line x1="30" y1="30" x2="70" y2="30" stroke="#333" strokeWidth="3" /><line x1="30" y1="45" x2="70" y2="45" stroke="#333" strokeWidth="3" /><line x1="30" y1="60" x2="70" y2="60" stroke="#333" strokeWidth="3" /><line x1="30" y1="75" x2="50" y2="75" stroke="#333" strokeWidth="3" /></svg>
                       </div>
                       <div className="e-ink-label-group"><span className="e-ink-title">Electronic Paper</span><span className="e-ink-subtitle">High Contrast • Low Distraction</span></div>
                    </div>

                 ) : (
                    <span className="temp-logo-text">{vibe.label}</span>
                 )}

               </div>
            ))}
         </div>
      </div>

      {/* RIGHT SIDE: The Monitor & System Menu */}
      <div className="monitor-section">
        
        {/* Top Right System Buttons */}
        <div className="system-menu">
          <button className="system-btn" onClick={() => setShowAbout(true)}>ABOUT</button>
          <button className="system-btn" onClick={() => alert("Settings coming soon!")}>SETTINGS</button>
        </div>

        <div className="monitor-bezel">
          <div className="monitor-screen">
            <div className="preview-content" key={selectedVibe.id}>
              <img 
                src={`/previews/${selectedVibe.id}.png`} 
                alt={selectedVibe.label}
                className="preview-image"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextSibling.style.display = 'flex';
                }}
              />
              <div className="preview-text-fallback" style={{display: 'none'}}>
                  <h1>PREVIEW: {selectedVibe.label}</h1>
                  <p>System Ready.</p>
              </div>
              <div className="boot-overlay">
                <button 
                  className="boot-button"
                  onClick={() => navigate(`/journal/${selectedVibe.id}`)}
                >
                  BOOT SYSTEM
                </button>
              </div>
            </div>
          </div>
          <div className="monitor-logo">HME VISUAL DISPLAY UNIT</div>
        </div>
      </div>

      {/* THE ABOUT MODAL */}
      {showAbout && (
        <div className="modal-overlay" onClick={() => setShowAbout(false)}>
          <div className="about-modal" onClick={(e) => e.stopPropagation()}>
             {/* Title Bar */}
             <div className="about-title-bar">
                <span>ℹ About Retro Journal</span>
                <button onClick={() => setShowAbout(false)}>×</button>
             </div>
             
             {/* Content */}
             <div className="about-content">
                {/* Using String.raw allows backslashes to appear correctly in ASCII art!
                */}
                <pre className="ascii-art">
{String.raw`
 ____      _                
|  _ \ ___| |_ _ __ ___     
| |_) / _ \ __| '__/ _ \    
|  _ <  __/ |_| | | (_) |   
|_| \_\___|\__|_|  \___/    
                            
     _                                _ 
    | | ___  _   _ _ __ _ __   __ _  | |
 _  | |/ _ \| | | | '__| '_ \ / _' | | |
| |_| | (_) | |_| | |  | | | | (_| | | |
 \___/ \___/ \__,_|_|  |_| |_|\__,_| |_| `}
                </pre>
                
                <div className="dashed-line"></div>
                <p>Version: 1.0.4</p>
                <p className="trojan-text">
                    Retro Journal is a passion project dedicated to the era when computers 
                    were fun, offline, and <span className="underline">not Trojan Horses</span> 
                    to sell subscription software.
                </p>
                
                <div className="credits-section">
                   <h3>CREATED BY</h3>
                   <p>Hamilton Midway Enterprises, LLC</p>
                   <p className="location">Minnetonka, Minnesota</p>
                   
                   <h3>SOURCE</h3>
                   <a href="https://github.com/yourusername/retrojournal" target="_blank">
                      github.com/retrojournal
                   </a>
                </div>

                <div className="eof">&lt; EOF &gt;</div>
             </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default Home;