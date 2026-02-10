import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Moshi Drycleaners Limited's history, mission, and commitment to excellence.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="container-safe section-padding">
        <div className="mb-12 grid gap-12 md:grid-cols-2">
          <div>
            <h1 className="mb-6 text-5xl font-bold text-gray-900">About Us</h1>
            <p className="mb-4 text-lg text-gray-600">
              Moshi Drycleaners Limited is dedicated to providing exceptional dry cleaning
              and laundry services to our community. With over a decade of
              experience, we've built a reputation for quality, reliability, and
              outstanding customer care.
            </p>
            <p className="mb-4 text-lg text-gray-600">
              Our team of skilled professionals uses state-of-the-art equipment
              and eco-friendly methods to ensure your garments receive the care
              they deserve.
            </p>
          </div>
          <div className="flex items-center justify-center rounded-lg bg-gradient-primary p-8 text-white">
            <div className="text-center">
              <h2 className="mb-4 text-4xl font-bold">10+</h2>
              <p className="text-lg">Years of Excellence</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-gray-900">Our Values</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Quality",
                description:
                  "We never compromise on the quality of our services and attention to detail.",
              },
              {
                title: "Sustainability",
                description:
                  "We use eco-friendly methods and sustainable practices to protect the environment.",
              },
              {
                title: "Customer Care",
                description:
                  "Your satisfaction is our priority. We go above and beyond to exceed expectations.",
              },
            ].map((value, index) => (
              <div key={index} className="card p-6">
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg bg-secondary-50 p-8">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">Why Choose</h2>
          <div className="space-y-4">
            {[
              "Professional staff with years of experience",
              "State-of-the-art cleaning equipment",
              "Eco-friendly and sustainable practices",
              "Quick turnaround times without compromising quality",
              "Competitive pricing with transparent billing",
              "Personalized service for each customer",
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <span className="mr-4 text-2xl text-secondary-600">✓</span>
                <span className="text-lg text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-12 rounded-lg bg-gradient-to-r from-primary-50 to-secondary-50 p-12 md:grid-cols-2">
          <div className="flex items-center justify-center">
            <div className="relative h-80 w-64 overflow-hidden rounded-lg bg-gray-200 shadow-lg">
              <img
                src="/founder.jpg"
                alt="Candida Mukami Kariuki"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center">
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
        </div>
      </div>
      <Footer />
    </>
  );
}
