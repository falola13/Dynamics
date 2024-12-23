// import { useState } from "react";
import { ProfileSection } from "./ProfileSection";
import { ModalHeader } from "./ModalHeader";
import { ActionBar } from "./ActionBar";

type ModalProps = {
  onClose: () => void;
};

const Modals = ({ onClose }: ModalProps) => {
  // const [active, setActive] = useState("research");

  return (
    <div className="fixed inset-0 z-50 flex w-screen items-center justify-center bg-black bg-opacity-50">
      <div className="gradient-border scrollable-container h-full w-full max-w-4xl overflow-auto md:h-auto">
        <div className="scrollable-container relative overflow-auto rounded-[18px] bg-[#ffffff] p-4">
          <ModalHeader onClose={onClose} title="Engage with Reyes" />

          <ProfileSection
            name="Jane Reyes"
            role="COO"
            company="Northwind Traders"
            avatar="/avatar.png"
          />

          <ActionBar
            message="Jane may be interested in upgrading espresso machines for her in-store coffee shops."
            onEdit={() => console.log("Edit clicked")}
            onApprove={() => console.log("Approve clicked")}
          />

          {/* Add other components here */}
        </div>
      </div>
    </div>
  );
};

export default Modals;
