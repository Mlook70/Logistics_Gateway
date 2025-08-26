export default function UnderConstruction() {
  return (
    <section 
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
      
      {/* Under Construction Message */}
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white">
          <span className="block mb-4">Under Construction</span>
          <span className="text-[#A5CD39]">الموقع تحت التجديد</span>
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-4xl mx-auto leading-relaxed text-white">
          We&apos;re working hard to bring you something amazing!
        </p>
        <p className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-4xl mx-auto leading-relaxed text-white" dir="rtl">
          نحن نعمل بجد لنقدم لكم شيئاً مذهلاً!
        </p>
      </div>
    </section>
  );
}
