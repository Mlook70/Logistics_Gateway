import Image from 'next/image';
import Link from 'next/link';

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
    name: "Bjeek App",
    logo: "/apps/Bjeek_Logo.png",
    alt: "Bjeek App Logo",
    url: "https://bjeek.com"
  },
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

        {/* Centered Grid */}
        <div className="flex flex-wrap justify-center gap-12">
          {mobileApps.map((app) => {
            const imageElement = (
              <Image
                src={app.logo}
                alt={app.alt}
                width={100}
                height={100}
                className="object-contain hover-lift rounded-2xl"
              />
            );

            return app.url ? (
              <Link
                key={app.id}
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-32 h-32 flex items-center justify-center transition-all p-4 hover:scale-105 cursor-pointer"
              >
                {imageElement}
              </Link>
            ) : (
              <div
                key={app.id}
                className="w-32 h-32 flex items-center justify-center p-4"
              >
                {imageElement}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
