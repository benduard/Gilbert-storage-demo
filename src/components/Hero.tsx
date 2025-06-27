export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="hero" className="relative pt-20">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1600518464441-9154a4dea21b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="Storage facility"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Gilbert's Storage
        </h1>
        <p className="mt-6 max-w-xl text-xl text-gray-100">
          Trusted Storage Solutions for Over 15 Years
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <button 
            onClick={() => scrollToSection('#units')}
            className="btn-primary"
          >
            Reserve Storage Units Online
          </button>
          <button 
            onClick={() => scrollToSection('#units')}
            className="btn-secondary bg-white/10 text-white border-white/30 hover:bg-white/20"
          >
            View Available Units
          </button>
        </div>
        <div className="mt-8">
          <ul className="space-y-4 text-lg text-white">
            <li className="flex items-center">
              <svg className="h-6 w-6 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              24/7 Secure Access
            </li>
            <li className="flex items-center">
              <svg className="h-6 w-6 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Climate-Controlled Units
            </li>
            <li className="flex items-center">
              <svg className="h-6 w-6 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Competitive Pricing
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}