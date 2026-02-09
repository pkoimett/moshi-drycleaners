import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore our comprehensive dry cleaning and laundry services.",
};

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      name: "Dry Cleaning",
      description:
        "Professional dry cleaning for suits, dresses, skirts, and delicate fabrics",
      icon: "👔",
      details: [
        "Expert stain removal",
        "Fabric conditioning",
        "Professional pressing",
      ],
    },
    {
      id: 2,
      name: "Shirt Laundry",
      description:
        "Premium shirt cleaning with expert pressing and finishing",
      icon: "👕",
      details: [
        "Starch options",
        "Color care",
        "Perfect collars and cuffs",
      ],
    },
    {
      id: 3,
      name: "Alterations",
      description: "Professional garment alterations and repairs",
      icon: "🪡",
      details: ["Hemming", "Tapering", "Zipper replacement"],
    },
    {
      id: 4,
      name: "Wedding & Special Occasions",
      description: "Specialized care for your most precious garments",
      icon: "💍",
      details: [
        "Wedding dress care",
        "Delicate beading",
        "Preservation services",
      ],
    },
    {
      id: 5,
      name: "Comforter & Bedding",
      description: "Large item cleaning with specialized equipment",
      icon: "🛏️",
      details: [
        "Down comforters",
        "Quilts",
        "Bedspreads",
      ],
    },
    {
      id: 6,
      name: "Eco-Friendly Cleaning",
      description: "Sustainable cleaning using eco-friendly methods",
      icon: "🌱",
      details: [
        "Non-toxic solvents",
        "Water conservation",
        "Carbon neutral process",
      ],
    },
  ];

  return (
    <>
      <Header />
      <div className="container-safe section-padding">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-bold text-gray-900">
            Our Services
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            We offer comprehensive dry cleaning and laundry services designed to
            keep your garments looking their best.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.id} className="card p-6">
              <div className="mb-4 text-4xl">{service.icon}</div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                {service.name}
              </h3>
              <p className="mb-4 text-gray-600">{service.description}</p>
              <ul className="space-y-2">
                {service.details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-primary-600">✓</span>
                    <span className="text-sm text-gray-600">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-lg bg-primary-50 p-8 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Need Something Special?
          </h2>
          <p className="mb-6 text-lg text-gray-600">
            We offer custom services tailored to your specific needs. Contact us
            to discuss your requirements.
          </p>
          <button className="btn-primary">Contact Our Team</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
