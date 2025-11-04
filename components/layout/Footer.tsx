import Image from 'next/image';

export default function Footer() {
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
            <p className="text-neutral-gray leading-relaxed">
              شريكك الموثوق في الحلول اللوجيستية والشحن داخل وخارج المملكة
            </p>
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
