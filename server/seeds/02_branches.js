exports.seed = function(knex) {
  return knex('branches').del()
      .then(function() {
          return knex('branches').insert([
              // Software Development
              {
                  section_id: 1, 
                  title: 'Web Development',
                  desc: 'Developing websites for hosting via intranet or internet.',
                  color: '#FF5733',
                  detailedDesc: 'Web development is the work involved in developing a website for the Internet or an intranet.'
              },
              {
                  section_id: 1, 
                  title: 'Mobile Development',
                  desc: 'Creating apps for use on mobile devices.',
                  color: '#33FF57',
                  detailedDesc: 'Mobile development refers to creating applications and any other kind of software development specific to mobile devices.'
              },
              {
                  section_id: 1,
                  title: 'Game Development',
                  desc: 'Creating video games.',
                  color: '#7833FF',
                  detailedDesc: 'Game development involves creating interactive content, including video games.'
              },
              {
                  section_id: 1,
                  title: 'Desktop Development',
                  desc: 'Software designed to run on a desktop computer.',
                  color: '#FF33A1',
                  detailedDesc: 'Desktop development is about creating applications that run stand-alone on a desktop or laptop computer.'
              },
              {
                  section_id: 1,
                  title: 'Embedded Systems',
                  desc: 'Developing systems embedded into larger systems.',
                  color: '#FF8833',
                  detailedDesc: 'Embedded system development involves creating specialized computing systems designed to perform dedicated functions or tasks.'
              },

              // Data Science
              {
                  section_id: 2,
                  title: 'Machine Learning',
                  desc: 'Algorithms and models that allow computers to perform tasks without explicit instructions.',
                  color: '#33A1FF',
                  detailedDesc: 'Machine Learning is a branch of AI that enables a system to learn from data rather than through explicit programming.'
              },
              {
                  section_id: 2,
                  title: 'Big Data',
                  desc: 'Analysis, processing, and extraction of information from large datasets.',
                  color: '#33FFC1',
                  detailedDesc: 'Big Data refers to the large volume of data – both structured and unstructured – that inundates a business on a daily basis.'
              },
              {
                  section_id: 2,
                  title: 'Data Analytics',
                  desc: 'Examining data to draw conclusions about the information.',
                  color: '#B2FF33',
                  detailedDesc: 'Data analytics is the science of analyzing raw data to make informed decisions.'
              },

              // AI and Robotics
              {
                  section_id: 3,
                  title: 'Neural Networks',
                  desc: 'Computational models based on the human brain.',
                  color: '#FF335E',
                  detailedDesc: 'Neural networks are a set of algorithms, modeled loosely after the human brain, that are designed to recognize patterns.'
              },
              {
                  section_id: 3,
                  title: 'Robotics',
                  desc: 'Design, creation, and use of robots.',
                  color: '#5E33FF',
                  detailedDesc: 'Robotics involves creating robots which are artificial agents acting in a real-world environment.'
              },
              {
                  section_id: 3,
                  title: 'NLP',
                  desc: 'Enabling machines to understand and respond to human language.',
                  color: '#FF3388',
                  detailedDesc: 'Natural Language Processing involves the interaction between computers and humans using the natural language.'
              },

              // Networking
              {
                  section_id: 4,
                  title: 'Infrastructure',
                  desc: 'Fundamental facilities and systems serving an area.',
                  color: '#FF5E33',
                  detailedDesc: 'Networking infrastructure consists of interconnected devices and systems that transmit data in a network.'
              },
              {
                  section_id: 4,
                  title: 'Protocols',
                  desc: 'Rules determining how data is transmitted and received in a network.',
                  color: '#FF3355',
                  detailedDesc: 'Protocols are formats and rules that dictate how data packets travel across the network.'
              },
              {
                  section_id: 4,
                  title: 'Wireless',
                  desc: 'Networks, technologies, and installations without cables.',
                  color: '#FF8933',
                  detailedDesc: 'Wireless means the transmission of data using radio waves rather than using wired connections.'
              },

              // Cloud Computing
              {
                  section_id: 5,
                  title: 'IaaS',
                  desc: 'Online services providing high-level APIs for dereferenced network access.',
                  color: '#33FF89',
                  detailedDesc: 'Infrastructure as a Service is a form of cloud service that provides virtualized computing resources over the internet.'
              },
              {
                  section_id: 5,
                  title: 'PaaS',
                  desc: 'Platform allowing customers to develop, run, and manage applications.',
                  color: '#335EFF',
                  detailedDesc: 'Platform as a Service is a cloud computing service that provides a platform allowing customers to develop, run, and manage applications.'
              },
              {
                  section_id: 5,
                  title: 'SaaS',
                  desc: 'Software licensing and delivery model in which software is provided on a subscription basis.',
                  color: '#FF333D',
                  detailedDesc: 'Software as a Service is a software distribution model in which a third-party provider hosts applications and makes them available to customers over the internet.'
              },

              // Cybersecurity
              {
                  section_id: 6,
                  title: 'Network Security',
                  desc: 'Policies and practices to prevent and monitor unauthorized access or misuse of a computer network.',
                  color: '#FF3344',
                  detailedDesc: 'Network Security involves any activity designed to protect the usability and integrity of your network and data.'
              },
              {
                  section_id: 6,
                  title: 'Information Security',
                  desc: 'Practice of protecting information from unauthorized access, use, disclosure, disruption, modification, or destruction.',
                  color: '#FF3350',
                  detailedDesc: 'Information Security is the practice of defending information from unauthorized access, disclosure, disruption, modification, use, inspection, recording or destruction.'
              },
              {
                  section_id: 6,
                  title: 'Application Security',
                  desc: 'Measures taken to improve the security of an application by finding, fixing, and preventing security vulnerabilities.',
                  color: '#FF9A33',
                  detailedDesc: 'Application Security encompasses measures taken to improve the security of an application often by identifying and fixing security vulnerabilities.'
              }
          ]);
      });
};
