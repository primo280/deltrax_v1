import React from 'react';

const DeltraxComponent = () => {
  return (
    <div className="flex justify-between bg-gray-900 text-white p-10">
      
      <div className="w-1/2 pr-5 flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold">
          Deltrax <span className="text-orange-500">Academy</span>
        </h2>
        <p className="mt-4 text-lg">
          Our training academy offers a meticulously crafted curriculum designed
          to equip you with the knowledge and skills needed to navigate the complexities of the financial markets.
        </p>
        <ul className="mt-6 space-y-4">
          <li>✅ Robust Curriculum: Fundamental & technical analysis, risk management, advanced strategies.</li>
          <li>✅ Seasoned Instructors: Learn from experienced professionals in the financial industry.</li>
          <li>✅ Interactive Experience: Live webinars, quizzes, and practical exercises for hands-on learning.</li>
        </ul>
        <button className="mt-6 bg-yellow-400 text-black font-semibold py-2 px-4 rounded hover:bg-yellow-500">
          Know more
        </button>
        <p className="mt-4 font-semibold">Join us</p>
      </div>

      <div className="w-1 bg-gray-700 mx-5"></div>

      <div className="w-1/2 pl-5 flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold">
          Deltrax <span className="text-orange-500">Trading</span>
        </h2>
        <p className="mt-4 text-lg">
          Our training academy offers a meticulously crafted curriculum designed
          to equip you with the knowledge and skills needed to navigate the complexities of the financial markets.
        </p>
        <ul className="mt-6 space-y-4">
          <li>✅ Robust Curriculum: Fundamental & technical analysis, risk management, advanced strategies.</li>
          <li>✅ Seasoned Instructors: Learn from experienced professionals in the financial industry.</li>
          <li>✅ Interactive Experience: Live webinars, quizzes, and practical exercises for hands-on learning.</li>
        </ul>
        <button className="mt-6 bg-yellow-400 text-black font-semibold py-2 px-4 rounded hover:bg-yellow-500">
          Know more
        </button>
        <p className="mt-4 font-semibold">Join us</p>
      </div>
    </div>
  );
};

export default DeltraxComponent;
