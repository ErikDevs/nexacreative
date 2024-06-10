import { MdWorkspacePremium } from "react-icons/md";
import { MdFileCopy } from "react-icons/md";
import { MdPriceCheck } from "react-icons/md";
import { MdFindInPage } from "react-icons/md";
import { MdDesignServices } from "react-icons/md";
import { MdNextPlan } from "react-icons/md";
import {
  BiCurrentLocation,
  BiEnvelope,
  BiPhoneCall,
  BiSolidShip,
  BiTime,
  BiTimer,
} from "react-icons/bi";
import { BiCheckCircle } from "react-icons/bi";

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Services",
    href: "#",
  },

  { name: "Portfolio", href: "/portfolio" },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact" },
];

export const subServices = [
  { name: "Website Design & Development", href: "/webdesign" },
  { name: "Digital Marketing & SEO", href: "/digitalmarketing" },
  { name: "Graphic Design & Branding", href: "/graphicdesign" },
  { name: "WebApp Development", href: "/webapp" },
  { name: "Social Media Management", href: "/socialmedia" },
  { name: "Website Maintenance", href: "/maintenance" },
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

export const marketingDetails = [
  {
    icon: <BiCheckCircle style={{ fontSize: "1.2rem", color: "#FC6736" }} />,
    text: "Strategy development",
  },
  {
    icon: <BiCheckCircle style={{ fontSize: "1.2rem", color: "#FC6736" }} />,
    text: "Multi-channel campaign",
  },
  {
    icon: <BiCheckCircle style={{ fontSize: "1.2rem", color: "#FC6736" }} />,
    text: "Content marketing",
  },
  {
    icon: <BiCheckCircle style={{ fontSize: "1.2rem", color: "#FC6736" }} />,
    text: "SEO and SEM practices",
  },
  {
    icon: <BiCheckCircle style={{ fontSize: "1.2rem", color: "#FC6736" }} />,
    text: "Email marketing",
  },
  {
    icon: <BiCheckCircle style={{ fontSize: "1.2rem", color: "#FC6736" }} />,
    text: "Performance tracking",
  },
  {
    icon: <BiCheckCircle style={{ fontSize: "1.2rem", color: "#FC6736" }} />,
    text: "Conversion optimization",
  },
];
export const socialMediaDetails = [
  {
    icon: <BiCheckCircle style={{ fontSize: "1.2rem", color: "#FC6736" }} />,
    text: "Consistent branding",
  },
  {
    icon: <BiCheckCircle style={{ fontSize: "1.2rem", color: "#FC6736" }} />,
    text: "Engaging content",
  },
  {
    icon: <BiCheckCircle style={{ fontSize: "1.2rem", color: "#FC6736" }} />,
    text: "Social media advertising",
  },
  {
    icon: <BiCheckCircle style={{ fontSize: "1.2rem", color: "#FC6736" }} />,
    text: "Reputation management",
  },
  {
    icon: <BiCheckCircle style={{ fontSize: "1.2rem", color: "#FC6736" }} />,
    text: "Influencer outreach",
  },
  {
    icon: <BiCheckCircle style={{ fontSize: "1.2rem", color: "#FC6736" }} />,
    text: "Social media analytics",
  },
  {
    icon: <BiCheckCircle style={{ fontSize: "1.2rem", color: "#FC6736" }} />,
    text: "Community building",
  },
];
export const graphicDesignDetails = [
  {
    icon: <BiCheckCircle style={{ fontSize: "1.2rem", color: "#FC6736" }} />,
    text: "Tailored designs",
  },
  {
    icon: <BiCheckCircle style={{ fontSize: "1.2rem", color: "#FC6736" }} />,
    text: "Infographics design",
  },
  {
    icon: <BiCheckCircle style={{ fontSize: "1.2rem", color: "#FC6736" }} />,
    text: "Social media graphics",
  },
  {
    icon: <BiCheckCircle style={{ fontSize: "1.2rem", color: "#FC6736" }} />,
    text: "Packaging design",
  },
  {
    icon: <BiCheckCircle style={{ fontSize: "1.2rem", color: "#FC6736" }} />,
    text: "Brand identity design",
  },
  {
    icon: <BiCheckCircle style={{ fontSize: "1.2rem", color: "#FC6736" }} />,
    text: "Data visualization",
  },
  {
    icon: <BiCheckCircle style={{ fontSize: "1.2rem", color: "#FC6736" }} />,
    text: "Presentations design",
  },
];
export const designDetails = [
  {
    icon: <BiCheckCircle style={{ fontSize: "1.2rem", color: "#FC6736" }} />,
    text: "Responsive design",
  },
  {
    icon: <BiCheckCircle style={{ fontSize: "1.2rem", color: "#FC6736" }} />,
    text: "User-centric designs",
  },
  {
    icon: <BiCheckCircle style={{ fontSize: "1.2rem", color: "#FC6736" }} />,
    text: "SEO-friendly design",
  },
  {
    icon: <BiCheckCircle style={{ fontSize: "1.2rem", color: "#FC6736" }} />,
    text: "Integration with CMS",
  },
  {
    icon: <BiCheckCircle style={{ fontSize: "1.2rem", color: "#FC6736" }} />,
    text: "Fast load times",
  },
  {
    icon: <BiCheckCircle style={{ fontSize: "1.2rem", color: "#FC6736" }} />,
    text: "Secure website",
  },
  {
    icon: <BiCheckCircle style={{ fontSize: "1.2rem", color: "#FC6736" }} />,
    text: "Shop functionality",
  },
];

export const categories = [
  { name: "All" },
  { name: "Web Design" },
  { name: "Graphic Design" },
  { name: "Digital Marketing" },
  { name: "Social Media" },
];

export const contactInfo = [
  {
    label: "Phone-Number",
    address: "(254) 797710074",
    icon: <BiPhoneCall style={{ fontSize: "4rem", color: "#FC6736" }} />,
  },
  {
    label: "Email",
    address: "info@nexacreative.com",
    icon: <BiEnvelope style={{ fontSize: "4rem", color: "#FC6736" }} />,
  },
  {
    label: "Operating Time",
    address: "8:00 AM - 5:00 PM Mon - Sat ",
    icon: <BiTimer style={{ fontSize: "4rem", color: "#FC6736" }} />,
  },
  {
    label: "Location",
    address: "Nairobi Kenya",
    icon: <BiCurrentLocation style={{ fontSize: "4rem", color: "#FC6736" }} />,
  },
];
