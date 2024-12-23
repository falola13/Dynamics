import { AiOutlineSend } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { PiStarFourFill } from "react-icons/pi";

type ActionBarProps = {
  message: string;
  onEdit: () => void;
  onApprove: () => void;
};

export const ActionBar = ({ message, onEdit, onApprove }: ActionBarProps) => (
  <div className="mx-auto mt-3 w-[97%] rounded-md bg-gradient-to-r from-[#eaf1ff] via-[#edeeff] to-[#ebebff] p-2">
    <div className="flex w-full flex-col gap-2 md:flex-row md:justify-between">
      <div className="flex items-center gap-2">
        <PiStarFourFill color="blue" />
        <p className="bg-gradient-to-r from-[#7988b4] via-[#9497c0] to-[#8069a8] bg-clip-text text-xs text-transparent">
          {message}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={onEdit}
          className="flex items-center gap-1 rounded border bg-white p-1 text-xs"
        >
          <BiPencil />
          Edit
        </button>
        <button
          onClick={onApprove}
          className="flex items-center gap-2 rounded bg-gradient-to-r from-[#3457cf] via-[#3457cf] to-[#7f2fe5] p-1 px-2 text-xs text-white"
        >
          <AiOutlineSend />
          Approve and send
        </button>
      </div>
    </div>
  </div>
);
