const Hero = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 z-0"

        style={{
          backgroundImage: `url('/images/background.png')`,
          backgroundSize: 'contain',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.95
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0" />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-48">
        <div className="flex items-center space-x-2 mb-6">
          <span className="bg-black/5 px-4 py-1.5 rounded-full text-sm">
            Liquid Mining Tokens
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 max-w-4xl">
          Mining made Liquid
        </h1>

        <p className="text-xl text-gray-600 mb-12 max-w-2xl">
          Leading the crypto mining industry towards a more accessible and sustainable future.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 max-w-md">
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
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;