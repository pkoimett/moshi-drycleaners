import Link from "next/link";

export default function CTA() {
  return (
    <section className="gradient-secondary relative overflow-hidden py-20 text-white sm:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-secondary-400 opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-secondary-300 opacity-20 blur-3xl"></div>
      </div>

      <div className="container-safe relative z-10 text-center">
        <h2 className="mb-6 text-4xl font-bold sm:text-5xl">
          Ready to Experience Premium Care?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
          Get your garments the professional care they deserve. Contact us today
          for a free quote!
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link href="/contact" className="btn-primary">
            Contact Us Now
          </Link>
          <a href="tel:+254724280818" className="btn-outline">
            Call: +254 724 280 818
          </a>
        </div>
      </div>
    </section>
  );
}
