import Image from "next/image";
import React from "react";

const Schedule = () => {
  const data = [
    {
      id: 1,
      title: "Interview with candidates",
      time: "Today - 11.30 AM",
    },
    {
      id: 2,
      title: "Short meeting with product designer from IT Departement",
      time: "Today - 09.15 AM",
    },
  ];
  return (
    <div className="border rounded-xl max-w-full sm:w-[427px] mx-auto">
      <div className="text-[#161E54]  flex p-4 justify-between text-[18px] ">
        <h2 className="text-center items-center flex "> Upcoming Schedule</h2>

        <div className="p-2 gap-1 rounded-md flex border ">
          {" "}
          <h3 className="text-[12px] font-normal ">Today, 13 Sep 2021</h3>
          <Image
            src={"./dashboard/dropdown.svg"}
            height={18}
            width={18}
            alt="logo"
          ></Image>
        </div>
      </div>
      <div className="px-4 ">
        <h3 className="text-[12px] text-[#686868]  leading-[28px] font-normal ">
          Priority
        </h3>
        <div className="rounded-xl px-3 flex justify-between border py-3 ">
          <div className="space-y-2 ">
            <h2 className="font-normal text-[15px] w-[300px] ">
              Review candidate applications{" "}
            </h2>
            <h2 className="text-[#686868] text-[10px] font-normal leading-[14px]">
              Today - 11.30 AM
            </h2>
          </div>
          <div>
            <Image
              src={"./dashboard/dots.svg"}
              height={24}
              width={24}
              alt="logo"
            ></Image>
          </div>
        </div>
      </div>
      <h3 className="text-[12px] pt-2 text-[#686868] px-4 leading-[28px] font-normal ">
        Other{" "}
      </h3>
      <div className=" flex flex-col px-4 pb-4 gap-3">
        {data.map((index) => (
          <div
            key={index.id}
            className="rounded-xl flex justify-between border p-3 "
          >
            <div className="space-y-2 ">
              <h2 className="font-normal text-[15px] w-[300px] ">
                {index.title}
              </h2>
              <h2 className="text-[#686868] text-[10px] font-normal leading-[14px]">
                {index.time}
              </h2>
            </div>
            <div>
              <Image
                src={"./dashboard/dots.svg"}
                height={24}
                width={24}
                alt="logo"
              ></Image>
            </div>
          </div>
        ))}
      </div>{" "}
      <h2 className="text-[#FF5151] py-3 text-center border-t text-[14px] font-medium ">
        Create a New Schedule
      </h2>
    </div>
  );
};

export default Schedule;
