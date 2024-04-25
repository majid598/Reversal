"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const pathName = usePathname();
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Dashboard",
      path: "#",
    },
    {
      name: "eREV",
      path: "#",
    },
    {
      name: "Governance",
      path: "#",
    },
    {
      name: "Transparency",
      path: "#",
    },
    {
      name: "More",
      path: "#",
    },
  ];
  console.log(isMobile)
  return (
    <header className="w-full">
      <div className="w-full head hidden h-20 shadow justify-between px-12">
        <div className="text-5xl font-extrabold overflow-hidden h-full">
          <Image
            src={"/assets/logo.png"}
            className="invert h-full object-center object-cover"
            width={170}
            height={100}
          />
        </div>
        <button onClick={() => setIsMobile(true)} className="text-3xl">
          <IoMdMenu />
        </button>
      </div>
      <nav
        className={`w-full h-28 header z-[999] flex items-center shadow px-20 justify-between ${
          isMobile ? "active" : ""
        }`}
      >
        <div className="text-5xl logo font-extrabold overflow-hidden h-full">
          <Image
            src={"/assets/logo.png"}
            className="invert h-full scale-125 object-center object-cover"
            width={170}
            height={100}
          />
        </div>
        <button
          onClick={() => setIsMobile(false)}
          className="text-3xl text-white btn hidden absolute top-4 right-4"
        >
          {" "}
          <IoMdClose />{" "}
        </button>
        <div className="ext hidden"></div>
        <div className="links flex items-center">
          {links.map((link) => (
            <div className="font-semibold text-xl">
              <Link
                href={link.path}
                className={`nlink ${
                  pathName === link.path
                    ? "bg-zinc-800 text-white"
                    : "text-zinc-800 bg-transparent"
                } rounded-full px-8 py-4`}
              >
                {link.name}
              </Link>
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
