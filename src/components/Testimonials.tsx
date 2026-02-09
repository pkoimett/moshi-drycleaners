export default function Testimonials() {
  const testimonials = [
    {
      name: "Geoffrey Kithunza",
      role: "Regular Customer",
      content:
        "Excellent service! My dress was cleaned perfectly and ready in 24 hours. Highly recommend!",
      rating: 5,
    },
    {
      name: "Mary Jepleting",
      role: "Business Owner",
      content:
        "Best dry cleaning service I've used. Professional, reliable, and great prices. Been a customer for 3 years!",
      rating: 5,
    },
    {
      name: "Dan Mwangi",
      role: "Customer",
      content:
        "They took amazing care of my wedding dress. I felt so confident and beautiful on my special day!",
      rating: 5,
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-safe">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
            What Our Customers Say
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Join thousands of satisfied customers who trust us with their garments.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card p-6">
              <div className="mb-4 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
              <p className="mb-4 text-gray-600 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
