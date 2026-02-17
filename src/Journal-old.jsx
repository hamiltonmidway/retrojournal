import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Journal() {
  const { retro } = useParams();
  const [entry, setEntry] = useState('');
  const [fileName, setFileName] = useState(`JOURNAL.TXT`); // Default to uppercase for Apple II

  useEffect(() => {
    const load = async () => {
      // (Your existing load logic)
      if (window.electronAPI) {
        const loaded = await window.electronAPI.loadJournal(fileName);
        setEntry(loaded);
      } else {
        setEntry(localStorage.getItem(fileName) || '');
      }
    };
    load();
  }, [fileName]);

  const save = async () => {
    // (Your existing save logic)
    if (window.electronAPI) {
      await window.electronAPI.saveJournal({ fileName, content: entry });
      alert('SAVED TO DISK!');
    } else {
      localStorage.setItem(fileName, entry);
      alert('SAVED LOCALLY!');
    }
  };

  // --- THEME CONFIGURATION ---
  // This lets us customize the "Software Name" for each computer
  const getProgramName = () => {
    if (retro === 'apple-iie') return "PEACH WRITER ][";
    if (retro === 'commodore-64') return "ADMIRAL WORD";
    return "RETRO JOURNAL";
  };

  return (
    <div className={`journal ${retro}`}>
      <div className="screen">
        
        {/* === APPLE IIe SPECIAL HEADER === */}
        {retro === 'apple-iie' && (
           <div className="apple-header">
             <div className="apple-header-border">
               <div className="apple-header-text">
                 {getProgramName()} <br/>
                 COPYRIGHT 1981, PEACH COMPUTER INC.
               </div>
             </div>
           </div>
        )}

        <textarea
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          placeholder={retro === 'apple-iie' ? "BEGIN TYPING..." : "Start journaling..."}
          autoFocus
          spellCheck="false"
        />

        {/* === THE COMMAND LINE (Bottom Bar) === */}
        {/* We move the controls INSIDE the screen for that "Software" feel */}
        <div className="retro-status-bar">
           <div className="status-field">
             <span>FILE:</span>
             <input
               type="text"
               value={fileName}
               onChange={(e) => setFileName(e.target.value.toUpperCase())} // Force CAPS for retro feel
             />
           </div>
           
           <div className="command-group">
             <button onClick={save}>[CTRL-S] SAVE</button>
             <button onClick={() => window.history.back()}>[ESC] EXIT</button>
           </div>
        </div>

      </div>
    </div>
  );
}

export default Journal;