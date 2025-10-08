"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-16">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white tracking-wide">Opiqo</h2>
          <p className="text-sm text-gray-400 mt-1">
            Innovating Technology. Inspiring Possibilities.
          </p>
        </div>

        {/* Middle Section - Navigation */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="/" className="hover:text-white transition-colors">
           
          </a>
          <a href="/products" className="hover:text-white transition-colors">
            
          </a>
          <a href="/about" className="hover:text-white transition-colors">
           
          </a>
          <a href="/contact" className="hover:text-white transition-colors">
           
          </a>
        </div>

        {/* Right Section - Copyright */}
        <div className="text-sm text-gray-500 mt-4 md:mt-0">
          © {new Date().getFullYear()} <span className="text-white font-semibold">Opiqo</span>. All rights reserved.
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="mt-6 border-t border-gray-700 pt-4 text-center text-xs text-gray-500">
        Designed & Developed with ❤️ by Opiqo Team
      </div>
    </footer>
  );
}
