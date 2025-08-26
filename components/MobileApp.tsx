import Image from 'next/image';

// App data array for better maintainability
const mobileApps = [
  {
    id: 1,
    name: "Grab App",
    logo: "/apps/Grab_Logo.png",
    alt: "Grab App Logo",
    url: "https://example1.com"
  },
  {
    id: 2,
    name: "Jibluk App",
    logo: "/apps/Jibluk_Logo.png",
    alt: "Jibluk App Logo",
    url: "https://example2.com"
  },
  {
    id: 3,
    name: "Bjeek App",
    logo: "/apps/Bjeek_Logo.png",
    alt: "Bjeek App Logo",
    url: "https://example3.com"
  },
  {
    id: 4,
    name: "Darbcom App",
    logo: "/apps/Darbcom_Logo.png",
    alt: "Darbcom App Logo",
    url: "https://example4.com"
  }
];

export default function MobileApp() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-dark-charcoal mb-6">تطبيقاتنا المحمولة</h3>
          <p className="text-xl text-neutral-gray max-w-3xl mx-auto leading-relaxed">
            حمل تطبيقاتنا المتخصصة في الخدمات اللوجيستية
          </p>
        </div>

        {/* Mobile App Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {mobileApps.map((app) => (
            <a 
              key={app.id}
              href={app.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-32 h-32 flex items-center justify-center transition-all p-4"
            >
              <Image
                src={app.logo}
                alt={app.alt}
                width={100}
                height={100}
                className="object-contain hover-lift"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
