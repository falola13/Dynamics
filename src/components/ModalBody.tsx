import Image from "next/image";
import { BiChevronDown } from "react-icons/bi";
import { ImPieChart } from "react-icons/im";
import { PiStarFourFill } from "react-icons/pi";
import { SlDislike, SlLike } from "react-icons/sl";
import { VscWorkspaceTrusted } from "react-icons/vsc";

type ModalBodyProps = {
  firstName: string;
  company: string;
  fullName: string;
  role: string;
};

const ModalBody = ({ firstName, company, fullName, role }: ModalBodyProps) => {
  return (
    <div className="mt-3 rounded bg-gradient-to-b from-white via-[#e4f2f8] to-[#dee3e1] pb-0 pr-3">
      <div className="z-1 rounded-lg bg-white p-3 shadow">
        <div className="relative flex flex-col gap-4 rounded-md bg-gradient-to-r from-[#eaf1ff] via-[#edeeff] to-[#ebebff] p-3">
          <p className="text-sm font-semibold text-purple-400">
            Why I picked this lead
          </p>
          {/* lists */}
          <div className="ml-3">
            <ul className="list-disc space-y-2 pl-4">
              <li className="text-xs">
                {firstName} is a key decision maker and was browsing expresso
                machines on First coffee website.
              </li>
              <li className="text-xs">
                Multiple people at her company has reported &apos;slowness&apos;
                during service requests
              </li>
              <li className="text-xs">
                {company} currently see $200M in revenue from their in-store
                coffee shops.
              </li>
            </ul>
          </div>
          {/* CArds */}
          <div className="mb-2 mt-3 flex w-full flex-wrap gap-2">
            <div className="flex w-36 items-center gap-2 rounded-lg p-2 shadow">
              <Image src="/rotating.webp" alt="" width={30} height={30} />
              <div className="flex flex-col">
                <span className="text-[10px] font-semibold">
                  Decision Maker
                </span>
                <span className="text-[10px] font-semibold text-blue-300">
                  Yes
                </span>
              </div>
            </div>
            <div className="flex w-40 items-center gap-2 rounded-lg p-2 shadow">
              <Image src="/award.webp" alt="" width={30} height={30} />
              <div className="flex flex-col">
                <span className="text-[10px] font-semibold">
                  Potential Deal Value
                </span>
                <span className="text-[10px] font-semibold text-blue-300">
                  $1M
                </span>
              </div>
            </div>
            <div className="flex w-40 items-center gap-2 rounded-lg p-2 shadow">
              <Image src="/camera.webp" alt="" width={30} height={30} />
              <div className="flex flex-col">
                <span className="text-[10px] font-semibold">Intent</span>
                <span className="text-[10px] font-semibold text-blue-300">
                  High
                </span>
              </div>
            </div>
          </div>
          <PiStarFourFill
            size={20}
            color="blue"
            className="z-1 absolute right-0 top-0 rounded-bl-lg bg-white p-1"
          />
        </div>
        <div className="mt-3 flex flex-col justify-between lg:flex-row">
          <div className="flex items-center gap-2">
            <div className="shadown-inner rounded border p-1">
              <VscWorkspaceTrusted size={10} />
            </div>
            <div className="flex items-center gap-1 rounded border p-1 shadow-inner">
              <span className="text-[10px] text-gray-400">1</span>
              <div className="h-3 w-[1px] bg-gray-400" />
              <div className="flex items-center gap-2 text-[10px]">
                <ImPieChart color="blue" size={10} />
                <span className="text-[10px] text-gray-400">D3565 Sales</span>
              </div>
            </div>
            <div className="flex items-center gap-1 rounded border p-1 shadow-inner">
              <span className="text-[10px] text-gray-400">+2</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-lg border p-1 px-2 text-[10px] text-gray-400 shadow-inner">
              AI generated content may be incorrect
            </span>
            <button
              onClick={(e) => {
                e.currentTarget.classList.toggle("text-blue-400");
              }}
              className="hover:text-gray-600"
            >
              <SlLike size={10} />
            </button>
            <button
              onClick={(e) => {
                e.currentTarget.classList.toggle("text-blue-400");
              }}
              className="hover:text-gray-600"
            >
              <SlDislike size={10} />
            </button>
          </div>
        </div>
      </div>
      {/* sec */}
      <div className="mt-2 flex flex-col rounded-lg bg-white p-3 shadow">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold">About {firstName}</p>
          <BiChevronDown size={20} />
        </div>
        <span className="text-xs">
          {fullName}, the {role} of {company}, is an experienced executive with
          over 15 years in retail operations and a proven track record of
          implementing innovative solutions across multiple store locations.
        </span>
      </div>
    </div>
  );
};
export default ModalBody;
