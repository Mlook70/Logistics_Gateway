import Image from 'next/image';

export default function SuccessPartners() {
  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-dark-charcoal mb-6">شركاء النجاح</h3>
          <p className="text-xl text-neutral-gray max-w-3xl mx-auto leading-relaxed">
            نفتخر بشراكتنا مع كبرى الشركات والمؤسسات في المملكة والعالم
          </p>
        </div>

        {/* Partner Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {/* Wealth Basis */}
          <div className="w-32 h-32 bg-white rounded-lg shadow-lg flex items-center justify-center hover-lift p-4">
            <Image
              src="/companies/Wealth_Basis_Logo.png"
              alt="Wealth Basis Logo"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>

          {/* Techno Tech */}
          <div className="w-32 h-32 bg-white rounded-lg shadow-lg flex items-center justify-center hover-lift p-4">
            <Image
              src="/companies/Techno_Tech.png"
              alt="Techno Tech Logo"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>

          {/* Smart Details */}
          <div className="w-32 h-32 bg-white rounded-lg shadow-lg flex items-center justify-center hover-lift p-4">
            <Image
              src="/companies/Smart_Details_Logo.png"
              alt="Smart Details Logo"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>

          {/* Tala Line */}
          <div className="w-32 h-32 bg-white rounded-lg shadow-lg flex items-center justify-center hover-lift p-4">
            <Image
              src="/companies/Tala_Line_Logo.png"
              alt="Tala Line Logo"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>

          {/* Future Vision */}
          <div className="w-32 h-32 bg-white rounded-lg shadow-lg flex items-center justify-center hover-lift p-4">
            <Image
              src="/companies/Future_Vision_Logo.png"
              alt="Future Vision Logo"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>

          {/* Awtad */}
          <div className="w-32 h-32 bg-white rounded-lg shadow-lg flex items-center justify-center hover-lift p-4">
            <Image
              src="/companies/Awtad_Logo.png"
              alt="Awtad Logo"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
