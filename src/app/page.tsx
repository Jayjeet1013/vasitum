import Activity from "@/components/Dashboard/Activity";
import Announcement from "@/components/Dashboard/Announcement";
import BigCard from "@/components/Dashboard/BigCard";
import Schedule from "@/components/Dashboard/Schedule";
import SmallCard from "@/components/Dashboard/SmallCard";

export default function Home() {
  return (
    <div className="sm:pl-[20%] pt-24 sm:pt-28  pl-4 pr-4 pb-6 space-y-4 ">
      {" "}
      <h1 className=" text-2xl font-medium text-[#161E54] ">Dashboard</h1>
      <div className="flex xl:flex-row flex-col gap-6 ">
        <div className="flex flex-col gap-4 ">
          <SmallCard />
          <BigCard />
          <Announcement />
        </div>
        <div className="flex flex-col xl:flex-col lg:flex-row gap-10 ">
          <Activity />
          <Schedule />
        </div>
      </div>
    </div>
  );
}
