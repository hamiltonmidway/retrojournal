import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Journal() {
  const { retro } = useParams();
  const [entry, setEntry] = useState('');
  const [fileName, setFileName] = useState(
    retro === 'commodore-64' ? 'JOURNAL.PRG' : 'JOURNAL.TXT'
  );

  useEffect(() => {
    const load = async () => {
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
    if (window.electronAPI) {
      await window.electronAPI.saveJournal({ fileName, content: entry });
      alert('SAVED TO DISK!');
    } else {
      localStorage.setItem(fileName, entry);
      alert('SAVED LOCALLY!');
    }
  };

  const getProgramName = () => {
    if (retro === 'apple-iie') return "PEACH WRITER ][";
    // MATCHING THE REFERENCE IMAGE STYLE:
    if (retro === 'commodore-64') return "*** ADMIRAL WORD PROCESSOR ***";
    return "RETRO JOURNAL";
  };

  return (
    <div className={`journal ${retro}`}>
      <div className="screen">
        
        {/* === APPLE IIe HEADER === */}
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

        {/* === COMMODORE 64 HEADER === */}
        {retro === 'commodore-64' && (
           <div className="c64-header-container">
             {/* The Solid Bar Header */}
             <div className="c64-header-bar">
               {getProgramName()}
             </div>
             {/* The Subtext mimicking the Steve Punter screen */}
             <div className="c64-subtext">
               A Product of Professional Software, Inc.<br/>
               by Gemini & Friend
             </div>
           </div>
        )}

        <textarea
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          placeholder={retro === 'apple-iie' || retro === 'commodore-64' ? "BEGIN TYPING..." : "Start journaling..."}
          autoFocus
          spellCheck="false"
        />

        {/* === THE COMMAND LINE (Universal for retro themes) === */}
        <div className="retro-status-bar">
           <div className="status-field">
             <span>FILE:</span>
             <input
               type="text"
               value={fileName}
               onChange={(e) => setFileName(e.target.value.toUpperCase())} 
             />
           </div>
           
           <div className="command-group">
             {/* C64 often used F-keys, but we'll stick to readable buttons */}
             <button onClick={save}>{retro === 'commodore-64' ? '[F1] SAVE' : '[CTRL-S] SAVE'}</button>
             <button onClick={() => window.history.back()}>[ESC] EXIT</button>
           </div>
        </div>

      </div>
    </div>
  );
}

export default Journal;