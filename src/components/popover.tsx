"use client";
import React, { ReactNode, useState } from "react";
import { Popover, PopoverContent } from "@nextui-org/popover";
import ButtonUI from "./button";
interface propsType {
  label: string;
  content: ReactNode;
}
const PopoverUI = ({ label, content: ContentComponent }: propsType) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Popover placement="bottom" showArrow={true} isOpen={isOpen} onOpenChange={setIsOpen}>
      <ButtonUI label={label} onClick={() => setIsOpen(!isOpen)} />
      <PopoverContent>
        <div className="px-1 py-2">{ContentComponent}</div>
      </PopoverContent>
    </Popover>

    //POPOVER COMPONENT NOT WORKING IN CLIENTSIDE COMPONENT
  );
};

export default PopoverUI;
