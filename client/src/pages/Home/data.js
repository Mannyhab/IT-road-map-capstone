const boxes = [
  {
    id: 'information-technology',
    title: 'Information Technology',
    desc: 'The study, design, development, application, implementation, support, or management of computer-based information systems.',
    color: '#34495e',
    detailedDesc: 'Explore domains like Software Development, Networking, Data Science, and more.',
    subBranches: [
      // Software Development branch
      {
        id: 'software-development',
        title: 'Software Development',
        desc: 'Craft powerful software solutions.',
        color: '#3498db',
        detailedDesc: 'Dive into domains: Web, Mobile, Game, Desktop, and Embedded Systems.',
        subBranches: [
          // Web Development branch
          {
            id: 'web-development',
            title: 'Web Development',
            desc: 'Build amazing web applications.',
            color: '#2980b9',
            detailedDesc: 'Frontend, Backend, Full Stack and more!',
            subBranches: [
              {
                id: 'frontend',
                title: 'Frontend',
                desc: 'Making websites visually appealing.',
                color: '#27ae60',
                detailedDesc: 'HTML, CSS, JavaScript, React, and more.',
              },
              {
                id: 'backend',
                title: 'Backend',
                desc: 'Server-side operations and databases.',
                color: '#8e44ad',
                detailedDesc: 'Node, Express, Databases, and more.',
              },
              {
                id: 'fullstack',
                title: 'Full Stack',
                desc: 'Combining frontend and backend techniques.',
                color: '#2c3e50',
                detailedDesc: 'MERN Stack, MEAN Stack, and more.',
              },
            ],
          },
          // Mobile Development branch
          {
            id: 'mobile-development',
            title: 'Mobile Development',
            desc: 'Craft apps for mobile devices.',
            color: '#f39c12',
            detailedDesc: 'iOS, Android, React Native, and more!',
            subBranches: [
              {
                id: 'ios',
                title: 'iOS Development',
                desc: 'Develop for Apple devices.',
                color: '#e74c3c',
                detailedDesc: 'Swift, Objective-C, SwiftUI, and more.',
              },
              {
                id: 'android',
                title: 'Android Development',
                desc: 'Develop for Android devices.',
                color: '#2ecc71',
                detailedDesc: 'Java, Kotlin, Android Studio, and more.',
              },
              {
                id: 'crossplatform',
                title: 'Cross Platform',
                desc: 'Develop for multiple platforms with one codebase.',
                color: '#16a085',
                detailedDesc: 'React Native, Flutter, and more.',
              },
            ],
          },
          // Game Development branch
          {
            id: 'game-development',
            title: 'Game Development',
            desc: 'Create immersive game experiences.',
            color: '#f1c40f',
            detailedDesc: 'Unity, Unreal Engine, Godot, and more!',
            subBranches: []
          },
          // Desktop Development branch
          {
            id: 'desktop-development',
            title: 'Desktop Development',
            desc: 'Develop powerful desktop applications.',
            color: '#9b59b6',
            detailedDesc: 'Electron, .NET, JavaFX, and more!',
            subBranches: []
          },
          // Embedded Systems branch
          {
            id: 'embedded-systems',
            title: 'Embedded Systems',
            desc: 'Programming for specific hardware or software platforms.',
            color: '#c0392b',
            detailedDesc: 'IoT, Microcontrollers, Raspberry Pi, and more!',
            subBranches: []
          },
        ],
      },
      // Networking branch
      {
        id: 'networking',
        title: 'Networking',
        desc: 'Connect the world.',
        color: '#e74c3c', 
        detailedDesc: 'Master the architecture, management, and operations of modern networks.',
        subBranches: [
          {
            id: 'network-architecture',
            title: 'Network Architecture',
            desc: 'Designing computer networks.',
            color: '#9b59b6',
            detailedDesc: 'LANs, WANs, Cloud Networks, and more.',
          },
          {
            id: 'network-management',
            title: 'Network Management',
            desc: 'Oversee and manage computer networks.',
            color: '#3498db',
            detailedDesc: 'Network Monitoring, Traffic Analysis, and more.',
          },
          {
            id: 'network-security',
            title: 'Network Security',
            desc: 'Protecting computer networks from threats.',
            color: '#2c3e50',
            detailedDesc: 'Firewalls, VPNs, Encryption, and more.',
          },
        ],
      },
      // Data Science branch
      {
        id: 'data-science',
        title: 'Data Science',
        desc: 'Extract insights from data.',
        color: '#16a085',
        detailedDesc: 'Analytics, Machine Learning, Big Data, and more.',
        subBranches: [
          {
            id: 'machine-learning',
            title: 'Machine Learning',
            desc: 'Algorithms that improve automatically through experience.',
            color: '#f1c40f',
            detailedDesc: 'Supervised, Unsupervised, Reinforcement Learning, and more.',
          },
          {
            id: 'big-data',
            title: 'Big Data',
            desc: 'Analyze, extract information and deal with complex data sets.',
            color: '#9b59b6',
            detailedDesc: 'Hadoop, Spark, NoSQL, and more.',
          },
          {
            id: 'data-analytics',
            title: 'Data Analytics',
            desc: 'Interpreting complex data to arrive at a decision.',
            color: '#c0392b',
            detailedDesc: 'Data Visualization, Statistical Analysis, and more.',
          },
        ],
      },
      // Artificial Intelligence branch
      {
        id: 'artificial-intelligence',
        title: 'Artificial Intelligence',
        desc: 'Machines that mimic cognitive functions.',
        color: '#27ae60',
        detailedDesc: 'Machine Learning, Neural Networks, Robotics, and more.',
        subBranches: [
          {
            id: 'neural-networks',
            title: 'Neural Networks',
            desc: 'Algorithms designed to recognize patterns.',
            color: '#d35400',
            detailedDesc: 'Deep Learning, Convolutional NNs, Recurrent NNs, and more.',
          },
          {
            id: 'robotics',
            title: 'Robotics',
            desc: 'Design, construction, and use of robots.',
            color: '#c0392b',
            detailedDesc: 'Automated machines, robot controllers, sensors, and more.',
          },
          {
            id: 'nlp',
            title: 'Natural Language Processing',
            desc: 'Machines understanding human language.',
            color: '#8e44ad',
            detailedDesc: 'Translation, Sentiment Analysis, Chatbots, and more.',
          },
        ],
      },
    ]
  },
];


