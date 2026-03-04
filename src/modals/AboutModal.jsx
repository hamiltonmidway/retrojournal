import '../Home.css';

function AboutModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="about-modal" onClick={(e) => e.stopPropagation()}>
         {/* Title Bar */}
         <div className="about-title-bar">
            <span>About Retro Journal</span>
            <button onClick={onClose}>×</button>
         </div>
         
         {/* Content */}
         <div className="about-content">
            {/* Using String.raw allows backslashes to appear correctly in ASCII art! */}
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
\_____/\___/\___,_|_|  |_| |_|\__,_| |_| `}
            </pre>
            
            <div className="dashed-line"></div>
            <p>Version: 1.0.7</p>
            <p className="passion-text">
               Retro Journal is a passion project dedicated to the bygone era when computers 
               were completely offline, because your entire life was completely offline.
            </p>
            
            <div className="credits-section">
               <h3>CREATED BY</h3>
               <p>Hamilton Midway Enterprises, LLC</p>
               <a href="https://hamiltonmidway.com" target="_blank" rel="noopener noreferrer">
                 Website
               </a>
            </div>
         </div>
      </div>
    </div>
  );
}

export default AboutModal;