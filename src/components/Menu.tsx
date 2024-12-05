import Image from "next/image";
import Link from "next/link";
import React from "react";

const Menu = () => {
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
    <div className="w-[242px] fixed  top-0 h-full pt-[20px] border-r ">
      <div className=" flex pt-2 justify-center">
        <Image
          src={"./vasitum-logo.svg"}
          height={38}
          width={142}
          alt="logo"
        ></Image>
      </div>
      <div className=" flex pl-8 pt-14 flex-col">
        <h2 className="text-[#686868] text-[12px] font-medium  ">MAIN MENU</h2>
        <div className=" pt-8 space-y-10">
          {Mainmenu.map((index) => (
            <div key={index.id} className="flex flex-row gap-4 ">
              <Image src={index.logo} height={18} width={18} alt="logo"></Image>
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
      <div className=" pl-8 pt-20">
        <h2 className="text-[#686868] text-[12px] font-medium  ">OTHER</h2>
        <div className=" pt-8 space-y-10">
          {other.map((index) => (
            <div key={index.id} className="flex flex-row gap-4 ">
              <Image src={index.logo} height={18} width={18} alt="logo"></Image>
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
  );
};

export default Menu;
