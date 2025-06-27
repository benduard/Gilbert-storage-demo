export default function FeaturedUnits() {
  const units = [
    {
      id: 1,
      size: "5' x 10'",
      price: 65,
      description: "50 sq ft - Perfect for small furniture and seasonal items.",
      location: "400 Bizzell St, College Station, TX",
      image: "/Storage-images/5x10.jpg",
      isClimateControlled: true,
      availability: "LAST UNIT"
    },
    {
      id: 2,
      size: "10' x 10'",
      price: 120,
      description: "100 sq ft - Ideal for a 1-bedroom apartment.",
      location: "400 Bizzell St, College Station, TX",
      image: "/Storage-images/10x10.jpg",
      isClimateControlled: true,
      availability: "2 UNITS LEFT"
    },
    {
      id: 3,
      size: "10' x 20'",
      price: 195,
      description: "200 sq ft - Great for 3-4 bedroom house contents.",
      location: "400 Bizzell St, College Station, TX",
      image: "/Storage-images/10x20.jpg",
      isClimateControlled: true,
      availability: "AVAILABLE"
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="units" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">
          Featured Self Storage Units
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {units.map((unit) => (
            <div key={unit.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <div className="relative">
                <img 
                  src={unit.image}
                  alt={`${unit.size} storage unit`} 
                  className="w-full h-64 object-cover" 
                />
                {unit.availability && (
                  <span className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {unit.availability}
                  </span>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary">{unit.size}</h3>
                    <p className="text-gray-600">{unit.description}</p>
                    <p className="text-sm text-gray-500 mt-2">{unit.location}</p>
                  </div>
                  <p className="text-2xl font-bold text-secondary">${unit.price}/mo</p>
                </div>
                {unit.isClimateControlled && (
                  <p className="text-sm text-gray-600 mb-4">
                    <span className="inline-block w-3 h-3 bg-secondary rounded-full mr-2"></span>
                    Climate Controlled
                  </p>
                )}
                <button 
                  onClick={() => scrollToSection('#contact')}
                  className="w-full btn-primary"
                >
                  Reserve Now
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button 
            onClick={() => scrollToSection('#contact')}
            className="btn-secondary"
          >
            View All Units
          </button>
        </div>
      </div>
    </section>
  );
}