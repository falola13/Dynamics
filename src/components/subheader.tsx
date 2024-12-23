"use client";
import { AiOutlinePieChart } from "react-icons/ai";
import { BiChevronDown, BiPlus, BiRefresh, BiTrash } from "react-icons/bi";
import { CiCircleList } from "react-icons/ci";
import { FaArrowUpRightFromSquare, FaArrowUpShortWide } from "react-icons/fa6";
import {
  PiDotsThreeVerticalBold,
  PiMicrosoftTeamsLogoLight,
} from "react-icons/pi";
import { RiBarChartBoxLine } from "react-icons/ri";
import { TfiLayoutColumn4 } from "react-icons/tfi";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import DropdownCustom from "./dropdownCustom";
import CustomDrop from "./CustonDrop";

const headerButton = [
  {
    icon: <RiBarChartBoxLine />,
    title: "Show chart",
  },
  {
    icon: <CiCircleList color="blue" />,
    title: "Focused View",
  },
  {
    icon: <BiPlus color="green" />,
    title: "New",
  },
  {
    icon: <BiRefresh />,
    title: "Refresh",
  },
  {
    icon: <PiMicrosoftTeamsLogoLight color="purple" />,
    title: "Collaborate",
  },
];

const boxedButton = [
  {
    icon: <AiOutlinePieChart />,
    title: "Smart data",
  },
  {
    icon: <FaArrowUpShortWide />,
    title: "Edit filter",
  },
  {
    icon: <TfiLayoutColumn4 />,
    title: "Edit columns",
  },
];

const SubHeader = () => {
  return (
    <div className="mb-4 flex items-center justify-between rounded-sm bg-[#ffffff] p-2 shadow">
      <div className="">
        {/* <Dropdown title="My Open leads" items={dropdown} /> */}
        <DropdownCustom />
      </div>
      <div className="flex items-center gap-2">
        <div className="hidden items-center gap-3 xl:flex">
          {headerButton.map((item, i) => (
            <button
              key={i}
              className="hidden items-center gap-1 text-xs md:flex"
            >
              {item.icon}
              {item.title}
            </button>
          ))}

          <button className="hidden items-center gap-1 text-xs md:flex">
            <BiTrash />
            Delete
            <div className="h-4 w-[1px] bg-gray-300" />
            <BiChevronDown />
          </button>
          <button className="hidden md:block">
            <PiDotsThreeVerticalBold />
          </button>
          {boxedButton.map((item, i) => (
            <button key={i} className="hidden md:flex">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="hidden items-center gap-2 rounded-sm border px-2 py-2 text-xs md:flex">
                      {item.icon}
                      {item.title}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>{item.title}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </button>
          ))}
        </div>
        <button className="flex items-center gap-1 rounded-sm bg-blue-500 px-2 py-1">
          <FaArrowUpRightFromSquare size={15} color="white" />
          <div className="ml-1 h-4 w-[1px] space-x-1 bg-gray-300" />
          <CustomDrop />
        </button>
      </div>
    </div>
  );
};
export default SubHeader;
