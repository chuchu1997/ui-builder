"use client";
import { Switch } from "@nextui-org/switch";
import React, { useState } from "react";

interface propsType {
  size?: "sm" | "md" | "lg";
  onChangeSwitch: (value: boolean) => void;
  initValue?: boolean;
  label?: string;
}
const SwitchUI = ({ size = "md", onChangeSwitch, initValue = false, label }: propsType) => {
  const [isSelected, setIsSelected] = useState(initValue);
  const onChangeSelect = (newValue: boolean) => {
    setIsSelected(newValue);
    onChangeSwitch(newValue);
  };
  return (
    <Switch isSelected={isSelected} onValueChange={onChangeSelect} size="md">
      {label}
    </Switch>
  );
};

export default SwitchUI;
