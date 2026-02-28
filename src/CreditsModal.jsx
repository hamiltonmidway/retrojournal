import './Home.css';

function CreditsModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="clean-modal" onClick={(e) => e.stopPropagation()}>
         
         <div className="clean-modal-header">
            <h2>System Credits & Attributions</h2>
            <button onClick={onClose} title="Close">&times;</button>
         </div>
         
         <div className="clean-modal-content">
            <p className="clean-intro">
              Retro Journal is made possible thanks to the generous work of the open-source community. 
              We are deeply grateful to the creators of the following typefaces:
            </p>

            <h3>Retro System Fonts</h3>
            <ul>
              <li><strong>Apple IIe (font name: PrintChar21)</strong> - created by Kreative Software, licensed under the Kreative Software Relay Fonts Free Use License. <a href="/FreeLicense.txt" target="_blank" rel="noopener noreferrer">License is here.</a> Kreative Korp's website is <a href="https://www.kreativekorp.com/software/fonts/apple2/" target="_blank" rel="noopener noreferrer">here.</a>)</li>
              <li><strong>Commodore 64 (font name: Bescii Mono)</strong> created by Damian Vila (Creative Commons CC0 1.0 Universal Public Domain Dedication. <a href="/Bescii_License.txt" target="_blank" rel="noopener noreferrer">License is here.</a> Damian's GitHub repository is <a href="https://github.com/damianvila/font-bescii" target="_blank" rel="noopener noreferrer">here.</a>)</li>
              <li><strong>Atari 400 (font name: Atari Classic Chunky)</strong> - created by Mark L. Simonson (copyrighted freeware, but can be distributed with free open source products if the documentation is included. <a href="Read_Me.pdf" target="_blank" rel="noopener noreferrer">Documentation is here.</a> Mark's website is <a href="https://members.bitstream.net/marksim/atarimac/fonts.html" target="_blank" rel="noopener noreferrer">here.</a></li>
              <li><strong>IBM PC Jr (font name: Flexi IBM VGA True)</strong> - created by VileR (Creative Commons Attribution-ShareAlike 4.0 International. <a href="/creative-commons-four-dot-zero.txt" target="_blank" rel="noopener noreferrer">License is here.</a> VileR's fonts were downloaded from <a href="https://font.download/font/flexi-ibm-vga-true" target="_blank" rel="noopener noreferrer">font.download</a>)</li>
              <li><strong>Apple Macintosh [1985] (font name: Sysfont)</strong> - created by Alina Sava (SIL Open Font License. <a href="/OFL.txt" target="_blank" rel="noopener noreferrer">License is here.</a> Alina's font was downloaded from <a href="https://fontsarena.com/sysfont-by-alina-sava/" target="_blank" rel="noopener noreferrer">Fonts Arena</a>.)</li>
              <li><strong>MS-DOS [1987] (font name: Ultimate Oldschool PC Font)</strong> - created by VileR (Creative Commons Attribution-ShareAlike 4.0 International. <a href="/creative-commons-four-dot-zero.txt" target="_blank" rel="noopener noreferrer">License is here.</a> Downloaded from <a href="https://int10h.org/oldschool-pc-fonts/" target="_blank" rel="noopener noreferrer">int10h.org</a>)</li>
              <li><strong>Microsoft Windows 3.1 [1990] (font name: Windows)</strong> - created by Fekete Tamas (100% Free / Freeware. Downloaded from <a href="https://www.dafont.com/fekete-tamas.d11412" target="_blank" rel="noopener noreferrer">DaFont</a>.)</li>
              <li><strong>Apple Macintosh System 7</strong> - [Insert Creator/License]</li>
              <li><strong>Microsoft Windows 95 (font name: W95FA)</strong> - created by Alina Sava (SIL Open Font License. <a href="/OFL.txt" target="_blank" rel="noopener noreferrer">License is here.</a> Alina's font was downloaded from <a href="https://fontsarena.com/w95fa-by-alina-sava/" target="_blank" rel="noopener noreferrer">Fonts Arena</a>.)</li>
              <li><strong>Apple Mac OSX [2001]</strong> - [Insert Creator/License]</li>
              <li><strong>Microsoft Windows XP [2001]</strong> - [Insert Creator/License]</li>
              <li><strong>e-Ink Journal</strong> - [Insert Creator/License]</li>
            </ul>

            <h3>Google Fonts (SIL Open Font License)</h3>
            <ul>
              <li><strong>VT323</strong> by Peter Hull</li>
              <li><strong>Comfortaa</strong> by Johan Aakerlund</li>
              <li><strong>Michroma</strong> by Vernon Adams</li>
              <li><strong>Koulen</strong> by Danh Hong</li>
              <li><strong>Kanit</strong> by Cadson Demak</li>
              <li><strong>EB Garamond</strong> by Georg Duffner</li>
              <li><strong>Bodoni Moda</strong> by Owen Earl</li>
            </ul>

            <div className="clean-footer">
               <p>Source code to this project is available at:  https://github.com/hamiltonmidway</p>
            </div>
         </div>
      </div>
    </div>
  );
}

export default CreditsModal;