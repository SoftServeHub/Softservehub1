import logo from "../images/logo.webp";

export default function ContactPage() {
  return (
    <section className="bg-[#fffaf0] min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* PAGE HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#0f172a]">
            Get in <span className="text-[#D4AF37]">Touch</span>
          </h1>
          <p className="mt-6 text-[#475569] max-w-2xl mx-auto text-lg">
            Have a project in mind or need expert guidance?
            Our team is ready to help you build scalable digital solutions.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT – CONTACT INFO */}
          <div className="space-y-10">

            <div>
              <h3 className="text-2xl font-bold text-[#0f172a] mb-4">
                Contact Information
              </h3>
              <p className="text-[#475569]">
                Reach out to us through any of the following channels.
              </p>
            </div>

            <div className="space-y-6 text-[#0f172a]">
              <div>
                <p className="font-semibold">📍 Address</p>
                <p className="text-[#475569] mt-1  max-w-sm">
                  Chennai, Tamil Nadu, India
                </p>
              </div>

              <div>
                <p className="font-semibold">📞 Phone</p>
                <p className="text-[#475569] mt-1">
                  +91 63802 07061
                </p>
              </div>

              <div>
                <p className="font-semibold">✉️ Email</p>
                <p className="text-[#475569] mt-1">
                  contact@softservehub.com
                </p>
              </div>
            </div>

            {/* TRUST LINE */}
            <div className="rounded-2xl bg-white border border-[#D4AF37]/30 px-6 py-5 shadow-sm flex gap-4 items-start">
              <img
                src={logo}
                alt="SoftServe Hub"
                className="w-14 h-14 shrink-0 object-contain"
              />
              <div>
                <p className="font-semibold text-[#0f172a]">Trusted delivery partner</p>
                <p className="text-sm text-[#475569] mt-1">
                  Enterprise-grade IT, AI, and business services from Chennai to clients worldwide.
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT – FORM */}
          <div className="rounded-3xl bg-white border border-[#D4AF37]/25 shadow-[0_30px_80px_rgba(212,175,55,0.15)] p-10">

            <h3 className="text-2xl font-bold text-[#0f172a] mb-8">
              Send Us a Message
            </h3>

            <form className="space-y-6">

              <div>
                <label className="block text-sm font-medium text-[#0f172a]">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0f172a]">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0f172a]">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91"
                  className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0f172a]">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your project"
                  className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-[#D4AF37] py-3 font-semibold text-black hover:scale-[1.02] transition"
              >
                Submit Inquiry
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
