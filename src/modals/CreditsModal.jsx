import '../Home.css';

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
              <li><strong>Apple IIe parody (font name: PrintChar21)</strong> - created by Kreative Software, licensed under the Kreative Software Relay Fonts Free Use License. <a href="/FreeLicense.txt" target="_blank" rel="noopener noreferrer">License is here.</a> Kreative Korp's website is <a href="https://www.kreativekorp.com/software/fonts/apple2/" target="_blank" rel="noopener noreferrer">here.</a>)</li>
              <li><strong>Commodore 64 parody (font name: Bescii Mono)</strong> created by Damian Vila (Creative Commons CC0 1.0 Universal Public Domain Dedication. <a href="/Bescii_License.txt" target="_blank" rel="noopener noreferrer">License is here.</a> Damian's GitHub repository is <a href="https://github.com/damianvila/font-bescii" target="_blank" rel="noopener noreferrer">here.</a>)</li>
              <li><strong>Atari 400 parody (font name: Atari Classic Chunky)</strong> - created by Mark L. Simonson (copyrighted freeware, but can be distributed with free open source products if the documentation is included. <a href="Read_Me.pdf" target="_blank" rel="noopener noreferrer">Documentation is here.</a> Mark's website is <a href="https://members.bitstream.net/marksim/atarimac/fonts.html" target="_blank" rel="noopener noreferrer">here.</a></li>
              <li><strong>IBM PC Jr parody (font name: Flexi IBM VGA True)</strong> - created by VileR (Creative Commons Attribution-ShareAlike 4.0 International. <a href="/creative-commons-four-dot-zero.txt" target="_blank" rel="noopener noreferrer">License is here.</a> VileR's fonts were downloaded from <a href="https://font.download/font/flexi-ibm-vga-true" target="_blank" rel="noopener noreferrer">font.download</a>)</li>
              <li><strong>Apple Macintosh parody (font name: Sysfont)</strong> - created by Alina Sava (SIL Open Font License. <a href="/OFL.txt" target="_blank" rel="noopener noreferrer">License is here.</a> Alina's font was downloaded from <a href="https://fontsarena.com/sysfont-by-alina-sava/" target="_blank" rel="noopener noreferrer">Fonts Arena</a>.)</li>
              <li><strong>MS-DOS parody (font name: Ultimate Oldschool PC Font)</strong> - created by VileR (Creative Commons Attribution-ShareAlike 4.0 International. <a href="/creative-commons-four-dot-zero.txt" target="_blank" rel="noopener noreferrer">License is here.</a> Downloaded from <a href="https://int10h.org/oldschool-pc-fonts/" target="_blank" rel="noopener noreferrer">int10h.org</a>)</li>
              <li><strong>Microsoft Windows 3.1 parody (font name: Windows)</strong> - created by Fekete Tamas (100% Free / Freeware. Downloaded from <a href="https://www.dafont.com/fekete-tamas.d11412" target="_blank" rel="noopener noreferrer">DaFont</a>.)</li>
              <li><strong>Apple Macintosh System 7 parody (font name: Chicago 12pix)</strong> - created by spirograph (Creative Commons Attribution-ShareAlike 3.0 Unported. <a href="/CCbySA3unported.txt" target="_blank" rel="noopener noreferrer">License is here.</a> Downloaded from <a href="https://fontstruct.com/fontstructions/show/70520/chicago_12pix" target="_blank" rel="noopener noreferrer">FontStruct</a>.)</li>
              <li><strong>Microsoft Windows 95 parody (font name: W95FA)</strong> - created by Alina Sava (SIL Open Font License. <a href="/OFL.txt" target="_blank" rel="noopener noreferrer">License is here.</a> Alina's font was downloaded from <a href="https://fontsarena.com/w95fa-by-alina-sava/" target="_blank" rel="noopener noreferrer">Fonts Arena</a>.)</li>
              <li><strong>Apple Mac OSX parody (font name: DejaVu Sans)</strong> - created by The DejaVu Fonts Team (Bitstream Vera Fonts License. <a href="/BitStreamVeraFontsLicense.txt" target="_blank" rel="noopener noreferrer">License is here.</a> Downloaded from <a href="https://dejavu-fonts.github.io/" target="_blank" rel="noopener noreferrer">DejaVu Fonts</a>.)</li>
              <li><strong>Microsoft Windows XP parody (font name: WindowsXPlike A)</strong> - created by Veika and Morie (ニンテンドーフォント), FontStructions (Creative Commons Attribution-ShareAlike 3.0 Unported. <a href="/CCbySA3unported.txt" target="_blank" rel="noopener noreferrer">License is here.</a> Downloaded from <a href="https://fontstruct.com/fontstructions/show/2827659/windowsxplike-a" target="_blank" rel="noopener noreferrer">FontStruct</a>.)</li>
            </ul>

            <h3>Google Fonts (used for the e-Ink parody and the App)</h3>
            <ul>
              <li><strong>VT323</strong> by Peter Hull.  (SIL Open Font License. <a href="/OFL.txt" target="_blank" rel="noopener noreferrer">License is here.)</a> </li>
              <li><strong>Comfortaa</strong> by Johan Aakerlund.   (SIL Open Font License. <a href="/OFL.txt" target="_blank" rel="noopener noreferrer">License is here.)</a> </li>
              <li><strong>Michroma</strong> by Vernon Adams.  (SIL Open Font License. <a href="/OFL.txt" target="_blank" rel="noopener noreferrer">License is here.)</a> </li>
              <li><strong>Koulen</strong> by Danh Hong.  (SIL Open Font License. <a href="/OFL.txt" target="_blank" rel="noopener noreferrer">License is here.)</a> </li>
              <li><strong>Kanit</strong> by Cadson Demak.  (SIL Open Font License. <a href="/OFL.txt" target="_blank" rel="noopener noreferrer">License is here.)</a> </li>
              <li><strong>EB Garamond</strong> by Georg Duffner.  (SIL Open Font License. <a href="/OFL.txt" target="_blank" rel="noopener noreferrer">License is here.)</a> </li>
              <li><strong>Bodoni Moda</strong> by Owen Earl.  (SIL Open Font License. <a href="/OFL.txt" target="_blank" rel="noopener noreferrer">License is here.)</a> </li>
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