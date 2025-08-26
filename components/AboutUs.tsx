import { Shield, Clock, Users, Zap } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-dark-charcoal mb-6">من نحن</h3>
          <p className="text-xl text-neutral-gray max-w-3xl mx-auto leading-relaxed">
            بوابة التوصيل اللوجيستية هي شركة رائدة في مجال الخدمات اللوجيستية، تأسست لتقديم حلول شاملة ومبتكرة في مجال النقل والتوصيل
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h4 className="text-2xl font-bold text-dark-charcoal">رؤيتنا</h4>
            <p className="text-lg text-gray-700 leading-relaxed">
              أن نكون الخيار الأول للشركات والأفراد في المملكة العربية السعودية للحلول اللوجيستية، من خلال تقديم خدمات عالية الجودة تتميز بالسرعة والأمان والموثوقية.
            </p>
            
            <h4 className="text-2xl font-bold text-dark-charcoal">مهمتنا</h4>
            <p className="text-lg text-gray-700 leading-relaxed">
              نسعى لتسهيل عمليات النقل والتوصيل لعملائنا من خلال استخدام أحدث التقنيات وأفضل الممارسات في الصناعة، مع الحفاظ على أعلى معايير الجودة والخدمة.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="hover-lift bg-primary-green/10 p-6 rounded-lg text-center">
              <Shield className="h-12 w-12 text-primary-green mx-auto mb-4" />
              <h5 className="font-bold text-dark-charcoal mb-2">أمان مضمون</h5>
              <p className="text-sm text-gray-600">حماية شاملة لجميع الشحنات</p>
            </div>
            <div className="hover-lift bg-primary-green/10 p-6 rounded-lg text-center">
              <Clock className="h-12 w-12 text-primary-green mx-auto mb-4" />
              <h5 className="font-bold text-dark-charcoal mb-2">توصيل سريع</h5>
              <p className="text-sm text-gray-600">التزام بالمواعيد المحددة</p>
            </div>
            <div className="hover-lift bg-primary-green/10 p-6 rounded-lg text-center">
              <Users className="h-12 w-12 text-primary-green mx-auto mb-4" />
              <h5 className="font-bold text-dark-charcoal mb-2">فريق محترف</h5>
              <p className="text-sm text-gray-600">خبراء في مجال اللوجيستيات</p>
            </div>
            <div className="hover-lift bg-primary-green/10 p-6 rounded-lg text-center">
              <Zap className="h-12 w-12 text-primary-green mx-auto mb-4" />
              <h5 className="font-bold text-dark-charcoal mb-2">تقنية متقدمة</h5>
              <p className="text-sm text-gray-600">أنظمة تتبع حديثة</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
