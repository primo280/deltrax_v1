import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      title: 'Solid foundation',
      text: 'Deltrax transformed my trading experience. The platform’s advanced tools and supportive community have given me the confidence to make informed decisions and improve my trading strategies. Highly recommend!',
      name: 'Dennis Jacobs',
      location: 'Brunei Darussalam',
      image: '/2.png', 
    },
    {
      title: 'Perfect choice for trading',
      text: 'As a beginner, I found Deltrax incredibly user-friendly and educational. The comprehensive training resources and expert-led webinars made crypto trading simple and accessible for me. I couldn’t be happier!',
      name: 'George Nitzsche V',
      location: 'Uruguay',
      image: '/3.png',
    },
    {
      title: 'Efficient trading',
      text: 'The advanced charting tools and real-time market data on Deltrax have significantly improved my trading strategies. It’s the best platform I’ve used for staying ahead in the fast-paced crypto market.',
      name: 'Orlando Schuppe',
      location: 'Spain',
      image: '/4.png',
    },
    {
      title: 'Speechless with how easy this is',
      text: 'I love the 24/7 access to the Deltrax platform. It allows me to trade whenever I want, wherever I am. The reliability and security give me peace of mind, making my trading experience seamless and stress-free.',
      name: 'Karen Nelson',
      location: 'Cambodia',
      image: '/5.jpg',
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Trusted by customers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-lg shadow-lg text-left flex flex-col items-start"
            >
              <h3 className="text-xl font-bold mb-4">{testimonial.title}</h3>
              <p className="text-gray-400 mb-6">{testimonial.text}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="text-sm font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
