import React, { useState } from "react";
import { navLinks } from "../constants";
import Link from "next/link";

const NavLink = () => {
  const [index, setIndex] = useState(0);
  return (
    <>
      {navLinks.map((link, i) => (
        <Link
          onClick={() => setIndex(i)}
          key={link.name}
          href={link.href}
          className={`${
            index === i ? "text-brightRed" : "hover-underline-animation"
          }  transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default NavLink;
