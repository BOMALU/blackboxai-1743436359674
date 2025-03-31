import React from 'react';
import { FaWifi, FaUtensils, FaSwimmingPool, FaParking, FaTv } from 'react-icons/fa';

const HomePage = () => {
  const features = [
    { icon: <FaWifi className="text-3xl" />, title: "High-Speed WiFi", desc: "Uninterrupted connectivity throughout the hostel" },
    { icon: <FaUtensils className="text-3xl" />, title: "Quality Meals", desc: "Nutritious and delicious food served daily" },
    { icon: <FaSwimmingPool className="text-3xl" />, title: "Swimming Pool", desc: "Refreshing pool for relaxation and exercise" },
    { icon: <FaParking className="text-3xl" />, title: "Secure Parking", desc: "24/7 monitored parking facility" },
    { icon: <FaTv className="text-3xl" />, title: "Entertainment", desc: "Common TV lounge with streaming services" }
  ];

  const testimonials = [
    { name: "Alex Johnson", role: "Student", quote: "The best hostel experience with premium amenities!" },
    { name: "Sarah Williams", role: "Intern", quote: "Clean, comfortable and feels like home away from home." },
    { name: "Michael Chen", role: "Researcher", quote: "Excellent management and modern facilities." }
  ];

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-r from-indigo-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg')] bg-cover bg-center opacity-30"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 slide-up">
            Premium Student <span className="text-yellow-400">Accommodation</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto slide-up">
            Experience modern living with all amenities included in one affordable package
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 slide-up">
            <a 
              href="/register" 
              className="btn-primary inline-block text-center"
            >
              Book Now
            </a>
            <a 
              href="/rooms" 
              className="btn-secondary inline-block text-center"
            >
              View Rooms
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="max-width px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Premium Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide everything you need for comfortable and productive living
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card p-6 text-center hover:border-indigo-500 border border-transparent transition-all">
                <div className="text-indigo-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-width px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Residents Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from students and professionals who've experienced our premium service
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-8 relative">
                <div className="absolute top-0 left-8 -mt-4 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  ★★★★★
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-width px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Premium Hostel Living?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Limited rooms available for the upcoming semester. Secure your spot today!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/register" 
              className="btn-accent inline-block"
            >
              Apply Now
            </a>
            <a 
              href="/rooms" 
              className="btn-secondary inline-block bg-white bg-opacity-10 hover:bg-opacity-20 border-white border-opacity-30"
            >
              Virtual Tour
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;