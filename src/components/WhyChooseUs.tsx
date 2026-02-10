export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Expert Team",
      description: "Our experienced professionals care for your garments with precision",
      icon: "👥",
    },
    {
      title: "Advanced Equipment",
      description: "State-of-the-art cleaning technology for superior results",
      icon: "⚙️",
    },
    {
      title: "Fast Turnaround",
      description: "24-hour turn around without compromising quality",
      icon: "⚡",
    },
    {
      title: "Eco-Friendly",
      description: "Sustainable practices that protect the environment",
      icon: "🌍",
    },
    {
      title: "Quality Guarantee",
      description: "100% satisfaction guaranteed on all services",
      icon: "✓",
    },
    {
      title: "Competitive Pricing",
      description: "Premium service at reasonable prices with transparent billing",
      icon: "💰",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-safe">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
            Why Choose Moshi Drycleaners Limited?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            We're committed to delivering exceptional service and results.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div key={index} className="card p-6">
              <div className="mb-4 text-4xl">{reason.icon}</div>
              <h3 className="mb-2 text-lg font-bold text-gray-900">
                {reason.title}
              </h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
