const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/100 backdrop-blur-sm z-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
            <img 
              src="/images/logo.png" 
              alt="Mined.fi Logo" 
              className="h-10 w-40 object-contain"
            />
          </div>
          
          <div className="hidden md:flex items-right space-x-8">
            <a href="https://docs.mined.fi" target="_blank" className="text-gray-600 hover:text-gray-900">Docs</a>
          </div>

          <div className="flex items-center space-x-4">
            <a 
              href="mailto:minedfi@proton.me" 
              className="text-gray-600 hover:text-gray-900"
            >
              Contact Us
            </a>
            <a 
              href="https://t.me/minedfi" 
              target="_blank" 
              className="bg-[#1B3B36] text-white px-8 py-3 rounded-full hover:bg-[#2C524A] transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
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