// components/IconTable.tsx
import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { FaArrowDownLong } from "react-icons/fa6";

const Table: React.FC = () => {
  const data = [
    {
      id: 1,
      name: "Alice Johnson",
      topic: "Cafe A100 for commercial use",
      status: "New",
      createdOn: "05/12/2023 11:46 PM",
    },
    {
      id: 2,
      name: "Josia Love",
      topic: "Upgrading service plan",
      status: "New",
      createdOn: "02/10/2023 12:00 PM",
    },
    {
      id: 3,
      name: "Michael Brown",
      topic: "Installation of Cafe A200",
      status: "New",
      createdOn: "03/15/2023 09:30 AM",
    },
    {
      id: 4,
      name: "Sarah Davis",
      topic: "Maintenance request for Cafe A100",
      status: "New",
      createdOn: "01/20/2023 02:15 PM",
    },
    {
      id: 5,
      name: "David Wilson",
      topic: "Cafe A300 for residential use",
      status: "New",
      createdOn: "04/25/2023 10:00 AM",
    },
    {
      id: 6,
      name: "Emily Garcia",
      topic: "Cafe A400 installation",
      status: "New",
      createdOn: "06/01/2023 03:45 PM",
    },
    {
      id: 7,
      name: "James Martinez",
      topic: "Cafe A500 upgrade",
      status: "New",
      createdOn: "07/10/2023 01:30 PM",
    },
    {
      id: 8,
      name: "Linda Rodriguez",
      topic: "Cafe A600 troubleshooting",
      status: "New",
      createdOn: "08/05/2023 11:00 AM",
    },
    {
      id: 9,
      name: "Robert Lee",
      topic: "Cafe A700 for commercial use",
      status: "New",
      createdOn: "09/12/2023 04:20 PM",
    },
    {
      id: 10,
      name: "Patricia Walker",
      topic: "Cafe A800 maintenance",
      status: "New",
      createdOn: "10/01/2023 12:00 PM",
    },
    {
      id: 11,
      name: "Daniel Hall",
      topic: "Cafe A900 installation",
      status: "New",
      createdOn: "11/15/2023 08:30 AM",
    },
    {
      id: 12,
      name: "Jessica Young",
      topic: "Cafe A1000 upgrade",
      status: "New",
      createdOn: "12/20/2023 05:00 PM",
    },
    {
      id: 13,
      name: "Christopher King",
      topic: "Cafe A1100 troubleshooting",
      status: "New",
      createdOn: "01/10/2023 09:00 AM",
    },
    {
      id: 14,
      name: "Nancy Wright",
      topic: "Cafe A1200 for residential use",
      status: "New",
      createdOn: "02/14/2023 10:30 AM",
    },
    {
      id: 15,
      name: "Matthew Scott",
      topic: "Cafe A1300 installation",
      status: "New",
      createdOn: "03/22/2023 02:00 PM",
    },
    {
      id: 16,
      name: "Laura Green",
      topic: "Cafe A1400 maintenance",
      status: "New",
      createdOn: "04/30/2023 11:15 AM",
    },
    {
      id: 17,
      name: "Kevin Adams",
      topic: "Cafe A1500 upgrade",
      status: "New",
      createdOn: "05/18/2023 03:30 PM",
    },
    {
      id: 18,
      name: "Sophia Nelson",
      topic: "Cafe A1600 troubleshooting",
      status: "New",
      createdOn: "06/25/2023 01:45 PM",
    },
    {
      id: 19,
      name: "Brian Carter",
      topic: "Cafe A1700 for commercial use",
      status: "New",
      createdOn: "07/30/2023 12:00 PM",
    },
  ];

  return (
    <div className="scrollable-container overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="text-xs">
            <th className="pl-3 text-left">
              <div className="flex items-center gap-2 font-semibold">
                Name
                <BiChevronDown size={20} className="cursor-pointer" />
              </div>
            </th>
            <th className="p-2 text-left">
              <div className="flex items-center gap-2 font-semibold">
                Topic
                <BiChevronDown size={20} className="cursor-pointer" />
              </div>
            </th>
            <th className="p-2 text-left">
              <div className="flex items-center gap-2 font-semibold">
                Status Reason
                <BiChevronDown
                  size={20}
                  className="cursor-pointer font-light"
                />
              </div>
            </th>
            <th className="p-2 text-left">
              <div className="flex items-center gap-2 font-semibold">
                Created On
                <BiChevronDown size={20} className="cursor-pointer" />
                <FaArrowDownLong className="cursor-pointer" />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="text-xs hover:bg-gray-100">
              {/* <td className="border border-gray-300 p-2 text-center">
                <input type="checkbox" className="text-blue-600" />
              </td> */}
              <td className="border-y border-gray-300 p-2 text-blue-600">
                <input type="checkbox" className="mr-2 inline text-blue-600" />
                {item.name}
              </td>
              <td className="border-y border-gray-300 p-2 text-gray-500">
                {item.topic}
              </td>
              <td className="border-y border-gray-300 p-2 text-gray-500">
                {item.status}
              </td>
              <td className="border-y border-gray-300 p-2 text-gray-500">
                {item.createdOn}
              </td>
              {/* <td className="border border-gray-300 p-2">
                <FaEdit className="cursor-pointer text-blue-600" />
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
