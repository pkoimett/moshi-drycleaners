export default function FounderSection() {
  return (
    <section className="section-padding bg-gradient-to-r from-primary-50 to-secondary-50">
      <div className="container-safe">
        <div className="grid gap-12 items-center md:grid-cols-2">
          <div className="order-2 md:order-1">
            <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary-600">
              Our Leader
            </div>
            <h2 className="mb-2 text-4xl font-bold text-gray-900">
              Miss. CANDIDA MUKAMI KARIUKI
            </h2>
            <p className="mb-6 text-lg font-semibold text-secondary-600">
              Founder & CEO
            </p>
            <p className="mb-4 text-lg text-gray-700">
              With a passion for excellence and dedication to customer satisfaction, I founded Moshi Drycleaners Limited to provide the highest quality cleaning services to our community in Moshi.
            </p>
            <p className="mb-4 text-lg text-gray-700">
              Our commitment to using eco-friendly cleaning solutions and modern technology, combined with personalized service, has helped us build lasting relationships with our valued customers.
            </p>
            <p className="text-lg text-gray-700">
              Thank you for trusting us with your garments. We look forward to serving you with the same care and attention to detail that has made us a trusted name in dry cleaning.
            </p>
          </div>
          <div className="order-1 md:order-2 flex items-center justify-center">
            <div className="relative h-80 w-64 overflow-hidden rounded-lg bg-gray-200 shadow-lg">
              <img
                src="/founder.jpg"
                alt="Candida Mukami Kariuki - Founder & CEO"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
