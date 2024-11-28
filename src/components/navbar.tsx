"use client";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/navbar";
import { useState } from "react";
import LinkUI from "./link";
import { MenuList } from "@/data/menu";
export default function NavbarUI() {
  const [isMenuOpen, setMenuOpen] = useState(true);
  return (
    <Navbar maxWidth="2xl" isBordered onMenuOpenChange={setMenuOpen}>
      <NavbarMenuToggle className="sm:hidden" />
      <NavbarBrand>
        <LinkUI href="/" showAnchorIcon={false}>
          <div className="flex gap-2">
            <span>LOGO</span>
            <p className="font-bold text-inherit">ACME</p>
          </div>
        </LinkUI>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {MenuList.map((menuItem) => (
          <NavbarItem key={menuItem.label}>
            <LinkUI href={menuItem.href}>{menuItem.label}</LinkUI>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <p>Link</p>
        </NavbarItem>
        <NavbarItem>
          {/* <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button> */}
          HEHE
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {MenuList.map((menuItem) => (
          <NavbarItem key={menuItem.label}>
            <LinkUI href={menuItem.href}>{menuItem.label}</LinkUI>
          </NavbarItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
