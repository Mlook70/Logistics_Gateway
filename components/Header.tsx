import { Truck } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-dark-charcoal text-white py-4 px-6 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Truck className="h-8 w-8 text-primary-green" />
          <div>
            <h1 className="text-2xl font-bold">بوابة التوصيل اللوجيستية</h1>
            <p className="text-sm text-neutral-gray">Logistics Gateway</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-8">
          <a href="#home" className="hover:text-primary-green transition-colors">الرئيسية</a>
          <a href="#about" className="hover:text-primary-green transition-colors">من نحن</a>
          <a href="#services" className="hover:text-primary-green transition-colors">خدماتنا</a>
          <a href="#contact" className="hover:text-primary-green transition-colors">تواصل معنا</a>
        </nav>
      </div>
    </header>
  );
}
