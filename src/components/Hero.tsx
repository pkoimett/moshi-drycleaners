import Link from "next/link";

export default function Hero() {
  return (
    <section className="gradient-primary relative overflow-hidden py-20 text-white sm:py-32 lg:py-40">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-primary-400 opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary-300 opacity-20 blur-3xl"></div>
      </div>

      <div className="container-safe relative z-10">
        <div className="max-w-3xl">
          <h1 className="mb-6 text-5xl font-bold leading-tight sm:text-6xl">
            Premium Dry Cleaning & Laundry Services
          </h1>
          <p className="mb-8 text-lg opacity-90 sm:text-xl">
            Professional garment care with eco-friendly practices. Fast
            turnaround, expert attention to detail, and customer satisfaction
            guaranteed.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/services" className="btn-primary">
              View Our Services
            </Link>
            <Link href="/contact" className="btn-outline">
              Get a Quote Today
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              { number: "10+", label: "Years Experience" },
              { number: "5000+", label: "Happy Customers" },
              { number: "24hr", label: "Fast Turnaround" },
            ].map((item, index) => (
              <div key={index}>
                <div className="text-3xl font-bold">{item.number}</div>
                <div className="text-sm opacity-80">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
