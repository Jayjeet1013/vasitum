import React from 'react'

const Activity = () => {
  return (
    <div className="max-w-full sm:w-[427px] h-auto sm:h-[258px] text-[#FFFFFF]">
      <div className="bg-[#1B204A] p-3 rounded-t-[10px] ">
        <h1 className="text-[18px] font-medium leading-[28px]  ">
          Recent Activity
        </h1>
      </div>
      <div className="bg-[#161E54] py-5 pl-5  rounded-b-[10px] flex flex-col gap-10 ">
        <div className="pr-16 ">
          <h2 className="opacity-80 text-[10px] font-medium leading-[11px] ">
            10.40 AM, Fri 10 Sept 2021
          </h2>
          <h1 className="text-[18px] font-medium leading-[36px] ">
            You Posted a New Job
          </h1>
          <p className="opacity-80 text-[14px] leading-[21px]">
            Kindly check the requirements and terms of work and make sure
            everything is right.
          </p>
        </div>
        <div className="flex  items-center gap-6 ">
          <h2>Today you makes 12 Activity</h2>
          <h2 className="font-medium rounded-md text-[14px] leading-[21px] bg-[#FF5151] py-2 px-4 ">
            See All Activity
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Activity