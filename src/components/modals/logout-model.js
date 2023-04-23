import React from 
const Modal = ({ onClose, children }) => {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <button onClick={onClose}>Close</button>
                {children}
            </div>
        </div>
    );
}

export default Modal
