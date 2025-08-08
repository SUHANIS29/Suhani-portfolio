import React from 'react';

const Education = () => {
  const education = [
    {
      degree: 'BTech in Information Technology',
      institution: 'K. J. Somaiya Institute of Information Technology, Sion',
      duration: '2023 - 2027',
      grade: 'CGPA: 9.85 (3 semesters)',
      details: 'Specialization in IoT and Cloud Computing as minor',
      status: 'Current'
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Shri Sushilkumar Thirani Jr. College',
      duration: '2023',
      grade: '93.33%',
      details: 'Subjects: PCMB + IT (optional)',
      status: 'Completed'
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Shrimati Savitridevi Thirani Vidyamandir',
      duration: '2021',
      grade: '99.20%',
      details: 'Active participant in extracurricular activities including elocution and poetry competitions',
      status: 'Completed'
    }
  ];

  const extracurriculars = [
    { role: 'Technical Member', organization: 'ISTE', duration: 'Aug 2023 - 2024' },
    { role: 'Technical Member', organization: 'GDSC', duration: 'Aug 2023 - 2024' }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </div>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg animate-slide-up relative overflow-hidden"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className={`absolute top-0 right-0 px-4 py-2 text-sm font-medium rounded-bl-lg ${
                edu.status === 'Current' 
                  ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' 
                  : 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
              }`}>
                {edu.status}
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {edu.details}
                  </p>
                </div>
                
                <div className="text-right">
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    {edu.duration}
                  </p>
                  <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    {edu.grade}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Extracurricular Activities</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {extracurriculars.map((activity, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg text-center animate-slide-up"
                style={{animationDelay: `${(index + 3) * 0.2}s`}}
              >
                <h4 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-2">
                  {activity.role}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-2">{activity.organization}</p>
                <p className="text-gray-500 dark:text-gray-400">{activity.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
