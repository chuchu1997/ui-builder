import { Divider } from "@nextui-org/divider";
import React from "react";
import LinkUI from "./link";
import ImageUI from "./image";
import { ClockIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import TextUI from "./text";
interface propsType {
  opening: string;
  phone: string;
  mail: string;
  facebookLink?: string;
  youtubeLink?: string;
  linkedInLink?: string;
}
const TopHeaderUI = ({ opening, phone, mail, facebookLink, youtubeLink, linkedInLink }: propsType) => {
  return (
    <div className="p-2 hidden md:block ">
      <div className="content container mx-auto flex items-center justify-between">
        <div className="left-side flex items-center gap-4 ">
          <div className="flex items-center gap-2">
            <ClockIcon className="size-4" />
            <TextUI tag={"p"} children={opening} fontSize="text-sm" />
          </div>

          <div className="flex items-center gap-2">
            <PhoneIcon className="size-4" />
            <TextUI tag={"p"} children={phone} fontSize="text-sm" />
          </div>

          <div className="flex items-center gap-2">
            <EnvelopeIcon className="size-4" />
            <h2>AA</h2>
            <TextUI tag={"p"} children={mail} fontSize="text-sm" />
          </div>
        </div>
        <div className="right-side flex items-center gap-4">
          <LinkUI href="/" color="text-black" showAnchorIcon={false}>
            <ImageUI objectFit="cover" src={"/socialsIcon/facebook.png"} imageName={"facebook"} filledWithParent={false} width={20} height={20} />
          </LinkUI>
          <LinkUI href="/" color="text-black" showAnchorIcon={false}>
            <ImageUI objectFit="cover" src={"/socialsIcon/linkedin.png"} imageName={"linkedin"} filledWithParent={false} width={20} height={20} />
          </LinkUI>
          <LinkUI href="/" color="text-black" showAnchorIcon={false}>
            <ImageUI objectFit="cover" src={"/socialsIcon/youtube.png"} imageName={"youtube"} filledWithParent={false} width={20} height={20} />
          </LinkUI>
        </div>
      </div>
    </div>
  );
};

export default TopHeaderUI;
