import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-dark-charcoal mb-6">تواصل معنا</h3>
          <p className="text-xl text-neutral-gray max-w-3xl mx-auto leading-relaxed">
            نحن هنا لخدمتكم على مدار الساعة. تواصلوا معنا لأي استفسار أو للحصول على عرض أسعار مخصص
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-primary-green mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-dark-charcoal mb-2">الهاتف</h4>
                <p className="text-gray-700">920001234</p>
                <p className="text-gray-700">+966 11 234 5678</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-primary-green mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-dark-charcoal mb-2">البريد الإلكتروني</h4>
                <p className="text-gray-700">info@logisticsgateway.sa</p>
                <p className="text-gray-700">sales@logisticsgateway.sa</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary-green mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-dark-charcoal mb-2">العنوان</h4>
                <p className="text-gray-700">
                  طريق الملك فهد، حي الأعمال<br />
                  الرياض 12345، المملكة العربية السعودية
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="h-6 w-6 text-primary-green mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-dark-charcoal mb-2">ساعات العمل</h4>
                <p className="text-gray-700">الأحد - الخميس: 8:00 ص - 6:00 م</p>
                <p className="text-gray-700">الجمعة - السبت: 9:00 ص - 4:00 م</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h4 className="text-2xl font-bold text-dark-charcoal mb-6">احصل على عرض أسعار</h4>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-dark-charcoal mb-2">الاسم</label>
                <input
                  type="text"
                  className="w-full p-3 border border-neutral-gray rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                  placeholder="أدخل اسمك الكامل"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-dark-charcoal mb-2">رقم الهاتف</label>
                <input
                  type="tel"
                  className="w-full p-3 border border-neutral-gray rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                  placeholder="أدخل رقم هاتفك"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-dark-charcoal mb-2">البريد الإلكتروني</label>
                <input
                  type="email"
                  className="w-full p-3 border border-neutral-gray rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent"
                  placeholder="أدخل بريدك الإلكتروني"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-dark-charcoal mb-2">نوع الخدمة</label>
                <select className="w-full p-3 border border-neutral-gray rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent">
                  <option>اختر نوع الخدمة</option>
                  <option>الشحن المحلي</option>
                  <option>الشحن الدولي</option>
                  <option>التوصيل السريع</option>
                  <option>الاستشارات اللوجيستية</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-dark-charcoal mb-2">تفاصيل الطلب</label>
                <textarea
                  rows={4}
                  className="w-full p-3 border border-neutral-gray rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent resize-none"
                  placeholder="أخبرنا عن احتياجاتك..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary-green hover:bg-primary-green/90 text-white py-3 rounded-lg font-semibold transition-all hover-lift"
              >
                إرسال الطلب
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
