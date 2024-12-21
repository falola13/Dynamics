import Image from "next/image";
import { BiPlus } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { FaChalkboardTeacher } from "react-icons/fa";
import { LiaLightbulb } from "react-icons/lia";
import { RiQuestionMark } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";

const icons = [
  {
    icon: <LiaLightbulb />,
  },
  {
    icon: <BiPlus />,
  },
  {
    icon: <CiSettings />,
  },
  {
    icon: <RiQuestionMark />,
  },
  {
    icon: <FaChalkboardTeacher />,
  },
];

const Header = () => (
  <div className="flex items-center justify-between bg-[#00112D] p-3 text-[#A4b2cb]">
    <div className="flex items-center gap-4">
      <TbGridDots />
      <h1 className="text-sm font-semibold">Dynamics 365</h1>
      <div className="hidden h-5 w-0.5 bg-gray-400 lg:block" />
      <span className="hidden text-sm lg:block">Sales hub</span>
    </div>
    <div className="flex items-center gap-4">
      {icons.map((item, index) => {
        return (
          <button className="" key={index}>
            {item.icon}
          </button>
        );
      })}
      <div className="relative h-7 w-7 rounded-full border">
        <Image
          src="/avatar.png"
          alt="Profile"
          layout="fill"
          objectFit="contain"
          className="rounded-full"
        />
        <div className="absolute bottom-0 right-0 h-3 w-3 translate-x-1/2 transform rounded-full border-[2.5px] bg-transparent">
          <div className="h-full w-full rounded-full bg-green-300" />
        </div>
      </div>
    </div>
  </div>
);
export default Header;
