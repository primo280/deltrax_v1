import React from 'react';

const Services = () => {
  return (
    <div className="bg-gray-900 text-white py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Our services</h2>
      <div className="flex justify-center items-start space-x-10">
        
        <div className="flex flex-col items-center text-center w-1/3">
          
          <h3 className="text-2xl font-semibold">
            Direct <span className="text-orange-500">Trading</span>
          </h3>
          <p className="mt-4 text-gray-300">
            Trade directly in your local currencies (XOF, XAF, ...).
          </p> 
          <img
            src="/img1.png"
            alt="Direct Trading"
            className="w-20 h-20 mb-6"
          />
        </div>

      
        <div className="flex flex-col items-center text-center w-1/3">
          
          <h3 className="text-2xl font-semibold">
            OTC <span className="text-orange-500">Exchange</span>
          </h3>
          <p className="mt-4 text-gray-300">
            You are a trader; take advantage of our market platform and make
            maximum profits.
          </p>
          <img
            src="/img2.png"
            alt="OTC Exchange"
            className="w-20 h-20 mb-6"
          />
        </div>

        
        <div className="flex flex-col items-center text-center w-1/3">
          
          <h3 className="text-2xl font-semibold">
            Do <span className="text-orange-500">Swap</span>
          </h3>
          <p className="mt-4 text-gray-300">
            Benefit from unlimited access to your various cryptographic assets
            at a fraction of the cost.
          </p>
          <img
            src="/img3.png"
            alt="OTC Exchange"
            className="w-20 h-20 mb-6"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
