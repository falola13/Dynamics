import Image from "next/image";
import { IconType } from "react-icons";
import { PiStarFourFill } from "react-icons/pi";

type CardProps = {
  image: string;
  CardName: string;
  job: string;
  icon: IconType;
  details: string;
  desc: string;
  footerTxt: string;
  profileIcon: IconType;
  iconColor: string;
};

const Card = ({
  image,
  CardName,
  job,
  icon: Icon,
  details,
  desc,
  footerTxt,
  profileIcon: ProfileIcon,
  iconColor,
}: CardProps) => {
  return (
    <div className="item-start flex flex-col rounded-md border p-3 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="relative h-7 w-7 rounded-full border">
          <Image
            src={`/${image}`}
            alt={CardName}
            layout="fill"
            objectFit="contain"
            className="rounded-full"
          />
          <div className="absolute bottom-[-2px] right-[2px] h-4 w-4 translate-x-1/2 transform rounded-full">
            {/* <div className="h-full w-full rounded-full bg-green-300" /> */}
            <ProfileIcon color={iconColor} className="h-full w-full" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold">{CardName}</p>
          <span className="text-[10px] text-gray-400">{job}</span>
        </div>
      </div>
      <div className="mt-3 rounded-md bg-[#eef4fe] p-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Icon color="black" />
            <span className="text-xs font-semibold">{details}</span>
          </div>
          <PiStarFourFill color="blue" />
        </div>
        <p className="mt-2 text-xs text-gray-400">{desc}</p>
      </div>
      <p className="py-3 text-xs text-gray-400">{footerTxt}</p>
    </div>
  );
};

export default Card;
