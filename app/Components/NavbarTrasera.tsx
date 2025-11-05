"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/" className="logo_nvidia">
        <Image src="/images/logo_nvidia.png" alt="Logo" width={10} height={10} />
        
        </Link>
    </nav>
  );
};

export default Navbar;
