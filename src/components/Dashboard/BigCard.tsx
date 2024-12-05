import Image from "next/image";
import React from "react";

const BigCard = () => {
  const cardData = [
    {
      id: 1,
      title: "Total Employees",
      number: 216,
      graphImg: "./dashboard/graph1.svg",
      men: 120,
      women: 96,
      percent: 2,
    },
    {
      id: 2,
      title: "Tolent Request",
      number: 16,
      graphImg: "./dashboard/graph2.svg",
      men: 6,
      women: 10,
      percent: 5,
    },
  ];

  return (
    <div className="flex gap-5 ">
      {cardData.map((index) => (
        <div
          key={index.id}
          className="w-[312px] h-[190px] p-5 justify-between border rounded-lg flex"
        >
          <div>
            {" "}
            <h1 className="text-lg font-medium text-[#161E54]  ">
              {index.title}
            </h1>
            <h1 className="text-5xl font-medium pt-3 pb-4 text-[#161E54] ">
              {index.number}
            </h1>
            <h2 className="text-[12px] font-normal leading-[18px] ">
              {index.men} Men
            </h2>
            <h2 className="text-[12px] font-normal leading-[18px] ">
              {index.women} Women
            </h2>
          </div>
          <div className="w-[115px] pt-5 ">
            <Image
              src={index.graphImg}
              height={78}
              width={115}
              alt="logo"
            ></Image>
            <p className="p-2 text-[12px] rounded-md bg-[#FFEFE7]  ">
              +{index.percent}% Past month
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BigCard;
