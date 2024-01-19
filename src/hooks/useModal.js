import { useCallback, useEffect, useState } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const closeOnPressEscape = (evt) => {
      if (evt.key === 'Escape') {
        close();
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', closeOnPressEscape);

      return () => {
        document.removeEventListener('keydown', closeOnPressEscape);
      };
    }
  }, [isOpen]);

  return { isOpen, open, close }
}