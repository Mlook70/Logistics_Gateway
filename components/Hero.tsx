import { Truck } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center justify-center px-6 fade-in"
      style={{
        backgroundImage: 'url(/bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Gradient overlay shadow */}
      <div className="absolute inset-0 bg-black/80 opacity-90"></div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white">
          <span className="block mb-4">بوابة التوصيل</span>
          <span className="text-[#A5CD39]">اللوجيستية</span>
        </h2>
        <p className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-4xl mx-auto leading-relaxed text-white">
          نقدم أفضل خدمات التوصيل والشحن مع ضمان الوصول الآمن والسريع لجميع أنحاء المملكة
        </p>
      </div>
    </section>
  );
}
