"use client";
import { Chip } from "@nextui-org/chip";
import { CubeIcon } from "@heroicons/react/24/solid";

import React from "react";

interface propsType {
  children: React.ReactNode;
  onRemove?(id: string): void;
  id: string;
}
const ChipUI = ({ children, onRemove, id }: propsType) => {
  const onRemoveChip = () => {
    (onRemove ?? (() => {}))(id);
  };
  return (
    <div className="flex gap-4">
      <Chip startContent={<CubeIcon className="size-4" />} onClose={onRemoveChip} variant="bordered">
        {children}
      </Chip>
    </div>
  );
};

export default ChipUI;
