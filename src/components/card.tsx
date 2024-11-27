// import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image}
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import React from "react";
import ImageUI from "./image";

interface propsType {
  cardTitle?: string;
  cardSubtitle?: string;
  cardDescription?: string;
  cardImageSRC?: string;
}
const CardUI = ({ cardTitle = "", cardSubtitle = "", cardImageSRC, cardDescription = "" }: propsType) => {
  return (
    <Card className="max-w-[400px] border border-[red] z-50 ">
      <CardHeader className="flex gap-3">
        {cardImageSRC && (
          <ImageUI
            src={"https://nextui.org/images/hero-card-complete.jpeg"}
            zoomOnHover
            imageName={"HEHE"}
            filledWithParent={false}
            height={40}
            width={40}
            priority
            objectFit="contain"
          />
        )}

        <div className="flex flex-col">
          <p className="text-md">{cardTitle}</p>
          <p className="text-small text-default-500">{cardSubtitle}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{cardDescription}</p>
      </CardBody>
      <Divider />
      <CardFooter>
        {/* <Link isExternal showAnchorIcon href="https://github.com/nextui-org/nextui">
          Visit source code on GitHub.
        </Link> */}
      </CardFooter>
    </Card>
  );
};

export default CardUI;
