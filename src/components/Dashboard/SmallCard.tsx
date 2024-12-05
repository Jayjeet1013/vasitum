import React from 'react'

const SmallCard = () => {

  const dataCard = [
    {
      id: 1,
      title: "Available Position",
      position: 24,
      bgColor: "#FFEFE7",
      textColor: "#FF5151",
      desc: "4 Urgently needed",
    },
    {
      id: 2,
      title: "Job Open",
      position: 10,
      bgColor: "#E8F0FB",
      textColor: "#3786F1",
      desc: "4 Active hiring",
    },
    {
      id: 3,
      title: "New Employees",
      position: 24,
      bgColor: "#FDEBF9",
      textColor: "#EE61CF",
      desc: "4 Department",
    },
  ];
  return (
    <div className="flex sm:flex-row flex-col gap-4 ">
      {dataCard.map((index) => (
        <div
          key={index.id}
          className="py-3 px-4 sm:w-[204px] h-[136px] rounded-[10px] "
          style={{ backgroundColor: index.bgColor }}
        >
          <h2 className="text-lg font-medium text-[#161E54] ">{index.title}</h2>
          <h3 className="text-4xl py-3 font-medium ">{index.position}</h3>
          <p
            style={{ color: index.textColor }}
            className="text-[16px] font-normal "
          >
            {index.desc}
          </p>
        </div>
      ))}
    </div>
  );
}

export default SmallCard