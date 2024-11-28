import React from "react";
interface propsType {
  weight?:
    | "font-thin"
    | "font-extralight"
    | "font-light"
    | "font-normal"
    | "font-medium"
    | "font-semibold"
    | "font-bold"
    | "font-extrabold"
    | "font-black";
  align?: "text-left" | "text-center" | "text-right" | "text-justify" | "text-start" | "text-end";
  className?: string;
  tag: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "span";
  fontSize?:
    | "text-xs"
    | "text-sm"
    | "text-base"
    | "text-lg"
    | "text-xl"
    | "text-2xl"
    | "text-3xl"
    | "text-4xl"
    | "text-5xl"
    | "text-6xl"
    | "text-7xl"
    | "text-8xl"
    | "text-9xl";
  children: React.ReactNode;
}
const TextUI = ({ children, weight = "font-normal", fontSize = "text-base", align = "text-left", className, tag = "p" }: propsType) => {
  const Tag = tag;
  return <Tag className={`${className} ${align} ${weight} ${fontSize}`}>{children}</Tag>;
};

export default TextUI;
