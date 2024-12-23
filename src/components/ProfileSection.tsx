import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";

type ProfileSectionProps = {
  name: string;
  role: string;
  company: string;
  avatar: string;
};

export const ProfileSection = ({
  name,
  role,
  company,
  avatar,
}: ProfileSectionProps) => (
  <div className="mt-3 flex w-full items-center gap-2 rounded p-2 shadow">
    <div className="relative h-7 w-7 rounded-full border">
      <Image
        src={avatar}
        alt=""
        layout="fill"
        objectFit="contain"
        className="rounded-full"
      />
    </div>
    <div className="flex flex-col">
      <span className="text-sm font-semibold">{name}</span>
      <div className="flex items-center gap-1">
        <FaLinkedin size={12} color="blue" />
        <div className="h-4 w-[1px] bg-gray-400" />
        <span className="text-[10px] text-gray-400">
          {role}. {company}
        </span>
      </div>
    </div>
  </div>
);
