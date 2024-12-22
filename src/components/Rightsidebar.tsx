import { CiChat1 } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { GoCopilot } from "react-icons/go";
import { GrChatOption } from "react-icons/gr";

const Rightsidebar = () => {
  return (
    <div className="hidden h-screen flex-col gap-4 bg-[#f0f0f0] p-3 md:flex">
      <GoCopilot color="gray" />
      <GrChatOption color="gray" />
      <FiPhone color="gray" />
      <CiChat1 color="gray" />
    </div>
  );
};
export default Rightsidebar;
