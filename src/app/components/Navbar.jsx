import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-center items-center mx-auto p-8">
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex items-center p-4 md:p-0 space-x-8 font-semibold">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title}></NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
