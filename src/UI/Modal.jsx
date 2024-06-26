import React, { useContext } from "react";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import UserProgressContext from "../context/UserProgressContext";

const Modal = ({ children, open, onClose }) => {
  const userProgressCtx = useContext(UserProgressContext);

  const dialog = useRef();
  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }
    return () => modal.close();
  }, [open]);
  return createPortal(
    <dialog
      ref={dialog}
      className={`min-w-[35vw]  border-0 rounded-xl`}
      onClose={onClose}
    >
      {" "}
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
