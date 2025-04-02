export default function SpecialOffers() {
  const offers = [
    {
      title: "First Month Free",
      description: "New customers get their first month free when signing a 6-month contract",
      code: "GILBERT15"
    },
    {
      title: "Military Discount",
      description: "15% off monthly rates for active military and veterans",
      code: "MILITARY15"
    },
    {
      title: "Student Special",
      description: "10% off with valid student ID for the entire school year",
      code: "STUDENT10"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Special Offers
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Take advantage of these limited-time promotions to save on your storage needs
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div key={index} className="bg-gray-50 border border-secondary border-opacity-20 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-secondary bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center text-gray-900 mb-2">
                {offer.title}
              </h3>
              <p className="text-center text-gray-600 mb-4">
                {offer.description}
              </p>
              <div className="bg-gray-100 rounded p-2 text-center">
                <span className="text-sm text-gray-500">Use code:</span>
                <span className="block font-bold text-primary">{offer.code}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm">
            *Terms and conditions apply. Offers cannot be combined with other promotions.
          </p>
        </div>
      </div>
    </section>
  );
}