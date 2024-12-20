const Hero = () => {
  return (
    <section className="px-6 py-4 bg-gray-900 text-white">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <div className="flex-1 pr-8">
          <h1 className="text-3xl font-bold mb-5">
            Elevate Your <br />
            <span className="text-yellow-400">Crypto </span>
            <span className="text-orange-400"> Skills</span>
          </h1>
          <p className="text-sm mb-8">
            From promoting digital education and economic empowerment to creating cutting-edge technological solutions
          </p>
          <button className="px-6 py-2 bg-yellow-400 text-gray-900 rounded-full cursor-pointer text-lg">
            Join Academy
          </button>
        </div>
        <div className="flex-1 text-center">
          <img src="/crypto-coins.png" alt="Crypto Coins" className="w-72 h-96 rounded-full mx-auto" />
        </div>
      </div>
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-5">
          Crypto Experience with <span className="text-yellow-400">Our Dual Platform!</span>
        </h2>
        <p className="text-lg">
          Accelerate Your Learning Curve, Amplify Your Profits: Seamlessly Integrate Trading and Training for Optimal Results
        </p>
      </div>
    </section>
  );
};

export default Hero;
