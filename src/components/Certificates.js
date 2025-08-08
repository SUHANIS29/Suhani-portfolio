// // import React from 'react';

// // const Certificates = () => {
// //   const certificates = [
// //     {
// //       title: 'JAVA Training Certificate',
// //       issuer: 'IIT Bombay',
// //       year: '2023',
// //       type: 'Programming',
// //       description: 'Comprehensive Java programming course covering OOP concepts and application development'
// //     },
// //     {
// //       title: 'C Programming Certificate',
// //       issuer: 'IIT Bombay',
// //       year: '2023',
// //       type: 'Programming',
// //       description: 'Fundamental C programming concepts and problem-solving techniques'
// //     },
// //     {
// //       title: 'Introduction to Generative AI',
// //       issuer: 'Google Cloud',
// //       year: '2024',
// //       type: 'AI/ML',
// //       description: 'Understanding generative AI concepts and applications in modern technology'
// //     },
// //     {
// //       title: 'Internet of Things (IoT)',
// //       issuer: 'Infosys',
// //       year: '2024',
// //       type: 'Technology',
// //       description: 'IoT fundamentals, device connectivity, and smart system development'
// //     },
// //     {
// //       title: 'Young Professionals Program',
// //       issuer: 'TCS ION',
// //       year: '2024',
// //       type: 'Professional Development',
// //       description: 'Professional skills development and industry readiness program'
// //     }
// //   ];

// //   const getCertificateIcon = (type) => {
// //     switch(type) {
// //       case 'Programming': return '💻';
// //       case 'AI/ML': return '🤖';
// //       case 'Technology': return '🔧';
// //       case 'Professional Development': return '📈';
// //       default: return '🏆';
// //     }
// //   };

// //   const getCertificateColor = (type) => {
// //     switch(type) {
// //       case 'Programming': return 'bg-blue-500';
// //       case 'AI/ML': return 'bg-purple-500';
// //       case 'Technology': return 'bg-green-500';
// //       case 'Professional Development': return 'bg-orange-500';
// //       default: return 'bg-gray-500';
// //     }
// //   };

// //   return (
// //     <section id="certificates" className="py-20 bg-gray-50 dark:bg-gray-800">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="text-center mb-16">
// //           <h2 className="text-3xl md:text-4xl font-bold mb-4">Certificates & Achievements</h2>
// //           <div className="w-20 h-1 bg-primary-600 mx-auto mb-4"></div>
// //           <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
// //             Professional certifications and training programs that showcase my commitment to continuous learning
// //           </p>
// //         </div>
        
// //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// //           {certificates.map((cert, index) => (
// //             <div
// //               key={index}
// //               className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden card-hover animate-slide-up"
// //               style={{animationDelay: `${index * 0.1}s`}}
// //             >
// //               <div className="p-6">
// //                 <div className="flex items-center justify-between mb-4">
// //                   <div className={`w-12 h-12 ${getCertificateColor(cert.type)} rounded-lg flex items-center justify-center text-2xl`}>
// //                     {getCertificateIcon(cert.type)}
// //                   </div>
// //                   <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
// //                     {cert.year}
// //                   </span>
// //                 </div>
                
// //                 <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
// //                   {cert.title}
// //                 </h3>
                
// //                 <p className="text-primary-600 dark:text-primary-400 font-semibold mb-3">
// //                   {cert.issuer}
// //                 </p>
                
// //                 <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
// //                   {cert.description}
// //                 </p>
                
// //                 <div className="flex items-center justify-between">
// //                   <span className={`px-3 py-1 ${getCertificateColor(cert.type)} bg-opacity-20 text-sm font-medium rounded-full`}>
// //                     {cert.type}
// //                   </span>
// //                   <button className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm">
// //                     View Details →
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
        
// //         <div className="mt-16 text-center">
// //           <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
// //             <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
// //               Continuous Learning Journey
// //             </h3>
// //             <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
// //               I believe in staying updated with the latest technologies and industry trends. 
// //               These certifications represent my commitment to professional growth and my passion 
// //               for learning new skills that can contribute to innovative solutions.
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Certificates;
// import React from 'react';

// const Certificates = () => {
//   const certificates = [
//     {
//       title: 'JAVA Training Certificate',
//       issuer: 'IIT Bombay',
//       year: '2023',
//       type: 'Programming',
//       description: 'Comprehensive Java programming course covering OOP concepts and application development',
//       credentialLink: 'https://certificates.iitbombay.edu/java-training-certificate', // Add actual link
//       verifyLink: 'https://verify.iitbombay.edu/cert/12345', // Add verification link
//       skills: ['Java', 'OOP', 'Data Structures', 'Problem Solving']
//     },
//     {
//       title: 'C Programming Certificate',
//       issuer: 'IIT Bombay',
//       year: '2023',
//       type: 'Programming',
//       description: 'Fundamental C programming concepts and problem-solving techniques',
//       credentialLink: 'https://certificates.iitbombay.edu/c-programming-certificate',
//       verifyLink: 'https://verify.iitbombay.edu/cert/12346',
//       skills: ['C Programming', 'Algorithms', 'Memory Management', 'System Programming']
//     },
//     {
//       title: 'Introduction to Generative AI',
//       issuer: 'Google Cloud',
//       year: '2024',
//       type: 'AI/ML',
//       description: 'Understanding generative AI concepts and applications in modern technology',
//       credentialLink: 'https://cloud.google.com/certification/generative-ai-intro',
//       verifyLink: 'https://googlecloudcerts.credential.net/12345',
//       skills: ['Generative AI', 'Machine Learning', 'Cloud Computing', 'AI Ethics']
//     },
//     {
//       title: 'Internet of Things (IoT)',
//       issuer: 'Infosys',
//       year: '2024',
//       type: 'Technology',
//       description: 'IoT fundamentals, device connectivity, and smart system development',
//       credentialLink: 'https://infosys.com/certification/iot-fundamentals',
//       verifyLink: 'https://verify.infosys.com/cert/iot-12345',
//       skills: ['IoT Architecture', 'Sensor Networks', 'Embedded Systems', 'Data Analytics']
//     },
//     {
//       title: 'Young Professionals Program',
//       issuer: 'TCS ION',
//       year: '2024',
//       type: 'Professional Development',
//       description: 'Professional skills development and industry readiness program',
//       credentialLink: 'https://ion.tcs.com/young-professionals-program',
//       verifyLink: 'https://verify.tcsion.com/cert/ypp-12345',
//       skills: ['Leadership', 'Communication', 'Project Management', 'Industry Insights']
//     }
//   ];

//   const getCertificateIcon = (type) => {
//     switch(type) {
//       case 'Programming': return '💻';
//       case 'AI/ML': return '🤖';
//       case 'Technology': return '🔧';
//       case 'Professional Development': return '📈';
//       default: return '🏆';
//     }
//   };

//   const getCertificateGradient = (type) => {
//     switch(type) {
//       case 'Programming': return 'from-blue-500 to-indigo-600';
//       case 'AI/ML': return 'from-purple-500 to-pink-600';
//       case 'Technology': return 'from-green-500 to-teal-600';
//       case 'Professional Development': return 'from-orange-500 to-red-600';
//       default: return 'from-gray-500 to-gray-600';
//     }
//   };

//   const handleCertificateClick = (cert) => {
//     if (cert.credentialLink) {
//       window.open(cert.credentialLink, '_blank');
//     }
//   };

//   return (
//     <section id="certificates" className="py-20 bg-gray-50 dark:bg-gray-800 matrix-bg relative">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-6xl font-bold mb-4 gradient-text-primary">
//             Certificates & Achievements
//           </h2>
//           <div className="w-24 h-2 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-8"></div>
//           <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//             Professional certifications validating my expertise and continuous learning journey
//           </p>
//         </div>
        
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {certificates.map((cert, index) => (
//             <div
//               key={index}
//               onClick={() => handleCertificateClick(cert)}
//               className="clickable-card card-3d bg-white dark:bg-gray-700 rounded-2xl shadow-xl overflow-hidden animate-slide-up spotlight"
//               style={{animationDelay: `${index * 0.1}s`}}
//             >
//               {/* Link Indicator */}
//               <div className="link-indicator">
//                 <i className="fas fa-certificate"></i>
//               </div>
              
//               <div className="p-6 relative">
//                 <div className="flex items-center justify-between mb-4">
//                   <div className={`w-16 h-16 bg-gradient-to-br ${getCertificateGradient(cert.type)} rounded-2xl flex items-center justify-center text-3xl shadow-lg floating`}>
//                     {getCertificateIcon(cert.type)}
//                   </div>
//                   <div className="text-right">
//                     <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
//                       {cert.year}
//                     </span>
//                     <div className="w-2 h-2 bg-green-500 rounded-full ml-auto mt-1 animate-pulse"></div>
//                   </div>
//                 </div>
                
//                 <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white text-shadow">
//                   {cert.title}
//                 </h3>
                
//                 <p className={`text-transparent bg-gradient-to-r ${getCertificateGradient(cert.type)} bg-clip-text font-semibold mb-3`}>
//                   {cert.issuer}
//                 </p>
                
//                 <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
//                   {cert.description}
//                 </p>
                
//                 {/* Skills Tags */}
//                 <div className="mb-4">
//                   <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">
//                     SKILLS GAINED:
//                   </h4>
//                   <div className="flex flex-wrap gap-1">
//                     {cert.skills.map((skill, skillIndex) => (
//                       <span
//                         key={skillIndex}
//                         className={`px-2 py-1 bg-gradient-to-r ${getCertificateGradient(cert.type)} bg-opacity-10 text-xs font-medium rounded-full border border-opacity-20`}
//                         style={{
//                           borderColor: cert.type === 'Programming' ? '#3b82f6' :
//                                      cert.type === 'AI/ML' ? '#8b5cf6' :
//                                      cert.type === 'Technology' ? '#10b981' : '#f59e0b'
//                         }}
//                       >
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
                
//                 {/* Action Buttons */}
//                 <div className="flex gap-2 pt-4 border-t border-gray-200 dark:border-gray-600">
//                   <button 
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       if (cert.credentialLink) window.open(cert.credentialLink, '_blank');
//                     }}
//                     className="flex-1 btn-cyber px-3 py-2 rounded-lg text-xs"
//                   >
//                     <i className="fas fa-external-link-alt mr-1"></i>
//                     View Certificate
//                   </button>
//                   <button 
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       if (cert.verifyLink) window.open(cert.verifyLink, '_blank');
//                     }}
//                     className="px-3 py-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900 text-green-700 dark:text-green-300 rounded-lg hover:from-green-200 hover:to-emerald-200 dark:hover:from-green-800 dark:hover:to-emerald-800 transition-all text-xs font-medium"
//                   >
//                     <i className="fas fa-check-circle mr-1"></i>
//                     Verify
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         <div className="mt-16 text-center">
//           <div className="bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-xl holographic">
//             <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white neon-glow">
//               Continuous Learning Journey
//             </h3>
//             <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
//               I believe in staying updated with the latest technologies and industry trends. 
//               These certifications represent my commitment to professional growth and my passion 
//               for learning new skills that contribute to innovative solutions.
//             </p>
//             <div className="flex flex-wrap justify-center gap-3">
//               {['Java', 'C Programming', 'Cloud Computing', 'IoT', 'AI/ML', 'Professional Development'].map((skill, index) => (
//                 <span 
//                   key={index} 
//                   className="px-4 py-2 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-all cursor-pointer interactive"
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>
            
//             <div className="mt-8">
//               <a
//                 href="https://linkedin.com/in/suhani-suryawanshi" // Replace with actual LinkedIn
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="btn-primary inline-flex items-center"
//               >
//                 <i className="fab fa-linkedin mr-2"></i>
//                 View All Certifications
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Certificates;
import React from 'react';

const Certificates = () => {
  const certificates = [
    {
      title: 'JAVA Training Certificate',
      issuer: 'IIT Bombay',
      year: '2023',
      type: 'Programming',
      description: 'Comprehensive Java programming course covering OOP concepts and application development',
      credentialLink: 'https://certificates.iitbombay.edu/java-training-certificate',
      verifyLink: 'https://verify.iitbombay.edu/cert/12345',
      skills: ['Java', 'OOP', 'Data Structures', 'Problem Solving']
    },
    {
      title: 'C Programming Certificate',
      issuer: 'IIT Bombay',
      year: '2023',
      type: 'Programming',
      description: 'Fundamental C programming concepts and problem-solving techniques',
      credentialLink: 'https://media.licdn.com/dms/image/v2/D4D2DAQHloKiuSMbPww/profile-treasury-document-cover-images_480/B4DZbNus6DHABA-/0/1747208296271?e=1755295200&v=beta&t=WQ0rSgHGahHFqsI-OFRkfS1sO1fFH03BlKPAdQoKtro',
      // verifyLink: 'https://verify.iitbombay.edu/cert/12346',
      skills: ['C Programming', 'Algorithms', 'Memory Management', 'System Programming']
    },
    {
      title: 'Introduction to Generative AI',
      issuer: 'Google Cloud',
      year: '2024',
      type: 'AI/ML',
      description: 'Understanding generative AI concepts and applications in modern technology',
      credentialLink: 'https://cloud.google.com/certification/generative-ai-intro',
      verifyLink: 'https://googlecloudcerts.credential.net/12345',
      skills: ['Generative AI', 'Machine Learning', 'Cloud Computing', 'AI Ethics']
    },
    {
      title: 'Internet of Things (IoT)',
      issuer: 'Infosys',
      year: '2024',
      type: 'Technology',
      description: 'IoT fundamentals, device connectivity, and smart system development',
      credentialLink: 'https://infosys.com/certification/iot-fundamentals',
      verifyLink: 'https://verify.infosys.com/cert/iot-12345',
      skills: ['IoT Architecture', 'Sensor Networks', 'Embedded Systems', 'Data Analytics']
    },
    {
      title: 'Young Professionals Program',
      issuer: 'TCS ION',
      year: '2024',
      type: 'Professional Development',
      description: 'Professional skills development and industry readiness program',
      credentialLink: 'https://ion.tcs.com/young-professionals-program',
      verifyLink: 'https://verify.tcsion.com/cert/ypp-12345',
      skills: ['Leadership', 'Communication', 'Project Management', 'Industry Insights']
    }
  ];

  const getCertificateIcon = (type) => {
    switch(type) {
      case 'Programming': return '💻';
      case 'AI/ML': return '🤖';
      case 'Technology': return '🔧';
      case 'Professional Development': return '📈';
      default: return '🏆';
    }
  };

  const getCertificateColor = (type) => {
    switch(type) {
      case 'Programming': return 'text-blue-500';
      case 'AI/ML': return 'text-purple-500';
      case 'Technology': return 'text-green-500';
      case 'Professional Development': return 'text-orange-500';
      default: return 'text-gray-500';
    }
  };

  const handleCertificateClick = (cert) => {
    if (cert.credentialLink) {
      window.open(cert.credentialLink, '_blank');
    }
  };

  return (
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certificates & Achievements</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional certifications and training programs that validate my skills and knowledge
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              onClick={() => handleCertificateClick(cert)}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group card-hover"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center text-2xl`}>
                    {getCertificateIcon(cert.type)}
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {cert.year}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {cert.title}
                </h3>
                
                <p className="text-primary-600 dark:text-primary-400 font-semibold mb-3">
                  {cert.issuer}
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {cert.description}
                </p>
                
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900 ${getCertificateColor(cert.type)} text-sm font-medium rounded-full`}>
                    {cert.type}
                  </span>
                </div>
                
                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">
                    Skills Gained:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-600">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      if (cert.credentialLink) window.open(cert.credentialLink, '_blank');
                    }}
                    className="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    <i className="fas fa-external-link-alt mr-2"></i>
                    View Certificate
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      if (cert.verifyLink) window.open(cert.verifyLink, '_blank');
                    }}
                    className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg hover:bg-green-200 dark:hover:bg-green-800 transition-colors text-sm font-medium"
                  >
                    <i className="fas fa-check-circle mr-2"></i>
                    Verify
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Continuous Learning Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              I believe in staying updated with the latest technologies and industry trends. 
              These certifications represent my commitment to professional growth and my passion 
              for learning new skills that contribute to innovative solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {['Java', 'C Programming', 'Cloud Computing', 'IoT', 'AI/ML', 'Professional Development'].map((skill, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            <a
              href="https://www.linkedin.com/in/suhani-s-3a23b62a9/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              <i className="fab fa-linkedin mr-2"></i>
              View All Certifications
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
