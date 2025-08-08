// // // import React from 'react';

// // // const Projects = () => {
// // //   const projects = [
// // //     {
// // //       title: 'SATVIK - The Sustainable Food Guide',
// // //       description: 'A comprehensive web application promoting sustainable eating habits with seasonal food recommendations and recipe sharing.',
// // //       technologies: ['HTML', 'CSS', 'Java', 'MySQL'],
// // //       features: [
// // //         'Seasonal food uploads',
// // //         'Recipe sharing platform',
// // //         'Personalized Satvik recommendations',
// // //         'User-friendly interface'
// // //       ],
// // //       category: 'Web Development'
// // //     },
// // //     {
// // //       title: 'LearnQuikly - AI-Powered Learning Assistant',
// // //       description: 'An intelligent learning tool that transforms text into various learning formats with gamification elements.',
// // //       technologies: ['Python', 'AI/ML', 'Web Technologies'],
// // //       features: [
// // //         'Text to summary generation',
// // //         'MCQ creation',
// // //         'Flashcard generation',
// // //         'Flowchart creation',
// // //         'Progress tracking',
// // //         'Gamification elements'
// // //       ],
// // //       category: 'AI/ML'
// // //     },
// // //     {
// // //       title: 'HR Analytics Dashboard',
// // //       description: 'Interactive dashboard for HR data analysis and visualization using Power BI.',
// // //       technologies: ['Power BI', 'Excel', 'Data Analysis'],
// // //       features: [
// // //         'Employee performance metrics',
// // //         'Recruitment analytics',
// // //         'Interactive visualizations',
// // //         'Real-time insights'
// // //       ],
// // //       category: 'Data Analytics'
// // //     },
// // //     {
// // //       title: 'House Price Prediction',
// // //       description: 'Machine learning model to predict house prices based on various features.',
// // //       technologies: ['Python', 'Machine Learning', 'Scikit-learn'],
// // //       features: [
// // //         'Multiple regression algorithms',
// // //         'Feature engineering',
// // //         'Model evaluation',
// // //         'Price prediction interface'
// // //       ],
// // //       category: 'Machine Learning'
// // //     },
// // //     {
// // //       title: 'Heart Disease Prediction',
// // //       description: 'ML model for predicting heart disease risk using patient health data.',
// // //       technologies: ['Python', 'Machine Learning', 'Healthcare Data'],
// // //       features: [
// // //         'Health risk assessment',
// // //         'Multiple ML algorithms',
// // //         'Accuracy optimization',
// // //         'Medical data processing'
// // //       ],
// // //       category: 'Machine Learning'
// // //     },
// // //     {
// // //       title: 'Store Sales Dashboard',
// // //       description: 'Business intelligence dashboard for retail sales analysis and forecasting.',
// // //       technologies: ['Power BI', 'Data Analysis', 'Business Intelligence'],
// // //       features: [
// // //         'Sales trend analysis',
// // //         'Revenue forecasting',
// // //         'Product performance metrics',
// // //         'Geographic sales distribution'
// // //       ],
// // //       category: 'Data Analytics'
// // //     }
// // //   ];

// // //   const categories = ['All', 'Web Development', 'AI/ML', 'Data Analytics', 'Machine Learning'];
// // //   const [activeCategory, setActiveCategory] = React.useState('All');

// // //   const filteredProjects = activeCategory === 'All' 
// // //     ? projects 
// // //     : projects.filter(project => project.category === activeCategory);

// // //   return (
// // //     <section id="projects" className="py-20">
// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //         <div className="text-center mb-16">
// // //           <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
// // //           <div className="w-20 h-1 bg-primary-600 mx-auto mb-8"></div>
          
// // //           {/* Category Filter */}
// // //           <div className="flex flex-wrap justify-center gap-4 mb-8">
// // //             {categories.map((category) => (
// // //               <button
// // //                 key={category}
// // //                 onClick={() => setActiveCategory(category)}
// // //                 className={`px-6 py-2 rounded-full font-medium transition-colors ${
// // //                   activeCategory === category
// // //                     ? 'bg-primary-600 text-white'
// // //                     : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-gray-600'
// // //                 }`}
// // //               >
// // //                 {category}
// // //               </button>
// // //             ))}
// // //           </div>
// // //         </div>
        
// // //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// // //           {filteredProjects.map((project, index) => (
// // //             <div
// // //               key={index}
// // //               className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden card-hover animate-slide-up"
// // //               style={{animationDelay: `${index * 0.1}s`}}
// // //             >
// // //               <div className="p-6">
// // //                 <div className="flex items-center justify-between mb-4">
// // //                   <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
// // //                     {project.category}
// // //                   </span>
// // //                   <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-purple-600 rounded-lg flex items-center justify-center">
// // //                     <span className="text-white text-xl">🚀</span>
// // //                   </div>
// // //                 </div>
                
// // //                 <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
// // //                   {project.title}
// // //                 </h3>
                
// // //                 <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
// // //                   {project.description}
// // //                 </p>
                
// // //                 <div className="mb-4">
// // //                   <h4 className="font-semibold text-sm text-gray-500 dark:text-gray-400 mb-2">
// // //                     Key Features:
// // //                   </h4>
// // //                   <ul className="space-y-1">
// // //                     {project.features.slice(0, 3).map((feature, featureIndex) => (
// // //                       <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
// // //                         <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
// // //                         {feature}
// // //                       </li>
// // //                     ))}
// // //                   </ul>
// // //                 </div>
                
// // //                 <div className="border-t dark:border-gray-700 pt-4">
// // //                   <div className="flex flex-wrap gap-2">
// // //                     {project.technologies.map((tech, techIndex) => (
// // //                       <span
// // //                         key={techIndex}
// // //                         className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
// // //                       >
// // //                         {tech}
// // //                       </span>
// // //                     ))}
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
        
// // //         <div className="text-center mt-12">
// // //           <p className="text-gray-600 dark:text-gray-400 mb-4">
// // //             Interested in seeing more of my work?
// // //           </p>
// // //           <a
// // //             href="#contact"
// // //             className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
// // //           >
// // //             Get In Touch
// // //           </a>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Projects;
// // import React from 'react';

// // const Projects = () => {
// //   const projects = [
// //     {
// //       title: 'SATVIK - The Sustainable Food Guide',
// //       description: 'A comprehensive web application promoting sustainable eating habits with seasonal food recommendations and recipe sharing.',
// //       technologies: ['HTML', 'CSS', 'Java', 'MySQL'],
// //       features: [
// //         'Seasonal food uploads',
// //         'Recipe sharing platform',
// //         'Personalized Satvik recommendations',
// //         'User-friendly interface'
// //       ],
// //       category: 'Web Development',
// //       demoLink: 'https://satvik-demo.vercel.app', // Add your demo link
// //       githubLink: 'https://github.com/suhani/satvik-app', // Add your GitHub link
// //       status: 'Completed'
// //     },
// //     {
// //       title: 'LearnQuikly - AI-Powered Learning Assistant',
// //       description: 'An intelligent learning tool that transforms text into various learning formats with gamification elements.',
// //       technologies: ['Python', 'AI/ML', 'Web Technologies'],
// //       features: [
// //         'Text to summary generation',
// //         'MCQ creation',
// //         'Flashcard generation',
// //         'Flowchart creation',
// //         'Progress tracking',
// //         'Gamification elements'
// //       ],
// //       category: 'AI/ML',
// //       demoLink: 'https://learnquikly-demo.streamlit.app',
// //       githubLink: 'https://github.com/suhani/learnquikly',
// //       status: 'In Progress'
// //     },
// //     {
// //       title: 'HR Analytics Dashboard',
// //       description: 'Interactive dashboard for HR data analysis and visualization using Power BI.',
// //       technologies: ['Power BI', 'Excel', 'Data Analysis'],
// //       features: [
// //         'Employee performance metrics',
// //         'Recruitment analytics',
// //         'Interactive visualizations',
// //         'Real-time insights'
// //       ],
// //       category: 'Data Analytics',
// //       demoLink: 'https://powerbi.com/hr-dashboard',
// //       githubLink: 'https://github.com/suhani/hr-analytics',
// //       status: 'Completed'
// //     },
// //     {
// //       title: 'House Price Prediction',
// //       description: 'Machine learning model to predict house prices based on various features.',
// //       technologies: ['Python', 'Machine Learning', 'Scikit-learn'],
// //       features: [
// //         'Multiple regression algorithms',
// //         'Feature engineering',
// //         'Model evaluation',
// //         'Price prediction interface'
// //       ],
// //       category: 'Machine Learning',
// //       demoLink: 'https://house-price-predictor.herokuapp.com',
// //       githubLink: 'https://github.com/suhani/house-price-ml',
// //       status: 'Completed'
// //     },
// //     {
// //       title: 'Heart Disease Prediction',
// //       description: 'ML model for predicting heart disease risk using patient health data.',
// //       technologies: ['Python', 'Machine Learning', 'Healthcare Data'],
// //       features: [
// //         'Health risk assessment',
// //         'Multiple ML algorithms',
// //         'Accuracy optimization',
// //         'Medical data processing'
// //       ],
// //       category: 'Machine Learning',
// //       demoLink: 'https://heart-disease-ml.streamlit.app',
// //       githubLink: 'https://github.com/suhani/heart-disease-prediction',
// //       status: 'Completed'
// //     },
// //     {
// //       title: 'Store Sales Dashboard',
// //       description: 'Business intelligence dashboard for retail sales analysis and forecasting.',
// //       technologies: ['Power BI', 'Data Analysis', 'Business Intelligence'],
// //       features: [
// //         'Sales trend analysis',
// //         'Revenue forecasting',
// //         'Product performance metrics',
// //         'Geographic sales distribution'
// //       ],
// //       category: 'Data Analytics',
// //       demoLink: 'https://powerbi.com/sales-dashboard',
// //       githubLink: 'https://github.com/suhani/sales-dashboard',
// //       status: 'Completed'
// //     }
// //   ];

// //   const categories = ['All', 'Web Development', 'AI/ML', 'Data Analytics', 'Machine Learning'];
// //   const [activeCategory, setActiveCategory] = React.useState('All');

// //   const filteredProjects = activeCategory === 'All' 
// //     ? projects 
// //     : projects.filter(project => project.category === activeCategory);

// //   const handleProjectClick = (project) => {
// //     if (project.demoLink) {
// //       window.open(project.demoLink, '_blank');
// //     }
// //   };

// //   const getStatusColor = (status) => {
// //     switch(status) {
// //       case 'Completed': return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200';
// //       case 'In Progress': return 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200';
// //       case 'Planning': return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200';
// //       default: return 'bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200';
// //     }
// //   };

// //   return (
// //     <section id="projects" className="py-20 bg-dots dark:bg-dots-dark relative overflow-hidden">
// //       <div className="particles"></div>
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
// //         <div className="text-center mb-16">
// //           <h2 className="text-4xl md:text-6xl font-bold mb-4 gradient-text-primary">
// //             Featured Projects
// //           </h2>
// //           <div className="w-24 h-2 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-8"></div>
// //           <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
// //             Explore my latest work and innovations in technology
// //           </p>
          
// //           {/* Category Filter */}
// //           <div className="flex flex-wrap justify-center gap-4 mb-8">
// //             {categories.map((category) => (
// //               <button
// //                 key={category}
// //                 onClick={() => setActiveCategory(category)}
// //                 className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ripple ${
// //                   activeCategory === category
// //                     ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg transform scale-105'
// //                     : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-gray-700 shadow-md hover:shadow-lg'
// //                 }`}
// //               >
// //                 {category}
// //               </button>
// //             ))}
// //           </div>
// //         </div>
        
// //         {/* Projects Grid */}
// //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// //           {filteredProjects.map((project, index) => (
// //             <div
// //               key={index}
// //               onClick={() => handleProjectClick(project)}
// //               className="clickable-card holographic card-3d bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden animate-slide-up spotlight"
// //               style={{animationDelay: `${index * 0.1}s`}}
// //             >
// //               {/* Link Indicator */}
// //               <div className="link-indicator">
// //                 <i className="fas fa-external-link-alt"></i>
// //               </div>
              
// //               {/* Status Badge */}
// //               <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)} z-10`}>
// //                 {project.status}
// //               </div>
              
// //               <div className="p-6 relative">
// //                 <div className="flex items-center justify-between mb-4">
// //                   <span className="px-3 py-1 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
// //                     {project.category}
// //                   </span>
// //                   <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-600 rounded-xl flex items-center justify-center shadow-lg floating">
// //                     <span className="text-white text-xl">🚀</span>
// //                   </div>
// //                 </div>
                
// //                 <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white text-shadow">
// //                   {project.title}
// //                 </h3>
                
// //                 <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
// //                   {project.description}
// //                 </p>
                
// //                 <div className="mb-4">
// //                   <h4 className="font-semibold text-sm text-gray-500 dark:text-gray-400 mb-2">
// //                     🎯 Key Features:
// //                   </h4>
// //                   <ul className="space-y-1">
// //                     {project.features.slice(0, 3).map((feature, featureIndex) => (
// //                       <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
// //                         <span className="w-2 h-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mr-2"></span>
// //                         {feature}
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 </div>
                
// //                 <div className="mb-6">
// //                   <div className="flex flex-wrap gap-2">
// //                     {project.technologies.map((tech, techIndex) => (
// //                       <span
// //                         key={techIndex}
// //                         className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium shadow-sm"
// //                       >
// //                         {tech}
// //                       </span>
// //                     ))}
// //                   </div>
// //                 </div>

// //                 {/* Action Buttons */}
// //                 <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
// //                   <button 
// //                     onClick={(e) => {
// //                       e.stopPropagation();
// //                       if (project.demoLink) window.open(project.demoLink, '_blank');
// //                     }}
// //                     className="flex-1 btn-cyber px-4 py-2 rounded-lg text-xs"
// //                   >
// //                     <i className="fas fa-eye mr-2"></i>
// //                     Live Demo
// //                   </button>
// //                   <button 
// //                     onClick={(e) => {
// //                       e.stopPropagation();
// //                       if (project.githubLink) window.open(project.githubLink, '_blank');
// //                     }}
// //                     className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-xs"
// //                   >
// //                     <i className="fab fa-github"></i>
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
        
// //         <div className="text-center mt-16">
// //           <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-xl">
// //             <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
// //               Want to see more of my work?
// //             </h3>
// //             <p className="text-gray-600 dark:text-gray-400 mb-6">
// //               Check out my GitHub for additional projects and open-source contributions
// //             </p>
// //             <a
// //               href="https://github.com/suhani" // Replace with actual GitHub
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="btn-primary inline-flex items-center"
// //             >
// //               <i className="fab fa-github mr-2"></i>
// //               View All Projects
// //             </a>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Projects;
// import React from 'react';

// const Projects = () => {
//   const projects = [
//     {
//       title: 'SATVIK - The Sustainable Food Guide',
//       description: 'A comprehensive web application promoting sustainable eating habits with seasonal food recommendations and recipe sharing.',
//       technologies: ['HTML', 'CSS', 'Java', 'MySQL'],
//       features: [
//         'Seasonal food uploads',
//         'Recipe sharing platform',
//         'Personalized Satvik recommendations',
//         'User-friendly interface'
//       ],
//       category: 'Web Development',
//       demoLink: 'https://drive.google.com/file/d/1A4KUysSy3HmuB8ch6rxpFLfBqLe0syBX/view?usp=sharing',
//       githubLink: 'https://github.com/SUHANIS29/SATVIK',
//       status: 'Completed'
//     },
//     {
//       title: 'LearnQuikly - AI-Powered Learning Assistant',
//       description: 'An intelligent learning tool that transforms text into various learning formats with gamification elements.',
//       technologies: ['Python', 'AI/ML', 'Web Technologies'],
//       features: [
//         'Text to summary generation',
//         'MCQ creation',
//         'Flashcard generation',
//         'Flowchart creation',
//         'Progress tracking',
//         'Gamification elements'
//       ],
//       category: 'AI/ML',
//       demoLink:  'https://github.com/user-attachments/assets/e91f55a2-f194-410b-950f-b2d5823d8222',
//       githubLink: 'https://github.com/SUHANIS29/LearnQuickly-Final-',
//       status: 'Completed'
//     },
//     {
//       title: 'HR Analytics Dashboard',
//       description: 'Interactive dashboard for HR data analysis and visualization using Power BI.',
//       technologies: ['Power BI', 'Excel', 'Data Analysis'],
//       features: [
//         'Employee performance metrics',
//         'Recruitment analytics',
//         'Interactive visualizations',
//         'Real-time insights'
//       ],
//       category: 'Data Analytics',
//       demoLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7281215902266609664/',
//       githubLink: 'https://github.com/SUHANIS29/Data_Analytics',
//       status: 'Completed'
//     },
//     {
//       title: 'House Price Prediction',
//       description: 'Machine learning model to predict house prices based on various features.',
//       technologies: ['Python', 'Machine Learning', 'Scikit-learn'],
//       features: [
//         'Multiple regression algorithms',
//         'Feature engineering',
//         'Model evaluation',
//         'Price prediction interface'
//       ],
//       category: 'Machine Learning',
//       demoLink: 'https://www.linkedin.com/posts/suhani-s-3a23b62a9_machinelearning-python-realestate-activity-7281747750310858752-ASkp?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEpGmaoBR2u3VhBGtSsUT4uVCwrjZYE8xnA',
//       githubLink: 'https://github.com/SUHANIS29/Machine_Learning/blob/main/HousePrices.ipynb',
//       status: 'Completed'
//     },
//     {
//       title: 'Heart Disease Prediction',
//       description: 'ML model for predicting heart disease risk using patient health data.',
//       technologies: ['Python', 'Machine Learning', 'Healthcare Data'],
//       features: [
//         'Health risk assessment',
//         'Multiple ML algorithms',
//         'Accuracy optimization',
//         'Medical data processing'
//       ],
//       category: 'Machine Learning',
//       demoLink: 'https://www.linkedin.com/posts/suhani-s-3a23b62a9_ml-project-2-building-a-heart-disease-activity-7286416278938939393-jEGI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEpGmaoBR2u3VhBGtSsUT4uVCwrjZYE8xnA',
//       githubLink:'https://github.com/SUHANIS29/Machine_Learning/blob/main/heartDisease.ipynb',
//       status: 'Completed'
//     },
//     {
//       title: 'Store Sales Dashboard',
//       description: 'Business intelligence dashboard for retail sales analysis and forecasting.',
//       technologies: ['Power BI', 'Data Analysis', 'Business Intelligence'],
//       features: [
//         'Sales trend analysis',
//         'Revenue forecasting',
//         'Product performance metrics',
//         'Geographic sales distribution'
//       ],
//       category: 'Data Analytics',
//       demoLink: 'https://www.linkedin.com/posts/suhani-s-3a23b62a9_powerbi-dataanalytics-dashboarddesign-activity-7281741334263050242-UtvM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEpGmaoBR2u3VhBGtSsUT4uVCwrjZYE8xnA',
//       githubLink: 'https://github.com/SUHANIS29/Data_Analytics/blob/main/Store%20Sales%20Dashboard.png',
//       status: 'Completed'
//     }
    
//   ];

//   const categories = ['All', 'Web Development', 'AI/ML', 'Data Analytics', 'Machine Learning'];
//   const [activeCategory, setActiveCategory] = React.useState('All');

//   const filteredProjects = activeCategory === 'All' 
//     ? projects 
//     : projects.filter(project => project.category === activeCategory);

//   const handleProjectClick = (project) => {
//     if (project.demoLink) {
//       window.open(project.demoLink, '_blank');
//     }
//   };

//   const getStatusColor = (status) => {
//     switch(status) {
//       case 'Completed': return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200';
//       case 'In Progress': return 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200';
//       case 'Planning': return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200';
//       default: return 'bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200';
//     }
//   };

//   return (
//     <section id="projects" className="py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
//           <div className="w-20 h-1 bg-primary-600 mx-auto mb-8"></div>
//           <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//             Here are some of the projects I've worked on, showcasing my skills and creativity
//           </p>
          
//           {/* Category Filter */}
//           <div className="flex flex-wrap justify-center gap-4 mb-8">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setActiveCategory(category)}
//                 className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
//                   activeCategory === category
//                     ? 'bg-primary-600 text-white'
//                     : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-gray-700'
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>
        
//         {/* Projects Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredProjects.map((project, index) => (
//             <div
//               key={index}
//               onClick={() => handleProjectClick(project)}
//               className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group card-hover"
//               style={{animationDelay: `${index * 0.1}s`}}
//             >
//               {/* Status Badge */}
//               <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)} z-10`}>
//                 {project.status}
//               </div>
              
//               <div className="p-6">
//                 <div className="flex items-center justify-between mb-4">
//                   <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
//                     {project.category}
//                   </span>
//                   <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-purple-600 rounded-lg flex items-center justify-center">
//                     <span className="text-white text-lg">🚀</span>
//                   </div>
//                 </div>
                
//                 <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
//                   {project.title}
//                 </h3>
                
//                 <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
//                   {project.description}
//                 </p>
                
//                 <div className="mb-4">
//                   <h4 className="font-semibold text-sm text-gray-500 dark:text-gray-400 mb-2">
//                     Key Features:
//                   </h4>
//                   <ul className="space-y-1">
//                     {project.features.slice(0, 3).map((feature, featureIndex) => (
//                       <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
//                         <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
                
//                 <div className="mb-6">
//                   <div className="flex flex-wrap gap-2">
//                     {project.technologies.map((tech, techIndex) => (
//                       <span
//                         key={techIndex}
//                         className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
//                   <button 
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       if (project.demoLink) window.open(project.demoLink, '_blank');
//                     }}
//                     className="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
//                   >
//                     <i className="fas fa-external-link-alt mr-2"></i>
//                     Live Demo
//                   </button>
//                   <button 
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       if (project.githubLink) window.open(project.githubLink, '_blank');
//                     }}
//                     className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm"
//                   >
//                     Github 
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         <div className="text-center mt-12">
//           <p className="text-gray-600 dark:text-gray-400 mb-4">
//             Interested in seeing more of my work?
//           </p>
//           <a
//             href="#contact"
//             className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
//           >
//             Get In Touch
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'SATVIK - The Sustainable Food Guide',
      description: 'A comprehensive web application promoting sustainable eating habits with seasonal food recommendations and recipe sharing.',
      technologies: ['HTML', 'CSS', 'Java', 'MySQL'],
      features: [
        'Seasonal food uploads',
        'Recipe sharing platform',
        'Personalized Satvik recommendations',
        'User-friendly interface'
      ],
      category: 'Web Development',
      demoLink: 'https://drive.google.com/file/d/1A4KUysSy3HmuB8ch6rxpFLfBqLe0syBX/view?usp=sharing',
      githubLink: 'https://github.com/SUHANIS29/SATVIK',
      status: 'Completed'
    },
    {
      title: 'LearnQuikly - AI-Powered Learning Assistant',
      description: 'An intelligent learning tool that transforms text into various learning formats with gamification elements.',
      technologies: ['Python', 'AI/ML', 'Web Technologies'],
      features: [
        'Text to summary generation',
        'MCQ creation',
        'Flashcard generation',
        'Flowchart creation',
        'Progress tracking',
        'Gamification elements'
      ],
      category: 'AI/ML',
      demoLink: 'https://github.com/user-attachments/assets/e91f55a2-f194-410b-950f-b2d5823d8222',
      githubLink: 'https://github.com/SUHANIS29/LearnQuickly-Final-',
      status: 'Completed'
    },
    {
      title: 'KhetBuddy - AI for Agriculture',
      description: 'Hackathon Top 10 winner - AI-powered platform to help Indian farmers with crop quality identification, market insights, and multilingual support.',
      technologies: ['Python', 'Machine Learning', 'Agriculture Tech'],
      features: [
        'AI-based crop quality detection',
        'Multi-language farmer assistance',
        'Market price & weather insights',
        'Farmer-friendly interface'
      ],
      category: 'AI/ML',
      demoLink: 'https://www.linkedin.com/posts/suhani-s-3a23b62a9_aiforgood-hackathonjourney-top10-activity-7317116017346777088-hwjW?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEpGmaoBR2u3VhBGtSsUT4uVCwrjZYE8xnA', // Add your demo link
      githubLink: 'https://github.com/SUHANIS29/KhetBuddy', // Add your GitHub link
      status: 'Completed'
    },
    {
      title: 'VisionYT- Youtube Channel Analyser & Comparator',
      description: 'Internship project - AI-powered tool to analyze and compare YouTube channels, providing insights on growth, engagement, and content performance.',
      technologies: ['Python', 'AI', 'Streamlit', 'Youtube V3 data API','Matplotlib','Seaborn'],
      features: [
        'Channel growth analysis',
        'Engagement metrics comparison',
        'Content performance insights',
        'Visual data representation'
      ],
      category: 'AI/ML',
      demoLink: 'https://drive.google.com/file/d/1oWu18co__hAd2k70juxWbFU7HGAiwCig/view?usp=sharing', // Add your demo link
      githubLink: 'https://github.com/SUHANIS29/VisionYT', // Add your GitHub link
      status: 'Completed'
    },
    {
      title: 'Explorica - Smart EDA Platform',
      description: 'A web application for exploratory data analysis (EDA) with AI-driven insights and visualizations.',
      technologies: ['React', 'Node.js', 'AI', 'E-commerce'],
      features: [
        'Data preprocessing & cleaning (missing values, normalization)',
        'Exploratory Data Analysis to discover patterns and anomalies',

'Visualization dashboards for trends and customer behaviour',

'Actionable insights: sales trends, demand forecasting, customer preferences',
      ],
      category: 'AI/ML',
      demoLink: '#', // Add your demo link
      githubLink: 'https://github.com/SUHANIS29/Explorica---Smart-EDA-Dashboard', // Add your GitHub link
      status: 'In Progress'
    },
    {
      title: 'HR Analytics Dashboard',
      description: 'Interactive dashboard for HR data analysis and visualization using Power BI.',
      technologies: ['Power BI', 'Excel', 'Data Analysis'],
      features: [
        'Employee performance metrics',
        'Recruitment analytics',
        'Interactive visualizations',
        'Real-time insights'
      ],
      category: 'Data Analytics',
      demoLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7281215902266609664/',
      githubLink: 'https://github.com/SUHANIS29/Data_Analytics',
      status: 'Completed'
    },
    {
      title: 'House Price Prediction',
      description: 'Machine learning model to predict house prices based on various features.',
      technologies: ['Python', 'Machine Learning', 'Scikit-learn'],
      features: [
        'Multiple regression algorithms',
        'Feature engineering',
        'Model evaluation',
        'Price prediction interface'
      ],
      category: 'Machine Learning',
      demoLink: 'https://www.linkedin.com/posts/suhani-s-3a23b62a9_machinelearning-python-realestate-activity-7281747750310858752-ASkp?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEpGmaoBR2u3VhBGtSsUT4uVCwrjZYE8xnA',
      githubLink: 'https://github.com/SUHANIS29/Machine_Learning/blob/main/HousePrices.ipynb',
      status: 'Completed'
    },
    {
      title: 'Heart Disease Prediction',
      description: 'ML model for predicting heart disease risk using patient health data.',
      technologies: ['Python', 'Machine Learning', 'Healthcare Data'],
      features: [
        'Health risk assessment',
        'Multiple ML algorithms',
        'Accuracy optimization',
        'Medical data processing'
      ],
      category: 'Machine Learning',
      demoLink: 'https://www.linkedin.com/posts/suhani-s-3a23b62a9_ml-project-2-building-a-heart-disease-activity-7286416278938939393-jEGI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEpGmaoBR2u3VhBGtSsUT4uVCwrjZYE8xnA',
      githubLink: 'https://github.com/SUHANIS29/Machine_Learning/blob/main/heartDisease.ipynb',
      status: 'Completed'
    },
    {
      title: 'Store Sales Dashboard',
      description: 'Business intelligence dashboard for retail sales analysis and forecasting.',
      technologies: ['Power BI', 'Data Analysis', 'Business Intelligence'],
      features: [
        'Sales trend analysis',
        'Revenue forecasting',
        'Product performance metrics',
        'Geographic sales distribution'
      ],
      category: 'Data Analytics',
      demoLink: 'https://www.linkedin.com/posts/suhani-s-3a23b62a9_powerbi-dataanalytics-dashboarddesign-activity-7281741334263050242-UtvM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEpGmaoBR2u3VhBGtSsUT4uVCwrjZYE8xnA',
      githubLink: 'https://github.com/SUHANIS29/Data_Analytics/blob/main/Store%20Sales%20Dashboard.png',
      status: 'Completed'
    }
  ];

  const categories = ['All', 'Web Development', 'AI/ML', 'Data Analytics', 'Machine Learning'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const handleProjectClick = (project) => {
    if (project.demoLink && project.demoLink !== '#') {
      window.open(project.demoLink, '_blank');
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Completed': return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200';
      case 'In Progress': return 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200';
      case 'Planning': return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200';
      default: return 'bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200';
    }
  };

  // Function to get project icon based on category and title
  const getProjectIcon = (project) => {
    if (project.title.includes('KhetBuddy')) return '🌾';
    if (project.title.includes('Vision YR')) return '👁️';
    if (project.title.includes('Explorica')) return '🛍️';
    if (project.title.includes('SATVIK')) return '🌱';
    if (project.title.includes('LearnQuikly')) return '🧠';
    if (project.title.includes('HR Analytics')) return '👥';
    if (project.title.includes('House Price')) return '🏠';
    if (project.title.includes('Heart Disease')) return '❤️';
    if (project.title.includes('Store Sales')) return '📊';
    return '🚀';
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills and creativity
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              onClick={() => handleProjectClick(project)}
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group card-hover ${
                project.demoLink && project.demoLink !== '#' ? 'cursor-pointer' : 'cursor-default'
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Status Badge */}
              <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)} z-10`}>
                {project.status}
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-lg">{getProjectIcon(project)}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-gray-500 dark:text-gray-400 mb-2">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      if (project.demoLink && project.demoLink !== '#') {
                        window.open(project.demoLink, '_blank');
                      }
                    }}
                    className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      project.demoLink && project.demoLink !== '#'
                        ? 'bg-primary-600 hover:bg-primary-700 text-white'
                        : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                    }`}
                    disabled={!project.demoLink || project.demoLink === '#'}
                  >
                    <i className="fas fa-external-link-alt mr-2"></i>
                    {project.demoLink && project.demoLink !== '#' ? 'Live Demo' : 'Coming Soon'}
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      if (project.githubLink && project.githubLink !== '#') {
                        window.open(project.githubLink, '_blank');
                      }
                    }}
                    className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                      project.githubLink && project.githubLink !== '#'
                        ? 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                        : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                    }`}
                    disabled={!project.githubLink || project.githubLink === '#'}
                  >
                    <i className="fab fa-github mr-2"></i>
                    GitHub
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Interested in seeing more of my work?
          </p>
          <a
            href="#contact"
            className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
