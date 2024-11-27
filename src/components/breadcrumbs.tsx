"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BreadCrumbUI = () => {
  const path = usePathname();
  useEffect(() => {
    if (path) {
    }
  }, [path]);

  return <div>BREAD</div>;
};

export default BreadCrumbUI;
