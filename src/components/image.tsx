import React from "react";
import { Image } from "@nextui-org/image";
import NextImage from "next/image";
interface propsType {
  isBlur?: boolean;
  shadow?: "none" | "md" | "sm" | "lg";
  src: string;
  width?: number;
  height?: number;
  imageName: string;
  lazyload?: "lazy" | "eager";
  filledWithParent: boolean;
  fallbackSrc?: string;
  objectFit?: "cover" | "contain" | "fill" | "none";
  zoomOnHover?: boolean;
  radius?: "none" | "sm" | "md" | "lg" | "full";
  priority?: boolean;
}
const ImageUI = ({
  isBlur = false,
  shadow = "none",
  src,
  width = 300,
  height = 200,
  imageName = "image_name",
  lazyload = "eager",
  filledWithParent,
  fallbackSrc,
  objectFit = "none",
  zoomOnHover = false,
  priority = false,
  radius = "md",
}: propsType) => {
  if (filledWithParent)
    return (
      <div className={`w-full h-full relative overflow-hidden rounded-${radius}`}>
        <NextImage
          className={`${zoomOnHover && "hover:scale-125 duration-400 ease-in-out transition-transform "}`}
          objectFit={objectFit}
          src={src}
          alt={imageName}
          loading={lazyload}
          fill
          quality={90}
          priority={priority}
        />
      </div>
    );
  return (
    <Image
      radius={radius}
      isZoomed={zoomOnHover}
      as={NextImage}
      objectFit={objectFit}
      width={width}
      height={height}
      src={src}
      alt={imageName}
      loading={lazyload}
      shadow={shadow}
      isBlurred={isBlur}
      quality={80}
      priority={priority}
    />
  );
};

export default ImageUI;
