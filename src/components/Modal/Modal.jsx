import { useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import { useResize } from "../../hooks/useResize";
import { cn } from "../../utils/helpers";
import "./Modal.css"

const Modal = ({
  isLogged,
  isOpen,
  onClose,
}) => {
  const { isDesktop } = useResize();

  useEffect(() => {
    if (isDesktop && isOpen) {
      onClose();
    }

  }, [isDesktop]);

  if (isDesktop) {
    return null
  }

  return (
    <div className={cn('modal', isOpen && 'modal_opened')}>
      <div className="modal__container">
        <Navigation isLogged={isLogged} onLinkClick={onClose} />
        <button type="button" className="modal__close-button" onClick={onClose} />
      </div>
    </div>
  );
};

export default Modal;