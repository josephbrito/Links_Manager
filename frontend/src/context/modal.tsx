import React, { useContext } from "react";
import { createContext, useState } from "react";
import { IModal, IChildren } from "./types";

const ModalContext = createContext<IModal>({
  isOpen: false,
  setIsOpen: () => {},
});

export function ModalProvider({ children }: IChildren) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const { isOpen, setIsOpen } = useContext(ModalContext);

  return { isOpen, setIsOpen };
}
