import React from 'react';

const About = () => {
  const hobbies = ['Reading', 'Podcast listening', 'Coding', 'Poetry'];
  
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold mb-6 text-primary-600 dark:text-primary-400">
              Who I Am
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Third-year IT student at K. J. Somaiya Institute of Information Technology with a passion for programming, software development, and problem-solving.
              </p>
              <p>
                I have experience in leading projects, working in teams, and creating solutions for real-world problems. I'm particularly interested in using technology for sustainability and inclusivity.
              </p>
              <p>
                Currently pursuing my BTech in Information Technology with IoT and Cloud Computing as a minor, maintaining a strong academic record with a CGPA of 9.85.
              </p>
            </div>
          </div>
          
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold mb-6 text-primary-600 dark:text-primary-400">
              Personal Details
            </h3>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <span className="font-medium text-gray-500 dark:text-gray-400">Location:</span>
                  <p>Thane, Maharashtra</p>
                </div>
                <div>
                  <span className="font-medium text-gray-500 dark:text-gray-400">Email:</span>
                  <p>Suhani29@somaiya.edu</p>
                </div>
                {/* <div>
                  <span className="font-medium text-gray-500 dark:text-gray-400">Phone:</span>
                  <p>9326379388</p>
                </div> */}
                <div>
                  <span className="font-medium text-gray-500 dark:text-gray-400">Current CGPA:</span>
                  <p className="text-primary-600 dark:text-primary-400 font-semibold">9.85</p>
                </div>
              </div>
              
              <div>
                <span className="font-medium text-gray-500 dark:text-gray-400 mb-3 block">Hobbies & Interests:</span>
                <div className="flex flex-wrap gap-2">
                  {hobbies.map((hobby, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                    >
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
