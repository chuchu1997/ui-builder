import React from "react";
import { Button } from "@nextui-org/button";

interface ButtonProps {
  label: string; // Text to display on the button
  onClick?: () => void; // Callback function when the button is clicked
  backgroundColor?: string; // Background color (optional)
  color?: string; // Text color (optional)
  size?: "sm" | "md" | "lg"; // Button size (optional)
  variant?: "filled" | "outlined" | "text"; // Button variant (optional)
  disabled?: boolean; // Disable the button (optional)
  className?: string; // Additional custom CSS classes (optional)
  style?: React.CSSProperties; // Inline styles (optional)
  radius?: "full" | "lg" | "md" | "sm" | "none";
  icon?: React.ComponentType<JSX.IntrinsicElements["svg"]>;
}
const ButtonUI = ({
  label,
  onClick,
  backgroundColor = "#007BFF",
  color = "#FFFFFF",
  size = "md",
  variant = "filled",
  disabled = false,
  className = "",
  radius = "sm",
  style = {},
  icon: IconComponent,
}: ButtonProps) => {
  const buttonStyle: React.CSSProperties = {
    backgroundColor: variant === "filled" ? backgroundColor : "transparent",
    color: variant === "filled" ? color : backgroundColor,
    border: variant === "outlined" ? `2px solid ${backgroundColor}` : "none",
    cursor: disabled ? "not-allowed" : "pointer",
    ...style, // Allow additional custom inline styles
  };
  return (
    <Button className={`${className}  `} size={size} style={buttonStyle} onClick={onClick} radius={radius}>
      <span> {label}</span>
      {IconComponent && <IconComponent className="icon" style={{ height: "20px", width: "20px" }} />}
      {/* <BeakerIcon className="size-4" /> */}
    </Button>
  );
};

export default ButtonUI;
