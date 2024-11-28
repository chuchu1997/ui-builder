"use client";
import { ModalUI, LinkUI, PopoverUI, ImageUI, SwitchUI, BreadCrumbUI, TextUI, ChipUI, ButtonUI } from "@/components";
import { UtilsHandler } from "@/utils";

export default function Home() {
  return (
    <div className="11 container mx-auto mt-[30px]">
      {/* <ChipUI id={"11"}>THIS IS CHIP</ChipUI> */}
      <ButtonUI
        label={"TOAST"}
        onClick={() => {
          UtilsHandler.callToast({ typeToast: "success", message: "This is message" });
        }}
      />
    </div>
  );
}
