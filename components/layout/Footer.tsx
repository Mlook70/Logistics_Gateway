import Image from 'next/image';
import { Instagram } from 'lucide-react';
import { FaTiktok, FaFacebook } from 'react-icons/fa';

// Custom X (Twitter) Icon Component
const XIcon: React.FC = () => (
  <svg className="w-6 h-6 text-current" viewBox="0 0 50 50" fill="currentColor">
    <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"/>
  </svg>
);

export default function Footer() {
  // Social media links
  const socialLinks = [
    { icon: FaFacebook, href: 'https://www.facebook.com/profile.php?id=61583623737049', label: 'Facebook' },
    { icon: FaTiktok, href: 'https://www.tiktok.com/@gate.way.sa', label: 'TikTok' },
    { icon: XIcon, href: 'https://x.com/gate_way_sa', label: 'X (Twitter)' },
    { icon: Instagram, href: 'https://www.instagram.com/gate.way.sa/', label: 'Instagram' },
  ];

  return (
    <footer className="bg-[#000707] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div>
              <Image 
                src="/Logistic-Gateway.png" 
                alt="Logistics Gateway Logo" 
                width={200} 
                height={200}
                className="h-50 w-50 object-contain"
              />
              </div>
            </div>
            <p className="text-neutral-gray leading-relaxed mb-6">
              شريكك الموثوق في الحلول اللوجيستية والشحن داخل وخارج المملكة
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4 rtl:space-x-reverse">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-gray-400 hover:text-primary-green transition-colors duration-300"
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">خدماتنا</h4>
            <ul className="space-y-2 text-neutral-gray">
              <li><a href="#" className="hover:text-primary-green transition-colors">الشحن المحلي</a></li>
              <li><a href="#" className="hover:text-primary-green transition-colors">الشحن الدولي</a></li>
              <li><a href="#" className="hover:text-primary-green transition-colors">التوصيل السريع</a></li>
              <li><a href="#" className="hover:text-primary-green transition-colors">التأمين الشامل</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-neutral-gray">
              <li><a href="#" className="hover:text-primary-green transition-colors">من نحن</a></li>
              <li><a href="#" className="hover:text-primary-green transition-colors">تتبع الشحنة</a></li>
              <li><a href="#" className="hover:text-primary-green transition-colors">الأسعار</a></li>
              <li><a href="#" className="hover:text-primary-green transition-colors">الشروط والأحكام</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">تواصل معنا</h4>
            <div className="space-y-2 text-neutral-gray">
              <p>920001234</p>
              <p>info@logistic-gateway.com</p>
              <p>جدة، برج طريق الملك، الدور 8، مكتب 801</p>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-gray/30 mt-8 pt-8 text-center">
          <p className="text-neutral-gray">
            © 2024 بوابة التوصيل اللوجيستية. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
