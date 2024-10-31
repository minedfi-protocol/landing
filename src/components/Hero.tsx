import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background pattern - note the different positioning for mobile/desktop */}
      <div 
        className="absolute inset-0 z-0 bg-no-repeat opacity-95
          bg-contain bg-top md:bg-right md:bg-center"
        style={{
          backgroundImage: `url('/images/background.png')`
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0" />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-48">

        <div className="flex items-center justify-center md:justify-start space-x-2 mb-6">
          <span className="bg-black/5 px-4 py-1.5 rounded-full text-sm">
            Liquid Mining Tokens
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 max-w-4xl text-center md:text-left">
          Mining made Liquid
        </h1>

        <p className="text-xl text-gray-600 mb-12 max-w-2xl text-center md:text-left">
          Leading the crypto mining industry towards a more accessible and sustainable future.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto md:mx-0">
          <div className="flex-1">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1B3B36] focus:border-transparent"
              required
            />
          </div>
          <button
            type="submit" 
            className="bg-[#1B3B36] text-white px-8 py-3 rounded-full hover:bg-[#2C524A] transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          >
            Join the waitlist
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
