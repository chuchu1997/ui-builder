"use client";
import React, { ReactNode } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/modal";
import ButtonUI from "./button";

interface propsType {
  onSubmit?: Function;
  title?: string;
  content: ReactNode;
}

export default function ModalUI({ onSubmit, title = "This is title", content: ContentComponentJSX }: propsType) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <ButtonUI onClick={onOpen} label="Click" />
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="4xl" backdrop="blur">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody>{ContentComponentJSX}</ModalBody>
              <ModalFooter>
                <ButtonUI onClick={onClose} label="CLOSE" />
                <ButtonUI onClick={onClose} label="ACTION" />
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
