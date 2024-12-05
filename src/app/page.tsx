import Activity from "@/components/Dashboard/Activity";
import Announcement from "@/components/Dashboard/Announcement";
import BigCard from "@/components/Dashboard/BigCard";
import Schedule from "@/components/Dashboard/Schedule";
import SmallCard from "@/components/Dashboard/SmallCard";

export default function Home() {
  return (
    <div className="pl-[280px] pt-36 pb-6 space-y-4 ">
      {" "}
      <h1 className=" text-2xl font-medium text-[#161E54] ">Dashboard</h1>
      <div className="flex md:flex-row flex-col gap-10 ">
        <div className="flex flex-col gap-6 ">
          <SmallCard />
          <BigCard />
          <Announcement />
        </div>
        <div className="flex flex-col gap-6 ">
          <Activity />
          <Schedule />
        </div>
      </div>
    </div>
  );
}
