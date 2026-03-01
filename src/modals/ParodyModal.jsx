import '../Home.css';

function ParodyModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="clean-modal" onClick={(e) => e.stopPropagation()}>
         
         <div className="clean-modal-header">
            <h2>Trademark & Parody Disclaimer</h2>
            <button onClick={onClose} title="Close">&times;</button>
         </div>
         
         <div className="clean-modal-content">
            <p className="clean-intro">
              <strong>Wait, what?  Where is the Apple logo? Why does Windows look like that?</strong>
            </p>
            
            <p>
              If you are wondering why you are booting up a "Peach //e" or opening "SeattleSoft Doorways 95," 
              it is because Retro Journal is a loving homage to, and a legal parody of, the days of classic computing.
            </p>

            <h3>The Magic of Trademarks</h3>
            <p>
              Real company names, logos, and operating system branding (like Apple, Commodore, Windows, and Atari) 
              are protected by trademark law. Trademarks exist to prevent consumer confusion. If we used the actual, real 
              logos, someone might mistakenly believe that Apple or Microsoft officially endorsed, sponsored, 
              or created Retro Journal. (They definitely did not).
            </p>

            <h3>The Power of Parody</h3>
            <p>
              Under United States trademark law, a parody is a defense to trademark infringement. A successful parody 
              relies on a fundamental contradiction: it must simultaneously invoke the original brand so you get the joke, 
              but clearly communicate that it is <em>not</em> the original brand to avoid any "likelihood of confusion."
            </p>
            
            <p style={{ marginTop: '15px' }}>
              By creating fictional brands like "Admiral 75", "Olari", "Peach", and "SeattleSoft", Retro Journal engages in 
              classic fair use. We get to have a little bit of nostalgic fun remembering the beige boxes and chunky aesthetics of the 80s and 90s, 
              and the original companies get to keep their valuable trademarks intact.
            </p>

            <div className="clean-footer">
               <p>Retro Journal is a fictional, satirical work and is not affiliated with any real-world tech companies.</p>
            </div>
         </div>
      </div>
    </div>
  );
}

export default ParodyModal;