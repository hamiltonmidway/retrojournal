import { useState } from 'react';
import './PasswordModal.css';

function PasswordModal({ mode, fileName, onSubmit, onClose }) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [hasWrittenDown, setHasWrittenDown] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from reloading on form submit
    setError('');

    // 1. Basic validation
    if (!password) {
      setError('Password cannot be empty.');
      return;
    }

    // 2. Setup Mode (Encrypt) validation
    if (mode === 'encrypt') {
      if (password !== confirmPassword) {
        setError('Passwords do not match. Please re-type carefully.');
        return;
      }
      if (!hasWrittenDown) {
        setError('You must check the box confirming you have saved your password.');
        return;
      }
    }

    // 3. If everything is perfect, send the password back to Journal.jsx!
    onSubmit(password);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="clean-modal" onClick={(e) => e.stopPropagation()}>
        
        <div className="clean-modal-header">
          <h2>{mode === 'encrypt' ? 'Lock File' : 'Unlock File'}</h2>
          <button onClick={onClose} title="Close">&times;</button>
        </div>

        <div className="clean-modal-content">
          <p className="clean-intro">
            {mode === 'encrypt' 
              ? `You are about to secure "${fileName}" with AES-256 encryption.`
              : `"${fileName}" is encrypted. Enter your key to read it.`}
          </p>

          <form onSubmit={handleSubmit} className="password-form">
            
            {/* MAIN PASSWORD INPUT */}
            <div className="input-group">
              <label>Password:</label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
              />
            </div>

            {/* ENCRYPT MODE ONLY: Confirm & Checkbox */}
            {mode === 'encrypt' && (
              <>
                <div className="input-group">
                  <label>Confirm Password:</label>
                  <input 
                    type="password" 
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>

                <div className="safety-checkbox-box">
                  <label className="clean-input-row">
                    <input 
                      type="checkbox" 
                      checked={hasWrittenDown}
                      onChange={(e) => setHasWrittenDown(e.target.checked)}
                    />
                    <span>
                      Check here to confirm that you have written down your password somewhere. 
                      <strong className="warning-text"> Remember: if you lose your password, this journal can't be recovered!</strong>
                    </span>
                  </label>
                </div>
              </>
            )}

            {/* ERROR MESSAGE DISPLAY */}
            {error && <p className="error-text">{error}</p>}

            <div className="clean-settings-footer">
               <button type="button" onClick={onClose} className="clean-btn-cancel">Cancel</button>
               <button type="submit" className="clean-btn-save">
                 {mode === 'encrypt' ? 'Encrypt & Save' : 'Unlock'}
               </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default PasswordModal;