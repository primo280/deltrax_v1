import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Deltrax?",
      answer:
        "Deltrax is a comprehensive platform designed to streamline your cryptocurrency trading experience. It offers a range of tools and features to help both beginners and experienced traders navigate the crypto markets with confidence.",
    },
    {
      question: "What services does Deltrax provide?",
      answer:
        "Deltrax provides services like direct trading, OTC exchange, and crypto asset swapping. Its features are tailored to meet the needs of traders at all levels.",
    },
    {
      question: "Is Deltrax available on mobile devices?",
      answer:
        "Yes, Deltrax is fully accessible on mobile devices, allowing you to trade anytime and anywhere.",
    },
    {
      question: "How secure is Deltrax?",
      answer:
        "Deltrax prioritizes security with advanced encryption and multi-factor authentication to protect your assets and data.",
    },
    {
      question: "Can I trade multiple cryptocurrencies on Deltrax?",
      answer:
        "Absolutely! Deltrax supports trading in a wide variety of cryptocurrencies to suit your investment preferences.",
    },
    {
      question: "Does Deltrax offer customer support?",
      answer:
        "Yes, Deltrax provides 24/7 customer support to assist you with any issues or queries you may have.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">FAQs</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border ${
                openIndex === index ? "border-blue-500" : "border-gray-800"
              } rounded-lg`}
            >
              <button
                className="w-full text-left flex justify-between items-center p-4 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <span
                  className={`transform transition-transform ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                >
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-4 bg-gray-800 text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
