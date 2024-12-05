"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdClose, MdOutlineMenu } from "react-icons/md";
import Link from "next/link";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const Mainmenu = [
    {
      id: 1,
      title: "Dashboard",
      logo: "./MainMenu/dashboard-logo.svg",
      textColor: "#FF5151",
      link: "/",
    },
    {
      id: 2,
      title: "Recruitment",
      logo: "./MainMenu/Recruitment.svg",
      textColor: "#686868",
      link: "/menu/recruitment",
    },
    {
      id: 3,
      title: "Schedule",
      logo: "./MainMenu/Schedule.svg",
      textColor: "#686868",
      link: "/menu/schedule",
    },
    {
      id: 4,
      title: "Employee",
      logo: "./MainMenu/Employee.svg",
      textColor: "#686868",
      link: "/menu/employee",
    },
    {
      id: 5,
      title: "Department",
      logo: "./MainMenu/Department.svg",
      textColor: "#686868",
      link: "/menu/department",
    },
  ];

  const other = [
    {
      id: 1,
      title: "Support",
      logo: "./Other/support.svg",
      textColor: "#686868",
      link: "/",
    },
    {
      id: 2,
      title: "Settings",
      logo: "./Other/Setting.svg",
      textColor: "#686868",
      link: "/",
    },
  ];
  return (
    <div className="  w-full mx-auto  fixed bg-white">
      <div className="sm:ml-[260px] pl-4 pr-4 sm:pr-[50px] border-b py-3 sm:py-6  ">
        <div className=" flex  justify-between ">
          <div className=" flex items-center ">
            <input
              placeholder="Search"
              className=" border hidden sm:block relative p-2 w-[343px] h-[44px] rounded-lg outline-none "
            ></input>
            <MdOutlineMenu
              onClick={toggleMenu}
              className="block sm:hidden size-8 text-[#B2B2B2] "
            />
            <FiSearch className=" size-[20px] text-[#B2B2B2] left-14 sm:left-[590px] absolute" />
          </div>
          <div className="flex gap-8  ">
            <Image
              src={"./nav/notifications.svg"}
              height={24}
              width={24}
              alt="logo"
            ></Image>
            <Image
              src={"./nav/message.svg"}
              height={24}
              width={24}
              alt="logo"
            ></Image>

            <Image
              src={"./nav/photo.svg"}
              height={42}
              width={194}
              alt="logo"
              className="hidden sm:block"
            />
            <Image
              src={"./nav/photo2.svg"}
              height={42}
              width={66}
              alt="logo"
              className="sm:hidden"
            />
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50">
          <div className="relative w-[250px] h-full bg-white p-4">
            <MdClose
              className="absolute top-3 right-2 text-3xl cursor-pointer"
              onClick={toggleMenu}
            />
            <div>
              <div className=" flex pt-2 justify-center">
                <Image
                  src={"./vasitum-logo.svg"}
                  height={38}
                  width={142}
                  alt="logo"
                ></Image>
              </div>
              <div className=" flex pl-7 pt-14 flex-col">
                <h2 className="text-[#686868] text-[12px] font-medium  ">
                  MAIN MENU
                </h2>
                <div className=" pt-8 space-y-10">
                  {Mainmenu.map((index) => (
                    <div key={index.id} className="flex flex-row gap-4 ">
                      <Image
                        src={index.logo}
                        height={18}
                        width={18}
                        alt="logo"
                      ></Image>
                      <Link href={index.link}>
                        <h2
                          style={{ color: index.textColor }}
                          className="font-medium  text-base"
                        >
                          {index.title}
                        </h2>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              <div className=" pl-7 pt-20">
                <h2 className="text-[#686868] text-[12px] font-medium  ">
                  OTHER
                </h2>
                <div className=" pt-8 space-y-10">
                  {other.map((index) => (
                    <div key={index.id} className="flex flex-row gap-4 ">
                      <Image
                        src={index.logo}
                        height={18}
                        width={18}
                        alt="logo"
                      ></Image>
                      <Link href={index.link}>
                        <h2
                          style={{ color: index.textColor }}
                          className="font-medium text-base  "
                        >
                          {index.title}
                        </h2>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
