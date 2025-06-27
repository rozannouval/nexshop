import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const socialIcons = [
    {
      icon: <Linkedin />,
      href: "https://linkedin.com/in/rozan-nouval",
    },
    {
      icon: <Instagram />,
      href: "https://instagram.com/rozan.nouval",
    },
    {
      icon: <Github />,
      href: "https://github.com/rozannouval",
    },
  ];
  return (
    <footer className="container mx-auto p-4 border-t-2 border-stone-100">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
        <Link href="/" className="font-medium text-stone-500">
          NEXSHOP
        </Link>
        <div className="flex items-center gap-4">
          {socialIcons.map((item, index) => (
            <a
              key={index}
              href={item.href}
              rel="noopener noreferrer"
              target="_blank"
              className="text-stone-500"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
      <p className="text-center w-full text-stone-300 font-medium mt-4">
        ~ dibuat tahun 2025 oleh Rozan Nouval ~
      </p>
    </footer>
  );
};

export default Footer;
