import { useState } from "react";
import { SlDislike, SlLike } from "react-icons/sl";
import { ProfileSection } from "./ProfileSection";
import { ActionBar } from "./ActionBar";
import { ModalHeader } from "./ModalHeader";
import ModalBody from "./ModalBody";

type ModalProps = {
  onClose: () => void;
  Profilename: string;
  role: string;
  title: string;
  avatar: string;
  company: string;
  message: string;
  firstName?: string;
};

const Modal = ({
  onClose,
  Profilename,
  role,
  title,
  avatar,
  company,
  message,
}: ModalProps) => {
  const [active, setActive] = useState("research");
  // if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex w-screen items-center justify-center bg-black bg-opacity-50">
      <div className="gradient-border scrollable-container h-full w-full max-w-4xl overflow-auto md:h-auto">
        <div className="scrollable-container relative overflow-auto rounded-[18px] bg-[#ffffff] p-4">
          <div className="flex flex-col">
            <ModalHeader onClose={onClose} title={title} />
            <ProfileSection
              name={Profilename}
              role={role}
              company={company}
              avatar={avatar}
            />

            {/* gradient */}
            <ActionBar
              message={message}
              onEdit={() => console.log("Edit clicked")}
              onApprove={() => console.log("Approve clicked")}
            />
            {/*  */}

            {/* Tab */}
            <div className="mt-3 flex w-full items-end gap-4 rounded px-2 pt-2 text-sm shadow">
              <button
                onClick={() => setActive("engage")}
                className={`${active === "engage" ? "border-b-2 border-blue-400" : ""}`}
              >
                Engage
              </button>
              <button
                onClick={() => setActive("research")}
                className={`${active === "research" ? "border-b-2 border-blue-400" : ""}`}
              >
                Research
              </button>
            </div>

            {active === "research" && (
              <>
                <ModalBody
                  firstName={Profilename.split(" ")[0]}
                  company={company}
                  fullName={Profilename}
                  role={role}
                />
                <div className="mt-3 flex w-full items-center justify-between">
                  <div className="flex items-center gap-4">
                    <p className="text-xs">Showing 1 of 9</p>
                    <div className="h-3 w-[1px] bg-gray-400" />
                    <span className="text-xs text-blue-400">Show all</span>
                  </div>
                  <div className="flex items-center gap-4">
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
              </>
            )}
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
