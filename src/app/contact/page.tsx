import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Moshi Drycleaners Limited. We're here to help!",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <div className="container-safe section-padding">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-bold text-gray-900">Contact Us</h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Have questions? We'd love to hear from you. Get in touch with our
            team today!
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 font-semibold text-gray-900">Phone</h3>
                <a
                  href="tel:+254780610072"
                  className="text-primary-600 hover:text-primary-700"
                >
                  +254 780 610 072
                </a>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-gray-900">Email</h3>
                <a
                  href="mailto:info@moshidrycleaners.co.ke"
                  className="text-primary-600 hover:text-primary-700"
                >
                  info@moshidrycleaners.co.ke
                </a>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-gray-900">Address</h3>
                <p className="text-gray-600">
                  Nairobi, Kenya
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-gray-900">Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: 8:00 AM - 6:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          <div className="card p-8">
            <form className="space-y-4">
              <div>
                <label className="mb-2 block font-semibold text-gray-900">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus-visible:outline-primary-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-2 block font-semibold text-gray-900">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus-visible:outline-primary-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="mb-2 block font-semibold text-gray-900">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus-visible:outline-primary-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
