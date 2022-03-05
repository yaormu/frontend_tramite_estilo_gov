import React from "react";
import "./Modol.css";

const Modol = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = e => e.stopPropagation();

  return (
    <>
      <div className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
        <div className="modal-container" onClick={handleModalContainerClick}>
          <button className="modal-close" onClick={closeModal}>X</button>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modol;

/*
<div className="modal is-open">
      <div className='modal-container'>
        <button className="modal-close">X</button>
        {children}
      </div>
    </div>
*/
