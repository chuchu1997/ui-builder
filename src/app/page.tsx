import { ModalUI, PopoverUI, ImageUI, SwitchUI, BreadCrumbUI } from "@/components";
import Link from "next/link";
export default function Home() {
  return (
    <div className="">
      <ModalUI content={<>This is content component !!!</>} />
    </div>
  );
}
