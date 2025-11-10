import { ArrowDown } from 'lucide-react';
import profileImage from '../assets/meee.jpg';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold text-black leading-tight">
              Mhyles Marinas
              </h1>
              <div className="space-y-2">
                <p className="text-lg text-gray-600 max-w-md">
                  {personalInfo.subtitle}
                </p>
                <p className="text-sm text-gray-500 uppercase tracking-wider">
                  Portfolio 2025
                </p>
              </div>
            </div>

            {/* Navigation Menu */}
            <div className="space-y-4">
              <div className="flex flex-col space-y-2">
                <div className="w-8 h-0.5 bg-black"></div>
                <div className="w-6 h-0.5 bg-black"></div>
                <div className="w-4 h-0.5 bg-black"></div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-6 flex items-center space-x-2">
              <ArrowDown size={16} className="text-gray-400" />
              <span className="text-xs text-gray-400 uppercase tracking-wider">Scroll</span>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative">
              {/* Red accent background */}
              <div className="absolute inset-0 bg-red-500 transform translate-x-4 translate-y-4 rounded-lg"></div>
              
              {/* Profile image */}
              <div className="relative bg-white rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={profileImage} 
                  alt={personalInfo.name} 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Side text */}
            <div className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 -rotate-90 origin-center">
              <div className="flex items-center space-x-4 text-xs text-gray-400 uppercase tracking-wider whitespace-nowrap">
                <span>Creative</span>
                <span>Developer</span>
                <span>Designer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

