exports.seed = async function(knex) {
  // Disable foreign key checks
  await knex.raw('SET FOREIGN_KEY_CHECKS = 0');

  // Deletes ALL existing entries for branches table
  await knex('branches').truncate();

  // Inserts seed entries for branches table
  await knex('branches').insert([
 
    {   id: 1,
        section_id: 1, 
        title: 'Web Development',
        desc: 'Developing websites for hosting via intranet or internet.',
       
        detailedDesc: 'Web development is the work involved in developing a website for the Internet or an intranet.'
    },
    {   id: 2,
        section_id: 1, 
        title: 'Mobile Development',
        desc: 'Creating apps for use on mobile devices.',
      
        detailedDesc: 'Mobile development refers to creating applications and any other kind of software development specific to mobile devices.'
    },
    {   id: 3,
        section_id: 1,
        title: 'Game Development',
        desc: 'Creating video games.',
       
        detailedDesc: 'Game development involves creating interactive content, including video games.'
    },
    {   id: 4,
        section_id: 1,
        title: 'Desktop Development',
        desc: 'Software designed to run on a desktop computer.',
      
        detailedDesc: 'Desktop development is about creating applications that run stand-alone on a desktop or laptop computer.'
    },
    {   id: 5,
        section_id:1,
        title: 'Embedded Systems',
        desc: 'Developing systems embedded into larger systems.',
       
        detailedDesc: 'Embedded system development involves creating specialized computing systems designed to perform dedicated functions or tasks.'
    },


    {   id: 6,
        section_id: 2,
        title: 'Machine Learning',
        desc: 'Algorithms and models that allow computers to perform tasks without explicit instructions.',
       
        detailedDesc: 'Machine Learning is a branch of AI that enables a system to learn from data rather than through explicit programming.'
    },
    {   id: 7,
        section_id: 2,
        title: 'Big Data',
        desc: 'Analysis, processing, and extraction of information from large datasets.',
      
        detailedDesc: 'Big Data refers to the large volume of data – both structured and unstructured – that inundates a business on a daily basis.'
    },
    {   id: 8,
        section_id: 2,
        title: 'Data Analytics',
        desc: 'Examining data to draw conclusions about the information.',
       
        detailedDesc: 'Data analytics is the science of analyzing raw data to make informed decisions.'
    },


    {   id: 9,
        section_id: 3,
        title: 'Neural Networks',
        desc: 'Computational models based on the human brain.',
       
        detailedDesc: 'Neural networks are a set of algorithms, modeled loosely after the human brain, that are designed to recognize patterns.'
    },
    {   id: 10,
        section_id: 3,
        title: 'Robotics',
        desc: 'Design, creation, and use of robots.',
       
        detailedDesc: 'Robotics involves creating robots which are artificial agents acting in a real-world environment.'
    },
    {   id: 11,
        section_id:3,
        title: 'NLP',
        desc: 'Enabling machines to understand and respond to human language.',
       
        detailedDesc: 'Natural Language Processing involves the interaction between computers and humans using the natural language.'
    },

    {   id: 12,
        section_id: 4,
        title: 'Infrastructure',
        desc: 'Fundamental facilities and systems serving an area.',
       
        detailedDesc: 'Networking infrastructure consists of interconnected devices and systems that transmit data in a network.'
    },
    {   id: 13,
        section_id: 4,
        title: 'Protocols',
        desc: 'Rules determining how data is transmitted and received in a network.',
       
        detailedDesc: 'Protocols are formats and rules that dictate how data packets travel across the network.'
    },
    {   id: 14,
        section_id: 4,
        title: 'Wireless',
        desc: 'Networks, technologies, and installations without cables.',
       
        detailedDesc: 'Wireless means the transmission of data using radio waves rather than using wired connections.'
    },


    {   id: 15,
        section_id: 5,
        title: 'IaaS',
        desc: 'Online services providing high-level APIs for dereferenced network access.',
       
        detailedDesc: 'Infrastructure as a Service is a form of cloud service that provides virtualized computing resources over the internet.'
    },
    {    id: 16,
        section_id: 5,
        title: 'PaaS',
        desc: 'Platform allowing customers to develop, run, and manage applications.',
      
        detailedDesc: 'Platform as a Service is a cloud computing service that provides a platform allowing customers to develop, run, and manage applications.'
    },
    {   id: 17,
        section_id: 5,
        title: 'SaaS',
        desc: 'Software licensing and delivery model in which software is provided on a subscription basis.',
      
        detailedDesc: 'Software as a Service is a software distribution model in which a third-party provider hosts applications and makes them available to customers over the internet.'
    },

    {    id: 18,
        section_id: 6,
        title: 'Network Security',
        desc: 'Policies and practices to prevent and monitor unauthorized access or misuse of a computer network.',
      
        detailedDesc: 'Network Security involves any activity designed to protect the usability and integrity of your network and data.'
    },
    {    id: 19,
        section_id: 6,
        title: 'Information Security',
        desc: 'Practice of protecting information from unauthorized access, use, disclosure, disruption, modification, or destruction.',
      
        detailedDesc: 'Information Security is the practice of defending information from unauthorized access, disclosure, disruption, modification, use, inspection, recording or destruction.'
    },
    {    id: 20,
        section_id: 6,
        title: 'Application Security',
        desc: 'Measures taken to improve the security of an application by finding, fixing, and preventing security vulnerabilities.',
      
        detailedDesc: 'Application Security encompasses measures taken to improve the security of an application often by identifying and fixing security vulnerabilities.'
    }
  ]);

  // Enable foreign key checks
  await knex.raw('SET FOREIGN_KEY_CHECKS = 1');
};
