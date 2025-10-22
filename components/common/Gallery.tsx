import { Image, Truck, Package, Globe, Users } from 'lucide-react';

export default function Gallery() {
  return (
    <section className="py-20 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-dark-charcoal mb-6">معرض الصور</h3>
          <p className="text-xl text-neutral-gray max-w-3xl mx-auto leading-relaxed">
            اكتشف عالمنا اللوجيستي من خلال صور تعكس جودة خدماتنا وتفاني فريقنا
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Gallery Item 1 */}
          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover-lift">
            <div className="w-full h-80 bg-gradient-to-br from-primary-green/20 to-primary-green/40 flex items-center justify-center">
              <div className="text-center">
                <Truck className="h-20 w-20 text-primary-green mx-auto mb-4" />
                <h4 className="text-xl font-bold text-dark-charcoal">أسطول النقل</h4>
                <p className="text-gray-600">أحدث المركبات والتقنيات</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center">
                <h4 className="text-xl font-bold mb-2">أسطول النقل</h4>
                <p className="text-sm">أحدث المركبات والتقنيات</p>
              </div>
            </div>
          </div>

          {/* Gallery Item 2 */}
          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover-lift">
            <div className="w-full h-80 bg-gradient-to-br from-dark-charcoal/20 to-dark-charcoal/40 flex items-center justify-center">
              <div className="text-center">
                <Package className="h-20 w-20 text-dark-charcoal mx-auto mb-4" />
                <h4 className="text-xl font-bold text-dark-charcoal">مركز التوزيع</h4>
                <p className="text-gray-600">منشآت حديثة ومتطورة</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center">
                <h4 className="text-xl font-bold mb-2">مركز التوزيع</h4>
                <p className="text-sm">منشآت حديثة ومتطورة</p>
              </div>
            </div>
          </div>

          {/* Gallery Item 3 */}
          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover-lift">
            <div className="w-full h-80 bg-gradient-to-br from-primary-green/20 to-primary-green/40 flex items-center justify-center">
              <div className="text-center">
                <Globe className="h-20 w-20 text-primary-green mx-auto mb-4" />
                <h4 className="text-xl font-bold text-dark-charcoal">الشحن الدولي</h4>
                <p className="text-gray-600">شبكة عالمية من الشركاء</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center">
                <h4 className="text-xl font-bold mb-2">الشحن الدولي</h4>
                <p className="text-sm">شبكة عالمية من الشركاء</p>
              </div>
            </div>
          </div>

          {/* Gallery Item 4 */}
          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover-lift">
            <div className="w-full h-80 bg-gradient-to-br from-dark-charcoal/20 to-dark-charcoal/40 flex items-center justify-center">
              <div className="text-center">
                <Users className="h-20 w-20 text-dark-charcoal mx-auto mb-4" />
                <h4 className="text-xl font-bold text-dark-charcoal">فريق العمل</h4>
                <p className="text-gray-600">خبراء محترفون ومتفانون</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center">
                <h4 className="text-xl font-bold mb-2">فريق العمل</h4>
                <p className="text-sm">خبراء محترفون ومتفانون</p>
              </div>
            </div>
          </div>

          {/* Gallery Item 5 */}
          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover-lift">
            <div className="w-full h-80 bg-gradient-to-br from-primary-green/20 to-primary-green/40 flex items-center justify-center">
              <div className="text-center">
                <Truck className="h-20 w-20 text-primary-green mx-auto mb-4" />
                <h4 className="text-xl font-bold text-dark-charcoal">التوصيل السريع</h4>
                <p className="text-gray-600">خدمة في نفس اليوم</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center">
                <h4 className="text-xl font-bold mb-2">التوصيل السريع</h4>
                <p className="text-sm">خدمة في نفس اليوم</p>
              </div>
            </div>
          </div>

          {/* Gallery Item 6 */}
          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover-lift">
            <div className="w-full h-80 bg-gradient-to-br from-dark-charcoal/20 to-dark-charcoal/40 flex items-center justify-center">
              <div className="text-center">
                <Package className="h-20 w-20 text-dark-charcoal mx-auto mb-4" />
                <h4 className="text-xl font-bold text-dark-charcoal">تتبع الشحنات</h4>
                <p className="text-gray-600">تقنية متقدمة للتتبع</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center">
                <h4 className="text-xl font-bold mb-2">تتبع الشحنات</h4>
                <p className="text-sm">تقنية متقدمة للتتبع</p>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Navigation */}
        <div className="text-center mt-12">
          <div className="flex justify-center gap-3">
            <button className="w-3 h-3 bg-primary-green rounded-full"></button>
            <button className="w-3 h-3 bg-gray-300 rounded-full hover:bg-primary-green transition-colors"></button>
            <button className="w-3 h-3 bg-gray-300 rounded-full hover:bg-primary-green transition-colors"></button>
            <button className="w-3 h-3 bg-gray-300 rounded-full hover:bg-primary-green transition-colors"></button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">اكتشف المزيد من صورنا وخدماتنا</p>
          <button className="bg-primary-green hover:bg-primary-green/90 text-white px-8 py-3 rounded-lg font-semibold transition-all hover-lift">
            عرض جميع الصور
          </button>
        </div>
      </div>
    </section>
  );
}
