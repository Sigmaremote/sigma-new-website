import Image from 'next/image';

export default function BusinessFeatures() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Headline */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-near-black mb-4">
            Sigma is designed for businesses powered by global emerging talent
          </h2>
        </div>

        {/* Three Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Column 1: Hire in Minutes */}
          <div className="text-center">
            <div className="mb-6">
              <Image
                src="/landing-page-images/Sigma is designed for businesses part/image1.avif"
                alt="Hire in Minutes - Onboard contractors and employees quickly via WhatsApp"
                width={400}
                height={300}
                className="w-full h-auto rounded-lg shadow-lg mx-auto"
              />
            </div>
            <h3 className="text-2xl font-bold text-near-black mb-4">
              Hire in Minutes
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Onboard contractors and employees quickly via WhatsApp while staying compliant.
            </p>
          </div>

          {/* Column 2: Your Pay, Their Way */}
          <div className="text-center">
            <div className="mb-6">
              <Image
                src="/landing-page-images/Sigma is designed for businesses part/image2.avif"
                alt="Your Pay, Their Way - Run payroll via US ACH with flexible payment options"
                width={400}
                height={300}
                className="w-full h-auto rounded-lg shadow-lg mx-auto"
              />
            </div>
            <h3 className="text-2xl font-bold text-near-black mb-4">
              Your Pay, Their Way
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Run payroll via US ACH as you're used to, while workers save in USD or send funds home as they choose. Crypto or bank transfer, it's their choice.
            </p>
          </div>

          {/* Column 3: Master IRS Compliance */}
          <div className="text-center">
            <div className="mb-6">
              <Image
                src="/landing-page-images/Sigma is designed for businesses part/image3.avif"
                alt="Master IRS Compliance - Manage W-8BEN forms and ITIN requirements with AI"
                width={400}
                height={300}
                className="w-full h-auto rounded-lg shadow-lg mx-auto"
              />
            </div>
            <h3 className="text-2xl font-bold text-near-black mb-4">
              Master IRS Compliance
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              We manage W-8BEN forms for foreign contractors and use AI to check for US ITINs to handle W-7 requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
