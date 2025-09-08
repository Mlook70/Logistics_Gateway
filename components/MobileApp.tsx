import Image from 'next/image';
import Link from 'next/link';

// App data array for better maintainability
const mobileApps = [
  {
    id: 1,
    name: "Grab App",
    logo: "/apps/Grab_Logo.png",
    alt: "Grab App Logo",
    url: "https://grab.sa"
  },
  {
    id: 2,
    name: "Jibluk App",
    logo: "/apps/Jibluk_Logo.png",
    alt: "Jibluk App Logo",
    // No URL - will be rendered as image only
  },
  {
    id: 3,
    name: "Bjeek App",
    logo: "/apps/Bjeek_Logo.png",
    alt: "Bjeek App Logo",
    url: "https://bjeek.com"
  },
  {
    id: 4,
    name: "Darbcom App",
    logo: "/apps/Darbcom_Logo.png",
    alt: "Darbcom App Logo",
    // No URL - will be rendered as image only
  }
];

export default function MobileApp() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-dark-charcoal mb-6">تطبيقاتنا المتميزة</h3>
          <p className="text-xl text-neutral-gray max-w-3xl mx-auto leading-relaxed">
            تطبيقاتنا المتخصصة في الخدمات اللوجيستية
          </p>
        </div>

        {/* Mobile App Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {mobileApps.map((app) => {
            // Common image component
            const imageElement = (
              <Image
                src={app.logo}
                alt={app.alt}
                width={100}
                height={100}
                className="object-contain hover-lift"
              />
            );

            // If app has URL, wrap in Link, otherwise render as div
            if (app.url) {
              return (
                <Link
                  key={app.id}
                  href={app.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-32 h-32 flex items-center justify-center transition-all p-4 hover:scale-105 cursor-pointer"
                >
                  {imageElement}
                </Link>
              );
            } else {
              return (
                <div
                  key={app.id}
                  className="w-32 h-32 flex items-center justify-center p-4"
                >
                  {imageElement}
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}