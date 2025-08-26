import { Package, Globe, Truck, Shield, Users, Clock } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-[#231F20]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-[#A5CD39] mb-6">خدماتنا</h3>
          <p className="text-xl text-[#BCBEC0] max-w-3xl mx-auto leading-relaxed">
            نقدم مجموعة شاملة من الخدمات اللوجيستية المصممة لتلبية احتياجاتكم المختلفة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="hover-lift bg-[#231F20] border border-[#BCBEC0]/20 p-8 rounded-lg shadow-lg hover:border-[#A5CD39]/40 transition-all duration-300">
            <Package className="h-12 w-12 text-[#A5CD39] mb-6" />
            <h4 className="text-2xl font-bold text-[#BCBEC0] mb-4">الشحن المحلي</h4>
            <p className="text-[#BCBEC0]/70 leading-relaxed">
              خدمات شحن موثوقة داخل المملكة مع ضمان الوصول في الوقت المحدد وبأعلى معايير الأمان
            </p>
          </div>

          <div className="hover-lift bg-[#231F20] border border-[#BCBEC0]/20 p-8 rounded-lg shadow-lg hover:border-[#A5CD39]/40 transition-all duration-300">
            <Globe className="h-12 w-12 text-[#A5CD39] mb-6" />
            <h4 className="text-2xl font-bold text-[#BCBEC0] mb-4">الشحن الدولي</h4>
            <p className="text-[#BCBEC0]/70 leading-relaxed">
              شبكة واسعة من الشركاء الدوليين لضمان وصول شحناتكم إلى جميع أنحاء العالم بكفاءة عالية
            </p>
          </div>

          <div className="hover-lift bg-[#231F20] border border-[#BCBEC0]/20 p-8 rounded-lg shadow-lg hover:border-[#A5CD39]/40 transition-all duration-300">
            <Truck className="h-12 w-12 text-[#A5CD39] mb-6" />
            <h4 className="text-2xl font-bold text-[#BCBEC0] mb-4">التوصيل السريع</h4>
            <p className="text-[#BCBEC0]/70 leading-relaxed">
              خدمة توصيل في نفس اليوم للعناصر العاجلة مع تتبع مباشر لحالة الشحنة
            </p>
          </div>

          <div className="hover-lift bg-[#231F20] border border-[#BCBEC0]/20 p-8 rounded-lg shadow-lg hover:border-[#A5CD39]/40 transition-all duration-300">
            <Shield className="h-12 w-12 text-[#A5CD39] mb-6" />
            <h4 className="text-2xl font-bold text-[#BCBEC0] mb-4">التأمين الشامل</h4>
            <p className="text-[#BCBEC0]/70 leading-relaxed">
              حماية كاملة للشحنات ضد جميع المخاطر مع تعويض فوري في حالة حدوث أي ضرر
            </p>
          </div>

          <div className="hover-lift bg-[#231F20] border border-[#BCBEC0]/20 p-8 rounded-lg shadow-lg hover:border-[#A5CD39]/40 transition-all duration-300">
            <Users className="h-12 w-12 text-[#A5CD39] mb-6" />
            <h4 className="text-2xl font-bold text-[#BCBEC0] mb-4">الاستشارات اللوجيستية</h4>
            <p className="text-[#BCBEC0]/70 leading-relaxed">
              خدمات استشارية متخصصة لتحسين سلسلة التوريد وتقليل التكاليف التشغيلية
            </p>
          </div>

          <div className="hover-lift bg-[#231F20] border border-[#BCBEC0]/20 p-8 rounded-lg shadow-lg hover:border-[#A5CD39]/40 transition-all duration-300">
            <Clock className="h-12 w-12 text-[#A5CD39] mb-6" />
            <h4 className="text-2xl font-bold text-[#BCBEC0] mb-4">التتبع المباشر</h4>
            <p className="text-[#BCBEC0]/70 leading-relaxed">
              نظام تتبع متقدم يمكنكم من متابعة شحناتكم لحظة بلحظة من نقطة الإرسال حتى التسليم
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
