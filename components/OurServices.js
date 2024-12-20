import React from 'react';

const OurServices = () => {
  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">
              Direct <span className="text-orange-500">Trading</span>
            </h3>
            <p className="text-gray-400">
              Trade directly in your local currencies (XOF, XAF, ...).
            </p>
          </div>
          {/* Service 2 */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">
              OTC <span className="text-orange-500">Exchange</span>
            </h3>
            <p className="text-gray-400">
              You are a trader; take advantage of our market platform and make maximum profits.
            </p>
          </div>
          {/* Service 3 */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">
              Do <span className="text-orange-500">Swap</span>
            </h3>
            <p className="text-gray-400">
              Benefit from unlimited access to your various cryptographic assets at a fraction of the cost.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;