"use client";
import React, { useState } from "react";
import Link from "next/link";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { IconType } from "react-icons";

interface DropdownProps {
  icon?: IconType;
  title: string;
  items: string[];
}

const Dropdown = ({ icon, title, items }: DropdownProps) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Link
        href="#"
        className="flex w-full items-center justify-between gap-4"
        onClick={() => {
          setShowDropdown(!showDropdown);
          setIsOpen(!isOpen);
        }}
      >
        <div className="flex items-center gap-4 px-3">
          {icon && React.createElement(icon)}
          <span className="text-xs">{title}</span>
        </div>
        {isOpen ? (
          <BiChevronUp size={20} className="text-gray-500" />
        ) : (
          <BiChevronDown size={20} className="text-gray-500" />
        )}
      </Link>
      {showDropdown && (
        <div className="ml-8 space-y-1">
          {items.map((item, index) => (
            <Link key={index} href="#" className="block text-xs text-gray-700">
              {item}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
