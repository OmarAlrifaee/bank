import { useState } from "react";
import { logo, close, menu } from "../assets";
import { navLinks } from "../constants/index";
const Navbar = () => {
  // states
  const [opened, setOpened] = useState(false); // to hundle the menu icon on small divices screens
  return (
    <nav className=" py-6 flex justify-between items-center w-full nav relative">
      <img
        src={logo}
        alt="hoobank"
        className="w-[124px] h-[32px]"
      />
      <ul
        className={`sm:flex justify-end items-center p-4 sm:p-0 flex-1 z-50 list-none sm:bg-none bg-black-gradient sm:static absolute top-[60px] right-[10px] rounded-xl ${
          !opened && "hidden"
        }`}
      >
        {navLinks.map(({ id, title }, index) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white transition hover:sm:translate-x-0 hover:translate-x-4 py-2 inline-block duration-[.3s] border-b border-b-transparent hover:border-b-white ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              }`}
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={opened ? close : menu}
          alt="menu"
          className="cursor-pointer"
          onClick={() => setOpened((prevOpen) => !prevOpen)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
