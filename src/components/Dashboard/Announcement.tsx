import Image from "next/image";
import React from "react";

const Announcement = () => {
  const data = [
    {
      id: 1,
      title: "Outing schedule for every departement",
      time: "5 Minutes ago",
    },
    {
      id: 2,
      title: "Meeting HR Department",
      time: "Yesterday, 12:30 PM",
    },
    {
      id: 3,
      title: "IT Department need two more talents for UX/UI Designer position",
      time: "Yesterday, 09:15 AM",
    },
  ];
  return (
    <div className="border rounded-xl w-[640px]  ">
      <div className="text-[#161E54]  flex p-4 justify-between text-[18px] ">
        <h2 className="text-center items-center flex "> Announcement</h2>
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
      <div className=" flex flex-col p-4 gap-3">
        {data.map((index) => (
          <div
            key={index.id}
            className="rounded-xl flex justify-between border p-3 "
          >
            <div className="space-y-2 ">
              <h2 className="font-medium text-[16px] w-[400px] ">
                {index.title}
              </h2>
              <h2 className="text-[#686868] text-[10px] font-normal leading-[14px] ">{index.time}</h2>
            </div>
            <div className="flex gap-2 ">
              <Image
                src={"./dashboard/announce.svg"}
                height={24}
                width={24}
                alt="logo"
              ></Image>
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
        See All Announcement
      </h2>
    </div>
  );
};

export default Announcement;
