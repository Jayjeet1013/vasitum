import Image from "next/image";
import Link from "next/link";
import React from "react";

const Menu = () => {
  const Mainmenu = [
    {
      id: 1,
      title: "Dashboard",
      logo: "./MainMenu/dashboard-logo.svg",
      link: "/",
    },
    {
      id: 2,
      title: "Recruitment",
      logo: "./MainMenu/Recruitment.svg",
      link: "/menu/recruitment",
    },
    {
      id: 3,
      title: "Schedule",
      logo: "./MainMenu/Schedule.svg",
      link: "/menu/schedule",
    },
    {
      id: 4,
      title: "Employee",
      logo: "./MainMenu/Employee.svg",
      link: "/menu/employee",
    },
    {
      id: 5,
      title: "Department",
      logo: "./MainMenu/Department.svg",
      link: "/menu/department",
    },
  ];

  const other = [
    {
      id: 1,
      title: "Support",
      logo: "./Other/support.svg",
      link: "/",
    },
    {
      id: 2,
      title: "Settings",
      logo: "./Other/Setting.svg",
      link: "/",
    },
  ];

  return (
    <div className="w-[242px] fixed  top-0 h-full pt-[20px] border-r ">
      <div className=" flex justify-center">
        <Image
          src={"./vasitum-logo.svg"}
          height={38}
          width={142}
          alt="logo"
        ></Image>
      </div>
      <div className=" flex pl-8 pt-10 flex-col">
        <h1 className=" ">MAIN MENU</h1>
        <div className=" pt-8 space-y-10">
          {Mainmenu.map((index) => (
            <div key={index.id} className="flex flex-row gap-4 ">
              <Image src={index.logo} height={18} width={18} alt="logo"></Image>
              <Link href={index.link}>
                <h2 className="font-medium text-base hover:text-[#FF5151] ">
                  {index.title}
                </h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className=" pl-8 pt-20">
        <h2>OTHER</h2>
        <div className=" pt-8 space-y-10">
          {other.map((index) => (
            <div key={index.id} className="flex flex-row gap-4 ">
              <Image src={index.logo} height={18} width={18} alt="logo"></Image>
              <Link href={index.link}>
                <h2 className="font-medium text-base hover:text-[#FF5151] ">
                  {index.title}
                </h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
