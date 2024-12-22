import Image from "next/image";
import Table from "./Table";

const TableSection = () => {
  return (
    <div className="mb-5 flex h-full flex-col gap-4 rounded-md border shadow-md">
      <div className="gradient-borderr m-3 w-[20rem]">
        <div className="flex w-full items-center justify-between gap-8 rounded-[4px] bg-[#efefef] px-1">
          <input
            type="text"
            placeholder="Sort, filter and search with Copilot"
            className="w-full bg-transparent placeholder:text-xs focus:outline-none"
          />
          <Image src="/copilot.webp" alt="copilot" width={15} height={15} />
        </div>
      </div>

      {/* Table */}
      <Table />
    </div>
  );
};
export default TableSection;
