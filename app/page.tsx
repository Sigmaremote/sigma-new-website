import Container from '../components/Container';

export default function HomePage() {
  return (
    <div className="bg-white">
      <Container>
        <div className="py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
            Global Payroll Made Simple
          </h1>
          <p className="text-xl text-black/70 mb-8 max-w-3xl mx-auto">
            Hire and pay employees anywhere in the world with full compliance. 
            No entity setup required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/country-guides" 
              className="bg-[#D6FF57] text-black px-8 py-4 rounded-full font-semibold hover:brightness-95 transition-colors"
            >
              Explore Country Guides
            </a>
            <a 
              href="https://cal.com/globalpayroll/demo-25" 
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black text-black px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white transition-colors"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
