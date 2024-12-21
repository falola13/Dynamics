import Image from "next/image";
import { BiChevronUp, BiLogoKubernetes } from "react-icons/bi";
import { PiClock } from "react-icons/pi";
import Card from "./Card";
import { MdOutlineAttachEmail } from "react-icons/md";
import { IoCalendarOutline, IoLogoCodepen } from "react-icons/io5";
import Cards from "./Cards";

const MainContent = () => {
  const CardAr = [
    {
      image: "avatar.png",
      cardName: "Jane Reyes",
      job: "COO • Northwind Traders",
      desc: "Jane may be interested in upgrading espresso machines for her in-store coffee shops.",
      details: "Engage with Jane Reyes",
      footerTxt: "Expand business • High buying intent",
      icon: MdOutlineAttachEmail,
      profileIcon: IoLogoCodepen,
      iconColor: "#c8654c",
    },
    {
      image: "avatar.png",
      cardName: "Allan Munger",
      job: "Head of Real Estate Developemnt • Contoso Coffee",
      desc: "Prepare fot high-buying intent meeeting Copilot scheduled for 2pm regarding upgrading service contract.",
      details: "Prepare for meeting with Allan",
      footerTxt: "Upcoming meeting • Due today",
      icon: IoCalendarOutline,
      profileIcon: BiLogoKubernetes,
      iconColor: "blue",
    },
  ];

  const cards = [
    {
      image: "/avatar.png",
      title: "Cafe A100 for Woodland Bank",
      subtitle: "Woodland Bank • $280,000 • 8 days to close",
      description: "Review draft and reply to Chris Naido",
      iconColor: "blue",
    },
    {
      image: "/avatar.png",
      title: "Partnership opportunity for Fabrikam",
      subtitle: "Fabrikam • $5,000,000 • 12 days to close",
      description: "Prepare me for Fabrikam's key stakeholder meeting",
      iconColor: "blue",
    },
  ];

  return (
    <div className="gradient-border shadow-xl">
      <div className="flex flex-col rounded-[16px] border bg-[#efefef] p-3">
        <div className="mb-8 flex w-full items-center gap-2 text-sm">
          <div className="flex w-full items-center gap-1">
            <Image src="/copilot.webp" width={15} height={15} alt="Copilot" />
            <p className="font-bold">
              Hi Mona, <span className="text-[#312AA8]">68%</span> of goal
              achieved and rest can be achieved by focusing on 20 top leads.
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
        <div className="flex w-full gap-2">
          <div className="w-2/3 border-r pr-4">
            <p className="mb-4 text-xs text-gray-600">
              Copilot has pinpointed 20 key leads that show strong purchase
              intent and are actively engaging. These leads need your focus.
            </p>
            {/* Cards */}
            <div className="flex flex-1 gap-3">
              {CardAr.map((item, index) => (
                <Card
                  key={index}
                  image={item.image}
                  CardName={item.cardName}
                  job={item.job}
                  icon={item.icon}
                  profileIcon={item.profileIcon}
                  details={item.details}
                  desc={item.desc}
                  footerTxt={item.footerTxt}
                  iconColor={item.iconColor}
                />
              ))}
            </div>
          </div>
          <div className="w-1/3 pl-4">
            <p className="text-xs text-gray-400">Other Key Activities</p>
            <div className="flex flex-col gap-4">
              {cards.map((card, index) => (
                <Cards
                  key={index}
                  image={card.image}
                  title={card.title}
                  subtitle={card.subtitle}
                  description={card.description}
                  iconColor={card.iconColor}
                />
              ))}
            </div>
            <button className="mt-5 text-xs font-semibold text-blue-600">
              Show all key activities
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainContent;
