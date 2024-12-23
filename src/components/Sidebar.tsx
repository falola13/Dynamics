"use client";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import Dropdown from "./Dropdown";
import { LuChevronsUpDown } from "react-icons/lu";
import {
  collaterals,
  customers,
  home,
  marketing,
  Performance,
  sales,
  work,
} from "@/lib/data";
import { Fragment, useState } from "react";
import { IconType } from "react-icons";

interface MenuItem {
  icon: IconType;
  title: string;
  href?: string; // Optional href property
}

// Define the structure of a menu list
interface MenuList {
  title: string;
  items: MenuItem[];
}

const MenuLists: MenuList[] = [
  { title: "My Work", items: work },
  { title: "Customers", items: customers },
  { title: "Sales", items: sales },
  { title: "Collateral", items: collaterals },
  { title: "Marketing", items: marketing },
  { title: "Performance", items: Performance },
];

const Sidebar = () => {
  const [close, setClose] = useState(true);
  const [active, setActive] = useState<string | null>("Leads");

  return (
    <div className="relative h-full bg-[#f0f0f0]">
      <div className="hidden h-full lg:block">
        {close && (
          <div className="flex h-full w-[200px] flex-col overflow-hidden border-r-2 border-gray-300 bg-[#ECECEC] py-3 shadow-md">
            <button onClick={() => setClose(!close)} className="px-3">
              <RxHamburgerMenu />
            </button>
            <div className="scrollable-container custom-scrollbar mt-5 flex-1 space-y-3 overflow-y-auto">
              {/* Home */}
              {home.map((item, index) =>
                item.dropdown ? (
                  <Dropdown
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    items={item.dropdown}
                  />
                ) : (
                  <Link
                    key={index}
                    href={item.href || "#"}
                    className="flex gap-4 px-3"
                  >
                    <item.icon />
                    <span className={`text-xs`}>{item.title}</span>
                  </Link>
                ),
              )}
              {/* MenuLists */}
              {MenuLists.map((menu, i) => (
                <Fragment key={i}>
                  <p className="px-3 text-xs font-semibold">{menu.title}</p>
                  {menu.items.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href || "/"}
                      className={`relative flex gap-4 pl-3 pr-3 ${active === item.title ? "w-full bg-[#ffffff] py-2" : ""}`}
                      onClick={() => setActive(item.title)}
                    >
                      <div className="flex items-center gap-1">
                        {active === item.title && (
                          <div className="absolute inset-0 left-0 h-5 w-1 translate-x-1/2 translate-y-1/3 rounded-xl bg-[#3c63b4]" />
                        )}
                        <item.icon />
                      </div>
                      <span className="text-xs">{item.title}</span>
                    </Link>
                  ))}
                </Fragment>
              ))}
            </div>
            {/* Footer */}
            <div className="mt-auto flex items-center justify-between gap-4 border-t-2 pt-3">
              <div className="flex items-center gap-2 px-3">
                <div className="grid h-6 w-6 place-content-center bg-purple-500 text-white">
                  <p className="text-sm">S</p>
                </div>
                <span className="text-xs">Sales</span>
              </div>
              <LuChevronsUpDown size={20} />
            </div>
          </div>
        )}
      </div>
      <button
        onClick={() => setClose(!close)}
        className={`absolute left-0 top-0 h-fit w-fit ${close ? "hidden" : ""}`}
      >
        <RxHamburgerMenu />
      </button>

      {/* Mobile view */}
      <div className="block lg:hidden">
        <button
          onClick={() => setClose(!close)}
          className="p-3 lg:hidden" // Show on mobile only
          aria-label="Toggle Sidebar"
        >
          <RxHamburgerMenu />
        </button>
        <div
          className={`fixed inset-y-0 left-0 z-50 flex flex-col overflow-hidden border-r-2 border-gray-300 bg-white/90 py-3 shadow-md transition-transform duration-300 ${close ? "-translate-x-full" : "translate-x-0"} w-[250px] xl:translate-x-0`}
        >
          <button onClick={() => setClose(!close)} className="px-3">
            <RxHamburgerMenu />
          </button>
          <div className="scrollable-container custom-scrollbar mt-5 flex-1 space-y-3 overflow-y-auto">
            {/* Home */}
            {home.map((item, index) =>
              item.dropdown ? (
                <Dropdown
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  items={item.dropdown}
                />
              ) : (
                <Link
                  key={index}
                  href={item.href || "#"}
                  className="flex gap-4 px-3"
                >
                  <item.icon />
                  <span className={`text-xs`}>{item.title}</span>
                </Link>
              ),
            )}

            {/* MenuLists */}
            {MenuLists.map((menu, i) => (
              <Fragment key={i}>
                <p className="px-3 text-xs font-semibold">{menu.title}</p>
                {menu.items.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href || "/"}
                    className={`relative flex gap-4 pl-3 pr-3 ${active === item.title ? "w-full bg-[#ffffff] py-2" : ""}`}
                    onClick={() => setActive(item.title)}
                  >
                    <div className="flex items-center gap-1">
                      {active === item.title && (
                        <div className="absolute inset-0 left-0 h-5 w-1 translate-x-1/2 translate-y-1/3 rounded-xl bg-[#3c63b4]" />
                      )}
                      <item.icon />
                    </div>

                    <span className="text-xs">{item.title}</span>
                  </Link>
                ))}
              </Fragment>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-auto flex items-center justify-between gap-4 border-t-2 pt-3">
            <div className="flex items-center gap-2 px-3">
              <div className="grid h-6 w-6 place-content-center bg-purple-500 text-white">
                <p className="text-sm">S</p>
              </div>
              <span className="text-xs">Sales</span>
            </div>
            <LuChevronsUpDown size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
