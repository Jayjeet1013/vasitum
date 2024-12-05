import Image from "next/image";
import React from "react";
import { FiSearch } from "react-icons/fi";

const Nav = () => {
  return (
    <div className="  w-full mx-auto  fixed bg-white">
      <div className="ml-[292px] pr-[50px] border-b  py-10  ">
        <div className=" flex  justify-between ">
          <div>
            <input
              placeholder="Search"
              className=" border relative p-2 w-[343px] h-[44px] rounded-lg outline-none "
            ></input>

            <FiSearch className=" size-[20px] text-[#B2B2B2] left-[600px] absolute -mt-8 " />
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
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
