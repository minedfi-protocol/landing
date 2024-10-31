const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/100 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center">
            <img 
              src="/images/logo.png" 
              alt="Mined.fi Logo" 
              className="h-10 w-auto object-contain"
            />
          </div>
          
          {/* Right-aligned Menu Items */}
          <div className="flex items-center space-x-8">
            {/* Documentation and Contact Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a 
                href="https://docs.mined.fi" 
                target="_blank" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Docs
              </a>
              <a 
                href="mailto:minedfi@proton.me" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Contact Us
              </a>
            </div>

            {/* CTA Button */}
            <a 
              href="https://t.me/minedfi" 
              target="_blank" 
              className="bg-[#1B3B36] text-white px-8 py-3 rounded-full hover:bg-[#2C524A] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Join the community
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
