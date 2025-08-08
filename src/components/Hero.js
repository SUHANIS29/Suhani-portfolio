import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto mb-8 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full flex items-center justify-center text-6xl font-bold text-white">
              S
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Suhani Suryawanshi</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Aspiring Software Developer passionate about creating innovative solutions with technology
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-600 hover:text-white transition-colors font-medium"
            >
              View My Work
            </a>
          </div>
          
          <div className="flex justify-center space-x-6 mt-12">
            <a
              href="https://www.linkedin.com/in/suhani-s-3a23b62a9/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-2xl transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/SUHANIS29"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-2xl transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
