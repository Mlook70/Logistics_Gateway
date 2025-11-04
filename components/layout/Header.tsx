import Image from "next/image";
import Link from "next/link";
import HeaderScrollWrapper from "@/components/layout/HeaderScrollWrapper"; 

export default function Header() {
  return (
    <HeaderScrollWrapper>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <Image
            src="/Logistic-Gateway.png"
            alt="Logistics Gateway Logo"
            width={100}
            height={100}
            priority
            className="h-24 w-24 object-contain"
          />
        </div>

        <nav className="hidden md:flex gap-8 font-medium">
          <Link href="#home" className="hover:text-primary-green transition-colors">
            الرئيسية
          </Link>
          <Link href="#about" className="hover:text-primary-green transition-colors">
            من نحن
          </Link>
          <Link href="#services" className="hover:text-primary-green transition-colors">
            خدماتنا
          </Link>
          <Link href="#contact" className="hover:text-primary-green transition-colors">
            تواصل معنا
          </Link>
        </nav>
      </div>
    </HeaderScrollWrapper>
  );
}
