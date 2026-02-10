import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="container-safe py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-gray-900">
              Moshi Drycleaners Limited
            </h3>
            <p className="text-sm text-gray-600">
              Premium dry cleaning and laundry services with eco-friendly
              practices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold text-gray-900">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-primary-600">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-primary-600"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-primary-600"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-primary-600"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-semibold text-gray-900">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-primary-600">
                  Dry Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary-600">
                  Shirt Laundry
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary-600">
                  Alterations
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary-600">
                  Special Care
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-semibold text-gray-900">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="tel:+254780610072" className="hover:text-primary-600">
                  +254 780 610 072
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@moshidrycleaners.co.ke"
                  className="hover:text-primary-600"
                >
                  info@moshidrycleaners.co.ke
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-600">
              © 2024 Moshi Drycleaners Limited. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-sm text-gray-600 hover:text-primary-600">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-primary-600">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
