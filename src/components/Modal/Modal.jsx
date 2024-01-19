import { useContext, useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import { useResize } from "../../hooks/useResize";
import { classnames } from "../../utils/helpers";
import UserContext from "../../contexts/UserContext";
import "./Modal.css"

const Modal = ({ isOpen, onClose, }) => {
  const { isLogged } = useContext(UserContext);
  const { isDesktop } = useResize();

  useEffect(() => {
    if (isDesktop && isOpen) {
      onClose();
    }
  }, [isDesktop, isOpen]);

  if (isDesktop) {
    return null;
  }

  return (
    <div className={classnames('modal', isOpen && 'modal_opened')}>
      <div className="modal__container">
        <Navigation isLogged={isLogged} onLinkClick={onClose} />
        <button type="button" className="modal__close-button" onClick={onClose} />
      </div>
    </div>
  );
};

export default Modal;