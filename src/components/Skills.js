import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS'],
      color: 'bg-blue-500'
    },
    {
      title: 'Backend Development',
      skills: ['Java', 'Python', 'Django', 'MongoDB', 'MySQL'],
      color: 'bg-green-500'
    },
    {
      title: 'Data & Analytics',
      skills: ['Microsoft Excel', 'Power BI', 'Machine Learning', 'Web Scraping'],
      color: 'bg-purple-500'
    },
    {
      title: 'Tools & Technologies',
      skills: ['Streamlit', 'Canva', 'PowerPoint', 'Git', 'Cloud Computing'],
      color: 'bg-orange-500'
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg card-hover animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`w-12 h-12 ${category.color} rounded-lg mb-4 flex items-center justify-center`}>
                <span className="text-white text-xl font-bold">
                  {category.title.charAt(0)}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
