import { Input } from "@nextui-org/input";
import React from "react";

interface propsType {
  label: string;
  isRequired: boolean;
  type: "email" | "text" | "password";
  defaultValue: string;
  maxWidth: "xs" | "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
}

const InputUI = ({ disabled = false, label, isRequired, type = "text", defaultValue, maxWidth = "xs", className }: propsType) => {
  return (
    <Input
      disabled={disabled}
      isRequired={isRequired}
      type={type}
      label={label}
      defaultValue={defaultValue}
      className={`max-w-${maxWidth} ${className}`}
    />
  );
};

export default InputUI;
