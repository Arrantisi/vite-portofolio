import Image2 from "../assets/testimonial2.png"
import Image3 from "../assets/testimonial3.png"
import Image1 from "../assets/testimonial1.png"

// ========== images
import { BiSupport } from "react-icons/bi";
import { CiHome } from "react-icons/ci";
import { FaAward, FaBootstrap, FaBriefcase, FaGitAlt, FaGithub, FaHtml5, FaInstagram, FaJava, FaNodeJs, FaPhp, FaPython, FaReact, FaRegImage } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { IoIosCode, IoIosContact, IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { IoDocumentTextOutline, IoLogoFirebase } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { MdOutlineDashboard, MdOutlineDesignServices, MdOutlineHomeRepairService } from "react-icons/md";

export const NavMenu = [
    { href: "#home", icon: <CiHome />, title: "home" },
    { href: "#about", icon: <LuUser2 />, title: "about" },
    { href: "#skills", icon: <IoDocumentTextOutline />, title: "skills" },
    { href: "#services", icon: <MdOutlineHomeRepairService />, title: "services" },
    { href: "#portofolio", icon: <FaRegImage />, title: "portofolio" },
    { href: "#contact", icon: <IoIosContact />, title: "contact" }
]

export const homeMenu = [
    { href: "https://www.instagram.com/ahmadyasinarr/", icon: <FaInstagram /> },
    { href: "https://x.com/ArranYasin", icon: <FaXTwitter /> },
    { href: "https://github.com/Arrantisi", icon: <FaGithub /> }
]

export const infoMenu = [
    { title: "Experience", subtitle: "8 Years Working", icon: <FaAward /> },
    { title: "Completed", subtitle: "48 + Projects", icon: <FaBriefcase /> },
    { title: "Support", subtitle: "Online 24/7", icon: <BiSupport /> }
]

export const frontendMenu = [
    {
        content: [
            { icon: <FaHtml5 />, name: "HTML", level: "Basic" },
            { icon: <IoLogoCss3 />, name: "CSS", level: "advance" },
            { icon: <IoLogoJavascript />, name: "JavaScript", level: "Intermediate" },
        ]
    },
    {
        content: [
            { icon: <FaBootstrap />, name: "Bootstrap", level: "Intermediate" },
            { icon: <FaGitAlt />, name: "Git", level: "advance" },
            { icon: <FaReact />, name: "React", level: "Intermediate" },
        ]
    }
]

export const backendMenu = [
    {
        content: [
            { icon: <FaPhp />, name: "PHP", level: "BaIntermediatesic" },
            { icon: <FaNodeJs />, name: "Node Js", level: "Basic" },
            { icon: <FaPython />, name: "Python", level: "Intermediate" }
        ]
    }, {
        content: [
            { icon: <GrMysql />, name: "MySQL", level: "Intermediate" },
            { icon: <IoLogoFirebase />, name: "Firebase", level: "Intermediate" },
            { icon: <FaJava />, name: "java", level: "Intermediate" }
        ]
    }
]

export const serviceMenu = [
    {
        index: 1,
        icon: <MdOutlineDashboard />,
        title: ["Product", "Designer"],
        modal: {
            title: "Product Designer",
            description: 'Service with more than 3 years of experience.Providing quality work to clients and companies.',
            services: [
                { info: 'I develop the user interface.' },
                { info: 'Web page development.' },
                { info: 'I create ux element interactions.' },
                { info: 'I position your company brand.' },
                { info: 'Design and mockups of products for companies.' }
            ]
        }
    },
    {
        index: 2,
        icon: <IoIosCode />,
        title: ["Ui/Ux", "Designer"],
        modal: {
            title: "Ui/Ux Designer",
            description: 'Service with more than 3 years of experience.Providing quality work to clients and companies.',
            services: [
                { info: 'I develop the user interface.' },
                { info: 'Web page development.' },
                { info: 'I create ux element interactions.' },
                { info: 'I position your company brand.' },
                { info: 'Design and mockups of products for companies.' }
            ]
        }
    },

    {
        index: 3,
        icon: <MdOutlineDesignServices />,
        title: ["Visual", "Designer"],
        modal: {
            title: "Visual Designer",
            description: 'Service with more than 3 years of experience.Providing quality work to clients and companies.',
            services: [
                { info: 'I develop the user interface.' },
                { info: 'Web page development.' },
                { info: 'I create ux element interactions.' },
                { info: 'I position your company brand.' },
                { info: 'Design and mockups of products for companies.' }
            ]
        }
    }
]

export const dataMenu = [
    {
        id: 1,
        image: Image1,
        title: "Jhon Doe",
        description:
            "A really good job, all aspects of the project were followed step by step and with good results.",
    },
    {
        id: 2,
        image: Image2,
        title: "Harry Clinton",
        description:
            "A really good job, all aspects of the project were followed step by step and with good results.",
    },
    {
        id: 3,
        image: Image3,
        title: "Sara Cill",
        description:
            "A really good job, all aspects of the project were followed step by step and with good results.",
    },
];

export const footerLink = [
    { href: "#about", title: "about" },
    { href: "#project", title: "project" },
    { href: "#testimonial", title: "testimonial" }
]

