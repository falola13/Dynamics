import Image from "next/image";
import { PiStarFourFill } from "react-icons/pi";
import { MdOutlineMailLock } from "react-icons/md";

interface CardProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  iconColor: string;
}

const Cards = ({
  image,
  title,
  subtitle,
  description,
  iconColor,
}: CardProps) => {
  return (
    <div className="flex flex-col gap-2 rounded-md p-2 shadow">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src={image}
            alt=""
            width={20}
            height={20}
            className="rounded-full"
          />
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold">{title}</span>
            <span className="text-[10px] text-gray-400">{subtitle}</span>
          </div>
        </div>
        <PiStarFourFill color={iconColor} />
      </div>
      <div className="flex items-center gap-2">
        <MdOutlineMailLock size={15} />
        <span className="text-xs">{description}</span>
      </div>
    </div>
  );
};

export default Cards;
