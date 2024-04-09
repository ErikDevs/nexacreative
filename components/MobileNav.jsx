import Link from "next/link";
import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";

const MobileNav = () => {
  const [menu, setMenu] = useState();
  return (
    <div>
      <ul
        className={`${
          menu ? "move-in " : "move-out"
        } lg:hidden flex flex-col justify-normal p-6 left-0 w-3/4 absolute   h-[1000px] scroll-smooth -top-4  z-50 gap-y-8`}
      >
        {navLinks.map((link, i) => (
          <Link key={link.name} href={link.href}>
            {i === 2 ? (
              <div className="flex flex-col">
                <span className="flex justify-between items-center">
                  {link.name}{" "}
                  {!subMenu ? (
                    <BiPlus
                      className="bg-blue-700 transition duration-300 ease-in-out"
                      style={{ fontSize: "1.5em" }}
                      onClick={() => setSubMenu(true)}
                    />
                  ) : (
                    <BiMinus
                      className="bg-blue-700 transition duration-300 ease-in-out"
                      style={{ fontSize: "1.5em" }}
                      onClick={() => setSubMenu(false)}
                    />
                  )}
                </span>
                <hr className="h-1 w-full mt-2" />
                <ul
                  className={`${
                    subMenu ? "show" : "hide"
                  } flex flex-col ml-4 gap-2 text`}
                >
                  {subServices.map((sublink) => (
                    <Link
                      key={sublink.name}
                      href={sublink.href}
                      onClick={() => setMenu(false)}
                    >
                      <span className="flex flex-col justify-center gap-2">
                        <span className="hover:text-brightRed transition-colors duration-300 ease-linear">
                          {sublink.name}
                        </span>
                        <hr className="h-1 w-full" />
                      </span>
                    </Link>
                  ))}
                </ul>
              </div>
            ) : (
              <span className="flex flex-col justify-center">
                <span onClick={() => setMenu(false)}>{link.name}</span>
                <hr className="h-1 w-full mt-2" />
              </span>
            )}
          </Link>
        ))}
        <Button className="block md:hidden" name="Get a quote" />
      </ul>
    </div>
  );
};

export default MobileNav;
