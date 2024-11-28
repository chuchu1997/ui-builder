import React from "react";
import NextLink from "next/link";
import { Link } from "@nextui-org/link";

interface propsType {
  children: React.ReactNode;
  href: string;
  color?: string;
  className?: string;
  showAnchorIcon?: boolean;
}
const LinkUI = ({ children, href, showAnchorIcon = true, color = "text-accent", className }: propsType) => {
  return (
    <Link as={NextLink} href={href} showAnchorIcon={showAnchorIcon} className={`  ${color} ${className}`}>
      {children}
    </Link>
  );
};

export default LinkUI;
