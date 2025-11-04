"use client";

import { useEffect, useState } from "react";

export default function HeaderScrollWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out py-2 px-6 ${
        scrolled
          ? "bg-[#000707]/95 backdrop-blur-md text-white shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      {children}
    </header>
  );
}
