"use client";

import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { FaFileAlt } from "react-icons/fa";
import { FiAlignLeft } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { MdApproval } from "react-icons/md";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import { TfiClose } from "react-icons/tfi";
import { toast } from "react-toastify";

const Page: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState<boolean>(true);
  const isModalOpen = searchParams.get("modal") === "true";
  const [email, setEmail] = useState<string>(""); // State for the input email
  const [emails, setEmails] = useState<string[]>([]); // State for the list of emails
  const [isDisabled, setIsDisabled] = useState(true);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addEmail(email);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleRemoveEmail = (emailToRemove: string) => {
    setEmails((prevEmails) => prevEmails.filter((e) => e !== emailToRemove));
  };

  const handleCloseModal = () => {
    router.replace("/?modal=false");
  };

  const addEmail = (emailToAdd: string) => {
    if (emailToAdd && !emails.includes(emailToAdd)) {
      setEmails((prevEmails) => [...prevEmails, emailToAdd]);
      setEmail(""); // Clear the input after adding
      setIsDisabled(true); // Disable button after adding
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, [isModalOpen]);

  if (!isModalOpen) {
    return null;
  }

  const notify = () => toast("Email authorized!");

  return loading ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="animate-bounce text-white">Loading...</div>
    </div>
  ) : (
    <div className="fixed inset-0 z-50 flex w-screen items-center justify-center bg-black bg-opacity-50">
      <div className="flex w-full max-w-2xl flex-col rounded-lg bg-white p-4">
        <button className="self-end" onClick={handleCloseModal}>
          <IoClose />
        </button>
        <div className="mt-4 flex items-center gap-4">
          <Image src="/copilot.webp" width={15} height={15} alt="Copilot" />
          <p className="font-semibold">Agent Skill</p>
        </div>
        <div className="mt-3 rounded p-3 shadow">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold">
              Check if on-hand inventory will allow all sales order to ship
              without delay
            </p>
            <BiChevronDown />
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
            <p className="">When</p>
            <div className="flex items-center gap-1 rounded bg-[#eaf5ff] p-1 text-[#3a6c96]">
              <MdApproval />
              <span className="">any vendor</span>
            </div>
            <div className="">
              <span>sends an email with changes to</span>
            </div>
            <div className="flex items-center gap-1 rounded bg-[#eaf5ff] p-1 text-[#3a6c96]">
              <FaFileAlt />
              <span>confirmed purchase orders</span>
            </div>
            <p>, check if the resulting</p>
            <div className="flex items-center gap-1 rounded bg-[#eaf5ff] p-1 text-[#3a6c96]">
              <FiAlignLeft />
              <span>on-hand inventory</span>
            </div>
            <p>will allow</p>
            <div className="flex items-center gap-1 rounded bg-[#eaf5ff] p-1 text-[#3a6c96]">
              <FiAlignLeft />
              <span>all sales orders</span>
            </div>
            <p>to</p>
            <div className="flex items-center gap-1 rounded bg-[#eaf5ff] p-1 text-[#3a6c96]">
              <FiAlignLeft />
              <span>ship without delay</span>
            </div>
            <p>. If so,</p>
            <div className="flex items-center gap-1 rounded bg-[#eaf5ff] p-1 text-[#3a6c96]">
              <FiAlignLeft />
              <span>update the purchase order</span>
            </div>
            <p>to reflect the change.</p>
          </div>
        </div>
        <div className="mt-3 flex flex-col">
          <div className="flex gap-2">
            <PiMicrosoftOutlookLogoFill color="blue" />
            <p className="text-sm font-semibold">Enable email access</p>
          </div>
          <p className="my-1 text-xs">
            Allow the agent to access email inboxes to read mail from known
            vendors
          </p>
          <form action="">
            <div className="mt-2 flex w-full items-center gap-3 rounded">
              <div className="flex h-8 w-[80%] items-center gap-2 rounded border p-1">
                {emails.map((emailItem) => (
                  <div
                    key={emailItem}
                    className="flex w-fit items-center gap-2 rounded-full bg-[#f3f0f1] px-1.5 py-[2px] text-xs"
                  >
                    <div className="flex items-center">
                      <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#f0d7dc]">
                        <span className="text-xs font-semibold">
                          {emailItem[0]}
                        </span>
                      </div>
                      <p>{emailItem}</p>
                      <div className="mx-1 h-5 w-[0.5px] bg-gray-400" />
                      <TfiClose
                        size={13}
                        onClick={() => handleRemoveEmail(emailItem)}
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                ))}
                <input
                  type="email"
                  value={email}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Enter email"
                  className="w-full border-none outline-none"
                />
              </div>
              <button
                type="button"
                className="rounded bg-blue-600 px-4 py-2 text-xs text-white"
                onClick={() => {
                  addEmail(email);
                  setIsDisabled(false);
                }}
              >
                Allow access
              </button>
            </div>
          </form>
        </div>
        <div className="mt-12 flex w-full">
          <div className="flex w-full items-center justify-end gap-2">
            <button
              disabled={isDisabled}
              onClick={notify}
              className={`rounded border bg-blue-500 px-3 py-2 text-xs text-white ${isDisabled ? "cursor-not-allowed bg-[#c1c1c1] text-[#9a9a9a]" : "cursor-pointer"}`}
            >
              Activate
            </button>
            <button
              className="rounded border px-3 py-2 text-xs font-semibold"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
