import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import PasswordModal from './modals/PasswordModal';

// ==========================================
// THEME IMPORTS 
// ==========================================
import PeachIIe from './themes/PeachIIe.jsx';
import PeachMac1985 from './themes/PeachMac1985.jsx';
import DoorwaysXP from './themes/DoorwaysXP.jsx';
import Admiral75 from './themes/Admiral75.jsx';
import EInk from './themes/EInk.jsx';

function Journal() {
  const { retro } = useParams();
  
  // ==========================================
  // CORE STATE (The "Brain")
  // ==========================================
  const [entry, setEntry] = useState('');
  const [fileName, setFileName] = useState('Untitled'); 
  const [isNightMode, setIsNightMode] = useState(false);

  const [sessionPassword, setSessionPassword] = useState('');
  const [modalConfig, setModalConfig] = useState({ 
    show: false, 
    mode: 'encrypt', 
    action: null, 
    payload: null 
  });

  const [visuals, setVisuals] = useState({
    crt: false,
    curve: false,
    cursor: false,
    bezel: false
  });

  useEffect(() => {
    if (retro === 'windows-xp-2001' && fileName === 'Untitled') {
      setFileName('Document1.doc');
    }

    const loadSettings = () => {
      const saved = JSON.parse(localStorage.getItem('retroSettings')) || {};
      setVisuals({
        crt: saved.crtFilter || false,       
        curve: saved.curvedMonitor || false, 
        cursor: saved.blockCursor || false,  
        bezel: saved.monitorFrame || false   
      });
    };
    loadSettings();
  }, [retro]);

  // ==========================================
  // LOGIC & HANDLERS
  // ==========================================
  
  const handlePasswordSubmit = (password) => {
    if (modalConfig.action === 'save') {
      setSessionPassword(password);
      setModalConfig({ show: false, mode: '', action: null, payload: null });
      executeSave(password);
    } else if (modalConfig.action === 'load') {
      try {
        const bytes = CryptoJS.AES.decrypt(modalConfig.payload, password);
        const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
        if (!decryptedText) throw new Error("Incorrect Password");
        setEntry(decryptedText);
        setSessionPassword(password); 
        setModalConfig({ show: false, mode: '', action: null, payload: null });
      } catch (error) {
        alert("Incorrect Password! Cannot unlock file.");
      }
    }
  };

  const handleExit = () => {
    setSessionPassword(''); // Secure Memory Wipe
    window.history.back();
  };

  const triggerLoad = async () => {
    let loadedContent = window.electronAPI ? await window.electronAPI.loadJournal() : localStorage.getItem(fileName);
    if (loadedContent) {
      if (loadedContent.startsWith('U2FsdGVkX1')) {
         setModalConfig({ show: true, mode: 'decrypt', action: 'load', payload: loadedContent });
      } else {
         setEntry(loadedContent); 
      }
    }
  };

  const triggerSave = async () => {
    const settings = JSON.parse(localStorage.getItem('retroSettings')) || {};
    if (settings.enableEncryption && !sessionPassword) {
      setModalConfig({ show: true, mode: 'encrypt', action: 'save', payload: null });
    } else {
      executeSave(sessionPassword);
    }
  };

  const executeSave = async (passwordToUse) => {
    const settings = JSON.parse(localStorage.getItem('retroSettings')) || {};
    const format = settings.fileFormat || 'txt';
    let contentToSave = entry;

    if (settings.enableEncryption && passwordToUse) {
      contentToSave = CryptoJS.AES.encrypt(entry, passwordToUse).toString();
    }

    if (window.electronAPI) {
      await window.electronAPI.saveJournal({ fileName, content: contentToSave, format });
      alert('Saved to Disk.');
    } else {
      localStorage.setItem(fileName, contentToSave);
      alert('Saved Locally.');
    }
  };

  const getProgramName = () => {
    if (retro === 'apple-mac-1985') return "PeachWrite";
    if (retro === 'apple-iie') return "PEACH WRITER ][";
    if (retro === 'commodore-64') return "*** ADMIRAL 75 WORD PROCESSOR ***";
    if (retro === 'e-ink') return "InkWriter 2008";
    if (retro === 'windows-xp-2001') return "Doorways Word";
    return "RETRO JOURNAL";
  };

  const getVisualClasses = () => {
    let classes = `journal ${retro} ${isNightMode ? 'night-mode' : ''}`;
    if (visuals.crt) classes += ' visual-crt';
    if (visuals.curve) classes += ' visual-curve';
    if (visuals.cursor) classes += ' visual-cursor';
    if (visuals.bezel) classes += ' visual-bezel';
    return classes;
  };

  // ==========================================
  // THEME ROUTING (The "Traffic Cop")
  // ==========================================

  // 1. Bundle up all the tools the child theme will need to function
  const themeProps = {
    entry,
    setEntry,
    fileName,
    setFileName,
    isNightMode,
    setIsNightMode,
    triggerSave,
    handleExit,
    programName: getProgramName()
  };

  // 2. Decide which child component to render based on the URL
  const renderTheme = () => {
    switch (retro) {
        case 'apple-iie':
        return <PeachIIe {...themeProps} />;
        case 'apple-mac-1985':
        return <PeachMac1985 {...themeProps} />;
        case 'windows-xp-2001':
        return <DoorwaysXP {...themeProps} />;
        case 'commodore-64':
        return <Admiral75 {...themeProps} />;
        case 'e-ink':
        return <EInk {...themeProps} />;
      default:
        // A temporary fallback while we migrate!
        return (
          <div className="screen">
            <h2 style={{color: 'white', padding: '20px'}}>
              Migrating {retro} to its own component...
            </h2>
          </div>
        ); 
    }
  };

  // ==========================================
  // FINAL RENDER
  // ==========================================
  return (
    <div className={getVisualClasses()}>
      
      {/* RENDER THE CHOSEN VISUAL THEME */}
      {renderTheme()}

      {/* GLOBAL OVERLAYS */}
      {visuals.bezel && <div className="monitor-bezel-overlay"></div>}

      {/* SECURITY MODAL */}
      {modalConfig.show && (
        <PasswordModal 
          mode={modalConfig.mode}
          fileName={fileName}
          onSubmit={handlePasswordSubmit}
          onClose={() => setModalConfig({ show: false, mode: '', action: null, payload: null })}
        />
      )}
      
    </div>
  );
}

export default Journal;