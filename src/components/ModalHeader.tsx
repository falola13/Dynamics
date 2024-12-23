import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";

type ModalHeaderProps = {
  onClose: () => void;
  title: string;
};

export const ModalHeader = ({ onClose, title }: ModalHeaderProps) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2 pl-2">
      <Image src="/e-mail.png" alt="" width={20} height={20} />
      <span className="text-sm font-semibold">{title}</span>
    </div>
    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
      <IoCloseOutline size={20} />
    </button>
  </div>
);
