import Image from "next/image";
import { BiChevronUp } from "react-icons/bi";
import { PiClock } from "react-icons/pi";

const Graph = () => {
  return (
    <div className="mb-8 hidden w-full items-center gap-2 text-sm xl:flex">
      <div className="flex w-full items-center gap-1">
        <Image src="/copilot.webp" width={15} height={15} alt="Copilot" />
        <p className="font-bold">
          Hi Mona, <span className="text-[#312AA8]">68%</span> of goal achieved
          and rest can be achieved by focusing on 20 top leads.
        </p>
      </div>
      <div className="relative flex w-[86%] flex-col gap-1">
        <div className="flex items-center text-[10px]">
          <PiClock />
          <span>1 mont until Q4 ends</span>
        </div>
        <div className="flex h-2 w-full rounded-full bg-white">
          <div className="h-2 w-[17%] rounded-l-full bg-[#a5c5a2]" />
          <div className="h-2 w-[8%] bg-[#89b3f1]" />
          <div className="h-2 w-[4%] bg-[#e3acff]" />
          <div className="h-2 w-[4%] bg-[#f6c990]" />
        </div>
        <div className="flex w-full items-center gap-2">
          <div className="flex w-full items-center gap-2 text-[10px]">
            <div className="h-2 w-2 rounded-full bg-[#a5c5a2]" />
            Won $18m
          </div>
          <div className="flex w-full items-center gap-2 text-[10px]">
            <div className="h-2 w-2 rounded-full bg-[#89b3f1]" />
            Committed $18m
          </div>
          <div className="flex w-full items-center gap-2 text-[10px]">
            <div className="h-2 w-2 rounded-full bg-[#e3acff]" />
            Best case $7m
          </div>
          <div className="flex w-full items-center gap-2 text-[10px]">
            <div className="flex h-2 w-2 rounded-full bg-[#f6c990]" />
            Qualified $3m
          </div>
          <div className="flex w-full items-center gap-2 text-[10px]">
            <div className="flex h-2 w-2 rounded-full bg-[#c8c7c7]" />
            Leads $75m
          </div>
        </div>
        <div className="absolute right-8 top-2 flex justify-between">
          <div className="absolute top-1 mr-2 h-7 w-[2px] bg-black" />
          <span className="ml-2 text-[10px]">
            Target <span className="font-semibold">$45 million</span>
          </span>
          <span className="ml-8 text-[10px]">68% of target achieved</span>
          <BiChevronUp />
        </div>
      </div>
    </div>
  );
};
export default Graph;
