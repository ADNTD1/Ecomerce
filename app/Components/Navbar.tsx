"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/" className="logo">
        <Image src="/images/logo.png" alt="Logo" width={180} height={180} />
        
      </Link>
      <div className="links">
        <Link href="/login">Login</Link>
        <Link href="/contacto">Contacto</Link>
        <Link href="/acerca">Acerca de</Link>
      </div>
    </nav>
  );
};

export default Navbar;
