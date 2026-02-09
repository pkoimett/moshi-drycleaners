import Link from "next/link";

export default function Services() {
  const services = [
    {
      icon: "👔",
      name: "Dry Cleaning",
      description: "Expert dry cleaning for suits, dresses, and delicate fabrics",
    },
    {
      icon: "👕",
      name: "Shirt Laundry",
      description: "Premium shirt cleaning with professional pressing",
    },
    {
      icon: "🪡",
      name: "Alterations",
      description: "Professional garment alterations and repairs",
    },
    {
      icon: "💍",
      name: "Special Occasions",
      description: "Specialized care for wedding and formal attire",
    },
    {
      icon: "🛏️",
      name: "Bedding & Comforters",
      description: "Large item cleaning with specialized equipment",
    },
    {
      icon: "🌱",
      name: "Eco-Friendly",
      description: "Sustainable cleaning using non-toxic solvents",
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-safe">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
            Our Services
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Comprehensive dry cleaning and laundry services tailored to your
            needs.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="card p-8 text-center">
              <div className="mb-4 text-5xl">{service.icon}</div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                {service.name}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/services" className="btn-primary">
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
