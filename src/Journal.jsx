import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import PasswordModal from './modals/PasswordModal';

// ==========================================
// THEME IMPORTS 
// ==========================================

import PeachIIe from './themes/PeachIIe.jsx';
import Olari500 from './themes/Olari500.jsx';
import IBMPCJr from './themes/IBMPCJr.jsx';
import Dos1987 from './themes/Dos1987.jsx';
import Doorways31 from './themes/Doorways31.jsx';
import Doorways95 from './themes/Doorways95.jsx';
import DoorwaysXP from './themes/DoorwaysXP.jsx';
import PeachMac1985 from './themes/PeachMac1985.jsx';
import PeachAqua from './themes/PeachAqua.jsx';
import PeachOS7 from './themes/PeachOS7.jsx';
import Admiral75 from './themes/Admiral75.jsx';
import EInk from './themes/EInk.jsx';

function Journal() {
  const { retro } = useParams();
  const navigate = useNavigate();
  
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
    windowSize: 'small' // Default to small to preserve current look
  });

  useEffect(() => {
    if (retro === 'windows-xp-2001' && fileName === 'Untitled') {
      setFileName('journal-1.doc');
    }

    const loadSettings = () => {
      const saved = JSON.parse(localStorage.getItem('retroSettings')) || {};
      setVisuals({
        windowSize: saved.windowSize || 'small' // NEW: Load the saved size
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
    navigate('/'); // 
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
    if (retro === 'atari-400') return "O L A R I W R I T E R";
    if (retro === 'ibm-pc-jr') return "OX-WRITE 1.0";
    if (retro === 'commodore-64') return "*** ADMIRAL 75 WORD PROCESSOR ***";
    if (retro === 'e-ink') return "InkWriter 2008";
    if (retro === 'windows-xp-2001') return "Doorways Paper";
    return "RETRO JOURNAL";
  };

  const getVisualClasses = () => {
    let classes = `journal ${retro} size-${visuals.windowSize} ${isNightMode ? 'night-mode' : ''}`; // UPDATED: Added size class
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
    triggerLoad,
    triggerSave,
    handleExit,
    programName: getProgramName()
  };

  // 2. Decide which child component to render based on the URL
  const renderTheme = () => {
    switch (retro) {
        case 'apple-iie':
        return <PeachIIe {...themeProps} />;
        case 'atari-400':
        return <Olari500 {...themeProps} />;
        case 'dos-1987':
        return <Dos1987 {...themeProps} />;
        case 'ibm-pc-jr':
        return <IBMPCJr {...themeProps} />;
        case 'windows-95':
        return <Doorways95 {...themeProps} />;
        case 'windows-31-1990':
        return <Doorways31 {...themeProps} />;
        case 'apple-mac-1985':
        return <PeachMac1985 {...themeProps} />;
        case 'mac-system-7-1994':
        return <PeachOS7 {...themeProps} />;
        case 'mac-osx-2001':
        return <PeachAqua {...themeProps} />;
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
    <div className={getVisualClasses()} key={retro}>

      {/* RENDER THE CHOSEN VISUAL THEME */}
      {renderTheme()}

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