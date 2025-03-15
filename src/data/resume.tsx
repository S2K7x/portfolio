import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Shaï Krief",
  initials: "SK",
  url: "https://github.com/S2K7x",
  location: "Tel Aviv, Israel",
  locationLink: "https://www.google.com/maps/place/TelAviv",
  description:
    "Cybersecurity Specialist & IT Support Professional. Passionate about security, problem-solving, and technical challenges.",
  summary:
    "I currently work as a Helpdesk Tier 2 Support at Netspark and as a Coding Instructor at Codii. With a background in military service as an Infantry Fighter in the IDF Nahal Brigade, I've developed strong leadership and strategic thinking skills. I have extensive experience in cybersecurity, system administration, and network security, with a focus on penetration testing and ethical hacking.",
  avatarUrl: "/me.png",
  skills: [
    "Linux",
    "macOS",
    "Windows",
    "Active Directory",
    "Python",
    "Bash",
    "PowerShell",
    "JavaScript",
    "HTML",
    "CSS",
    "Web Application Security",
    "Network Security",
    "System Administration",
    "Cryptography",
    "Metasploit",
    "Burp Suite",
    "Wireshark",
    "Snort",
    "ELK Stack",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "Shaikrief@hotmail.fr",
    tel: "+972 53 282 7962",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/S2K7x",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shaï-krief-964087333",
        icon: Icons.linkedin,
        navbar: true,
      },
      TryHackMe: {
        name: "TryHackMe",
        url: "https://tryhackme.com/r/p/S2K7",
        icon: Icons.globe,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:Shaikrief@hotmail.fr",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Netspark",
      href: "#",
      badges: [],
      location: "Israel",
      title: "Helpdesk Tier 2 Support",
      logoUrl: "/company-logos/netspark.png",
      start: "2025",
      end: "Present",
      description:
        "Troubleshoot and diagnose software and network problems across various platforms, including iOS, macOS, Android, and Windows. Analyze logs, SSL certificates, URLs, IP addresses, and other web/application components to resolve technical issues.",
    },
    {
      company: "Codii",
      href: "#",
      badges: [],
      location: "Israel",
      title: "Coding Instructor",
      logoUrl: "/company-logos/codii.png",
      start: "2024",
      end: "Present",
      description:
        "Teach foundational coding concepts to children using Scratch and Python, fostering a hands-on, interactive learning environment to enhance computational thinking. Guide students through project-based learning, resulting in completed animations and interactive games that demonstrate their understanding of coding principles.",
    },
    {
      company: "La plateforme des energies",
      href: "#",
      badges: [],
      location: "Israel",
      title: "Internal IT Support",
      logoUrl: "/company-logos/plateforme.png",
      start: "2020",
      end: "2024",
      description:
        "Provided day-to-day technical support to employees, resolving hardware, software, and network issues to ensure smooth operations across the organization. Troubleshot and resolved issues related to office equipment, including desktops, laptops, printers, and network devices, minimizing downtime and increasing productivity.",
    },
    {
      company: "Israel Defense Forces",
      href: "#",
      badges: [],
      location: "Israel",
      title: "Sergeant – Infantry Fighter",
      logoUrl: "https://www.idf.il/media/yyeecbse/%D7%A1%D7%9E%D7%9C-%D7%A6%D7%94_%D7%9C-%D7%A2%D7%93%D7%9B%D7%A0%D7%99.png",
      start: "2021",
      end: "2023",
      description:
        "Served for 3 years in the Nahal Brigade, gaining extensive experience in combat operations and team leadership. Successfully completed formation and training programs to attain the rank of Sergeant. Developed strategic thinking and decision-making skills under dynamic conditions, contributing to the safety and efficiency of operations.",
    },
  ],
  education: [
    {
      school: "Kernelios",
      href: "#",
      degree: "Cybersecurity Course (+450 hours)",
      logoUrl: "/education-logos/kernelios.png",
      start: "2024",
      end: "2024",
    },
    {
      school: "TryHackMe, HackTheBox, PortSwigger",
      href: "https://tryhackme.com/r/p/S2K7",
      degree: "Hands-On Cybersecurity Labs (+300 hours)",
      logoUrl: "/education-logos/tryhackme.png",
      start: "2023",
      end: "Present",
    },
    {
      school: "Ironi Daled Tel Aviv",
      href: "#",
      degree: "High School Diploma",
      logoUrl: "/education-logos/ironidaled.png",
      start: "2012",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "Penetration Testing Portfolio",
      href: "https://tryhackme.com/r/p/S2K7",
      dates: "2023 - Present",
      active: true,
      description:
        "Completed over 250 hands-on labs in penetration testing and ethical hacking, focusing on web application security, network security, and vulnerability assessment.",
      technologies: [
        "Metasploit",
        "Burp Suite",
        "Hashcat",
        "John the Ripper",
        "Nikto",
        "Nmap",
        "Bloodhound",
        "Wireshark",
        "Linux",
        "Windows"
      ],
      links: [
        {
          type: "TryHackMe",
          href: "https://tryhackme.com/r/p/S2K7",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/S2K7x",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "EJPTv2 Certification Preparation",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "Currently preparing for the Junior Penetration Tester (eJPT) Certification from eLearnSecurity (+250 Hours of study). Focus areas include web application penetration testing, network penetration testing, and host-based attacks.",
      technologies: [
        "Python",
        "Bash",
        "Linux",
        "Web Application Security",
        "Network Security",
        "Vulnerability Assessment",
        "Metasploit",
        "Burp Suite"
      ],
      links: [
        {
          type: "INE",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
} as const;