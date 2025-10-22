export default function Stats() {
  return (
    <section className="py-16 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="hover-lift bg-white p-8 rounded-lg shadow-lg">
            <div className="text-4xl font-bold text-primary-green mb-2">500+</div>
            <div className="text-dark-charcoal font-semibold">عميل راضٍ</div>
          </div>
          <div className="hover-lift bg-white p-8 rounded-lg shadow-lg">
            <div className="text-4xl font-bold text-primary-green mb-2">1000+</div>
            <div className="text-dark-charcoal font-semibold">شحنة شهرياً</div>
          </div>
          <div className="hover-lift bg-white p-8 rounded-lg shadow-lg">
            <div className="text-4xl font-bold text-primary-green mb-2">13</div>
            <div className="text-dark-charcoal font-semibold">منطقة تغطية</div>
          </div>
          <div className="hover-lift bg-white p-8 rounded-lg shadow-lg">
            <div className="text-4xl font-bold text-primary-green mb-2">99%</div>
            <div className="text-dark-charcoal font-semibold">معدل التسليم</div>
          </div>
        </div>
      </div>
    </section>
  );
}
