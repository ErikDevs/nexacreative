import { MdWorkspacePremium } from "react-icons/md";
import { MdFileCopy } from "react-icons/md";
import { MdPriceCheck } from "react-icons/md";
import { MdFindInPage } from "react-icons/md";
import { MdDesignServices } from "react-icons/md";
import { MdNextPlan } from "react-icons/md";
import { BiSolidShip } from "react-icons/bi";

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Services",
    href: "#",
  },

  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export const subServices = [
  { name: "Web Design", href: "/webdesign" },
  { name: "Digital Marekting", href: "/digitalmarketing" },
  { name: "Graphic Design", href: "/graphicdesign" },
  { name: "WebApp Development", href: "/webapp" },
  { name: "Social Media Management", href: "/socialmedia" },
  { name: "Web Maintenance", href: "/maintenance" },
  { name: "Work Process", href: "/work_process" },
];

export const work = [
  {
    name: "We Create Experiences",
    desc: "We create experiences that are attractive, simple to use, and drive results for your company. We are not your typical web development agency. Sure, we’re strong on corporate branding and web design, but we’re really focused on making things work for your audience ... and your business",
    icon: <MdWorkspacePremium style={{ fontSize: "6em" }} />,
  },
  {
    name: "We Ask, Listen and Understand",
    desc: "We begin each web development project by gaining a solid understanding of who you are, what you do and why you do it. This helps us create strategic web design solutions that communicate the right messages and express your unique brand identity.",
    icon: <MdFileCopy style={{ fontSize: "6em" }} />,
  },
  {
    name: "We Provide Competitive Pricing",
    desc: "We offer web design, web development, corporate branding, online marketing, web hosting and web application development at fair market pricing with a quicker turnaround than most other web design companies. we're great at what we do, and our efficiency allows us to price our work competitively.",
    icon: <MdPriceCheck style={{ fontSize: "6em" }} />,
  },
];

export const work_process = [
  {
    name: "1: Discover",
    icon: <MdFindInPage style={{ fontSize: "6rem", color: "#FC6736" }} />,
    desc: "We focus our initial website development strategy on gathering information about you and your organization.",
  },
  {
    name: "2: Define",
    icon: <MdNextPlan style={{ fontSize: "6rem", color: "#FC6736" }} />,
    desc: "Here we define goals you desire to accomplish, and your plan for positioning yourself among the competition.",
  },
  {
    name: "3. Design",
    icon: <MdDesignServices style={{ fontSize: "6rem", color: "#FC6736" }} />,
    desc: "Our team sit down and work on the design & development work, we make sure the design reflects clients need",
  },
  {
    name: "4. Launch",
    icon: <BiSolidShip style={{ fontSize: "6rem", color: "#FC6736" }} />,
    desc: "This stage we present the website to the client, offer basic operation training and then we go live",
  },
];
