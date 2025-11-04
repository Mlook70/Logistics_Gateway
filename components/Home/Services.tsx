import { Package, Globe, Truck, Shield, Users, Clock, LucideIcon } from 'lucide-react';

interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: 'local-shipping',
    icon: Package,
    title: 'الشحن المحلي',
    description: 'خدمات شحن موثوقة داخل المملكة مع ضمان الوصول في الوقت المحدد وبأعلى معايير الأمان'
  },
  {
    id: 'international-shipping',
    icon: Globe,
    title: 'الشحن الدولي',
    description: 'شبكة واسعة من الشركاء الدوليين لضمان وصول شحناتكم إلى جميع أنحاء العالم بكفاءة عالية'
  },
  {
    id: 'express-delivery',
    icon: Truck,
    title: 'التوصيل السريع',
    description: 'خدمة توصيل في نفس اليوم للعناصر العاجلة مع تتبع مباشر لحالة الشحنة'
  },
  {
    id: 'comprehensive-insurance',
    icon: Shield,
    title: 'التأمين الشامل',
    description: 'حماية كاملة للشحنات ضد جميع المخاطر مع تعويض فوري في حالة حدوث أي ضرر'
  },
  {
    id: 'logistics-consulting',
    icon: Users,
    title: 'الاستشارات اللوجيستية',
    description: 'خدمات استشارية متخصصة لتحسين سلسلة التوريد وتقليل التكاليف التشغيلية'
  },
  {
    id: 'real-time-tracking',
    icon: Clock,
    title: 'التتبع المباشر',
    description: 'نظام تتبع متقدم يمكنكم من متابعة شحناتكم لحظة بلحظة من نقطة الإرسال حتى التسليم'
  }
];

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const IconComponent = service.icon;
  
  return (
    <div className="hover-lift bg-[#000707] border border-white p-6 rounded-lg shadow-lg hover:border-[#A5CD39]/40 transition-all duration-300">
      <IconComponent className="h-10 w-10 text-[#A5CD39] mb-4" />
      <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
      <p className="text-white/70 leading-relaxed text-sm">
        {service.description}
      </p>
    </div>
  );
};

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-[#000707]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-[#A5CD39] mb-6">خدماتنا</h3>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            نقدم مجموعة شاملة من الخدمات اللوجيستية المصممة لتلبية احتياجاتكم المختلفة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
