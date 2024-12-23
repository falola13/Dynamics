"use client";

import Card from "./Card";
import { MdOutlineAttachEmail } from "react-icons/md";
import { IoCalendarOutline, IoLogoCodepen } from "react-icons/io5";
import Cards from "./Cards";
import Modal from "./Modal";
import { useState } from "react";
import Graph from "./Graph";
import { BiLogoKubernetes } from "react-icons/bi";

type ModalDetails = {
  title: string;
  Profilename: string;
  role: string;
  company: string;
  avatar: string;
  message: string;
} | null;

const MainContent = () => {
  const [openModal, setOpenModal] = useState<ModalDetails>(null);
  const handleClick = (modalDetails: ModalDetails) => {
    setOpenModal(modalDetails);
  };
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

      ModalDetails: {
        title: "Engage with Reyes",
        Profilename: "Jane Reyes",
        role: "COO",
        company: "Northwind Traders",
        avatar: "/avatar.png",
        message:
          "Jane may be interested in upgrading espresso machines for her in-store coffee shops.",
      },
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

      ModalDetails: {
        title: "Prepare for Meeting",
        Profilename: "Allan Munger",
        role: "Head of Real Estate Development",
        company: "Contoso Coffee",
        avatar: "/avatar.png",
        message:
          "Prepare for high-buying intent meeting Copilot scheduled for 2pm regarding upgrading service contract.",
      },
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
    <>
      <div className="gradient-border mb-3 shadow-xl">
        <div className="flex flex-col rounded-[16px] border bg-[#efefef] p-3">
          <Graph />
          <div className="flex w-full flex-col gap-2 lg:flex-row">
            <div className="w-full border-r pr-4 lg:w-2/3">
              <p className="mb-4 text-xs text-gray-600">
                Copilot has pinpointed 20 key leads that show strong purchase
                intent and are actively engaging. These leads need your focus.
              </p>
              {/* Cards */}
              <div className="flex flex-1 flex-wrap gap-3 lg:flex-nowrap">
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
                    onClick={() => handleClick(item.ModalDetails)}
                  />
                ))}
              </div>
            </div>
            <div className="w-full pl-4 lg:w-1/3">
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

      {openModal && (
        <Modal
          onClose={() => setOpenModal(null)}
          Profilename={openModal.Profilename}
          title={openModal.title}
          role={openModal.role}
          avatar={openModal.avatar}
          company={openModal.company}
          message={openModal.message}
        />
      )}
    </>
  );
};
export default MainContent;
