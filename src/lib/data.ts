import { PiHouseLight, PiClock } from "react-icons/pi";
import { BsPinAngle } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";

export const home = [
  {
    icon: PiHouseLight,
    title: "Home",
    href: "/",
  },
  {
    icon: GiSkills,
    title: "Agent Skill",
    href: "/agent-skill?modal=true",
  },
  {
    icon: PiClock,
    title: "Recent",
    dropdown: ["Item 1", "Item 2", "Item 3"],
  },
  {
    icon: BsPinAngle,
    title: "Pinned",
    dropdown: ["Item A", "Item B", "Item C"],
  },
];

export const work = [
  {
    icon: PiHouseLight,
    title: "Sales accelerator",
  },
  {
    icon: PiClock,
    title: "Dashboard",
  },
  {
    icon: BsPinAngle,
    title: "Activities",
  },
];

export const customers = [
  {
    icon: PiHouseLight,
    title: "Accounts",
  },
  {
    icon: PiClock,
    title: "Contacts",
  },
];

export const sales = [
  {
    icon: PiHouseLight,
    title: "Leads",
  },
  {
    icon: PiClock,
    title: "Opportunities",
  },
  {
    icon: BsPinAngle,
    title: "Competitors",
  },
];

export const collaterals = [
  {
    icon: PiHouseLight,
    title: "Quotes",
  },
  {
    icon: PiClock,
    title: "Orders",
  },
  {
    icon: BsPinAngle,
    title: "Invoices",
  },
  {
    icon: BsPinAngle,
    title: "Products",
  },
  {
    icon: BsPinAngle,
    title: "Sales Literature",
  },
];

export const marketing = [
  {
    icon: BsPinAngle,
    title: "Marketing Lists",
  },
  {
    icon: BsPinAngle,
    title: "Quick Campaigns",
  },
];

export const Performance = [
  {
    icon: BsPinAngle,
    title: "Performace",
  },
  {
    icon: BsPinAngle,
    title: "Quick Campaigns",
  },
];
