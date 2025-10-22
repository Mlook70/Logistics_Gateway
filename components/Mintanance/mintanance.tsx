import { Wrench } from 'lucide-react';

export default function Maintenance() {
  return (
    <section 
      className="min-h-screen relative flex flex-col items-center justify-center text-center px-6"
      style={{
        backgroundImage: 'url(/bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 opacity-90"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <div className="flex justify-center mb-6">
          <div className="bg-[#A5CD39]/20 p-4 rounded-full">
            <Wrench className="text-[#A5CD39]" size={60} />
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          <span className="block mb-2">نقوم حالياً بأعمال</span>
          <span className="text-[#A5CD39]">الصيانة والتحديث</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 leading-relaxed">
          نعمل على تحسين النظام لضمان أداء أفضل وتجربة أكثر سلاسة.  
          <br />
          يرجى العودة لاحقاً — شكراً لتفهمكم.
        </p>
      </div>
    </section>
  );
}
