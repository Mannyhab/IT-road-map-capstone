exports.seed = function(knex) {
  return knex('stacks').del()
      .then(function() {
          return knex('stacks').insert([
              // Web Development - Frontend
              {
                  stack_id: '1',
                  name: 'Traditional Stack',
                  sub_branch_id: 1,
                  usage_percentage: 'A common starting point for web development, currently about 50% of developers use this stack.',
                  short_description: 'Essential stack for traditional web development.',
                  long_description: 'This is the foundational trio of technologies for web development. Every web developer usually starts here, building static web pages before diving into more complex stacks.',
                  color: '#FFD700',
                  technologies: 'HTML, CSS, JS'
              },
              {
                  stack_id: '2',
                  name: 'React-Bootstrap Stack',
                  sub_branch_id: 1,
                  usage_percentage: 'Popular for building responsive UIs, currently used by around 30% of developers.',
                  short_description: 'Building reactive user interfaces with bootstrap styling.',
                  long_description: 'React provides a component-based architecture which simplifies frontend development and improves maintainability. Bootstrap is a popular CSS framework that speeds up web design and ensures responsiveness.',
                  color: '#61DAFB',
                  technologies: 'React, Bootstrap'
              },
              {
                  stack_id: '3',
                  name: 'Vue-SASS Stack',
                  sub_branch_id: 1,
                  usage_percentage: 'Suitable for customized styling, adopted by approximately 20% of developers.',
                  short_description: 'Dynamic frontend development with enhanced styling.',
                  long_description: 'Vue.js offers a progressive framework for building user interfaces while SASS is a scripting language that is interpreted into CSS, offering features like variables and nested rules.',
                  color: '#41B883',
                  technologies: 'Vue, SASS'
              },

              
             { stack_id: '4',
              name: 'Node-Express-Mongo Stack',
              sub_branch_id: 2,
              usage_percentage: 'A common choice for backend development, used by around 40% of developers.',
              short_description: 'Server-side development using JavaScript.',
              long_description: 'Node.js allows for server-side JavaScript. Express.js simplifies the server creation process and MongoDB is a NoSQL database, perfect for modern web applications.',
              color: '#8CC84B',
              technologies: 'Node.js, Express.js, MongoDB'
          },
          {
              stack_id: '5',
              name: 'Django-PostgreSQL Stack',
              sub_branch_id: 2,
              usage_percentage: 'Preferred for robust web applications with relational database needs, used by around 35% of developers.',
              short_description: 'Pythonic way to handle web backends.',
              long_description: 'Django is a high-level Python web framework that encourages rapid design and clean, pragmatic design. PostgreSQL is a powerful, open-source object-relational database system.',
              color: '#092E20',
              technologies: 'Django, PostgreSQL'
          },{
            stack_id: '6',
            name: 'MEAN Stack',
            sub_branch_id: 3,
            usage_percentage: 'Favored for full-stack JavaScript applications, currently used by around 25% of developers.',
            short_description: 'A complete stack using JavaScript both on client and server sides.',
            long_description: 'MEAN brings together MongoDB, Express.js, Angular, and Node.js, creating a full-stack environment where JavaScript is utilized throughout the application, ensuring seamless data flow between layers.',
            color: '#E91E63',
            technologies: 'MongoDB, Express.js, Angular, Node.js'
        },
        {
            stack_id: '7',
            name: 'MERN Stack',
            sub_branch_id: 3,
            usage_percentage: 'Combines React with other technologies for full-stack JavaScript development, used by around 30% of developers.',
            short_description: 'A full-stack JavaScript environment incorporating React\'s user interface capabilities.',
            long_description: 'Swapping Angular with React in the MEAN stack gives developers more flexibility in building highly interactive user interfaces while keeping the backend robust with Express and Node.js.',
            color: '#9C27B0',
            technologies: 'MongoDB, Express.js, React, Node.js'
        },
        {
          stack_id: '8',
          name: 'Swift-UIKit Stack',
          sub_branch_id: 4,
          usage_percentage: 'Popular for iOS app development, currently used by around 40% of developers.',
          short_description: 'Creating iOS apps using Swift programming language with UIKit framework.',
          long_description: 'Swift is a powerful and intuitive programming language for iOS development. UIKit provides the core components for building interactive and visually appealing user interfaces.',
          color: '#FF5733',
          technologies: 'Swift, UIKit'
      },{
        stack_id: '9',
        name: 'Kotlin-Android SDK Stack',
        sub_branch_id: 5,
        usage_percentage: 'Preferred for Android app development, used by around 30% of developers.',
        short_description: 'Building Android apps using Kotlin programming language with Android SDK.',
        long_description: 'Kotlin is a modern and concise programming language for Android development. Android SDK offers a comprehensive set of tools and libraries for creating feature-rich Android applications.',
        color: '#33B2FF',
        technologies: 'Kotlin, Android SDK'
    },{
      stack_id: '10',
      name: 'Flutter-Dart Stack',
      sub_branch_id: 6,
      usage_percentage: 'Increasingly adopted for cross-platform app development, used by around 25% of developers.',
      short_description: 'Developing cross-platform apps using Flutter framework and Dart programming language.',
      long_description: 'Flutter allows developers to create high-quality and natively compiled applications for mobile, web, and desktop from a single codebase. Dart is the programming language used for building Flutter apps.',
      color: '#A3FF57',
      technologies: 'Flutter, Dart'
  },
  {
    stack_id: '11',
    name: 'Windows Forms Stack',
    sub_branch_id: 7,
    usage_percentage: 'Used for Windows desktop app development, currently used by around 20% of developers.',
    short_description: 'Building Windows desktop applications using Windows Forms.',
    long_description: 'Windows Forms is a graphical class library included as a part of Microsoft .NET Framework, providing a rapid application development framework for building Windows desktop applications.',
    color: '#FFD733',
    technologies: 'C#, Windows Forms'
},
{
    stack_id: '12',
    name: 'Mac Catalyst Stack',
    sub_branch_id: 8,
    usage_percentage: 'Used for developing macOS apps that share code with iOS apps, used by around 15% of developers.',
    short_description: 'Creating macOS apps using UIKit and sharing code with iOS apps.',
    long_description: 'Mac Catalyst allows developers to bring their iPad apps to Mac, with a high degree of code sharing and the ability to customize the macOS experience.',
    color: '#33FFDD',
    technologies: 'Swift, UIKit, Mac Catalyst'
},
{
    stack_id: '13',
    name: 'Linux GTK Stack',
    sub_branch_id: 9,
    usage_percentage: 'Used for Linux desktop app development, adopted by around 10% of developers.',
    short_description: 'Building Linux applications using GTK (GIMP Toolkit).',
    long_description: 'GTK is a free and open-source cross-platform widget toolkit for creating graphical user interfaces. It is widely used for developing Linux desktop applications.',
    color: '#FF5733',
    technologies: 'C, GTK'
},
{
  stack_id: '14',
  name: 'Unity PC Game Stack',
  sub_branch_id: 10,
  usage_percentage: 'Commonly used for developing games for personal computers, used by around 30% of PC game developers.',
  short_description: 'Building PC games using Unity game engine.',
  long_description: 'Unity is a widely used game engine for developing games on various platforms, including PC. It offers a comprehensive set of tools and a large community for support.',
  color: '#FF33AA',
  technologies: 'Unity Game Engine'
},
{
  stack_id: '15',
  name: 'Unreal Engine PC Stack',
  sub_branch_id: 10,
  usage_percentage: 'Preferred for creating high-quality PC games, used by around 25% of PC game developers.',
  short_description: 'Developing PC games using Unreal Engine.',
  long_description: 'Unreal Engine is a powerful game engine known for its realistic graphics and versatile capabilities. It is often chosen for creating visually stunning and immersive PC games.',
  color: '#FF33AA',
  technologies: 'Unreal Engine'
},

// Console Game Stack - Game Engine
{
  stack_id: '16',
  name: 'Unity Console Game Stack',
  sub_branch_id: 11,
  usage_percentage: 'Commonly used for developing games for gaming consoles, used by around 30% of console game developers.',
  short_description: 'Building console games using Unity game engine.',
  long_description: 'Unity is a versatile game engine used for creating games on various platforms, including gaming consoles. It provides a range of tools and features to streamline console game development.',
  color: '#AAFF33',
  technologies: 'Unity Game Engine'
},
{
  stack_id: '17',
  name: 'Unreal Engine Console Stack',
  sub_branch_id: 11,
  usage_percentage: 'Preferred for creating high-quality console games, used by around 25% of console game developers.',
  short_description: 'Developing console games using Unreal Engine.',
  long_description: 'Unreal Engine is known for its capabilities in producing visually impressive and performance-oriented games. It is often chosen for creating immersive experiences on gaming consoles.',
  color: '#AAFF33',
  technologies: 'Unreal Engine'
},

// Mobile Game Stack - Game Engine
{
  stack_id: '18',
  name: 'Unity Mobile Game Stack',
  sub_branch_id: 12,
  usage_percentage: 'Commonly used for developing games for mobile devices, used by around 35% of mobile game developers.',
  short_description: 'Building mobile games using Unity game engine.',
  long_description: 'Unity offers a user-friendly game engine for creating games on mobile platforms. Its cross-platform capabilities make it a popular choice for reaching a wide audience of mobile gamers.',
  color: '#33AFFF',
  technologies: 'Unity Game Engine'
},
{
  stack_id: '19',
  name: 'Unreal Engine Mobile Stack',
  sub_branch_id: 12,
  usage_percentage: 'Preferred for creating visually impressive mobile games, used by around 30% of mobile game developers.',
  short_description: 'Developing mobile games using Unreal Engine.',
  long_description: 'Unreal Engine provides advanced graphics and features for creating high-quality mobile games. It is often chosen for projects that require stunning visuals on mobile devices.',
  color: '#33AFFF',
  technologies: 'Unreal Engine'
},

// VR Game Stack - Game Engine
{
  stack_id: '20',
  name: 'Unity VR Game Stack',
  sub_branch_id: 13,
  usage_percentage: 'Commonly used for developing games for virtual reality platforms, used by around 40% of VR game developers.',
  short_description: 'Building VR games using Unity game engine.',
  long_description: 'Unity offers a robust suite of tools for creating immersive virtual reality experiences. Its compatibility with a wide range of VR hardware makes it a popular choice for VR game development.',
  color: '#FFAA33',
  technologies: 'Unity Game Engine'
},
{
  stack_id: '21',
  name: 'Unreal Engine VR Stack',
  sub_branch_id: 13,
  usage_percentage: 'Preferred for creating visually stunning VR games, used by around 35% of VR game developers.',
  short_description: 'Developing VR games using Unreal Engine.',
  long_description: 'Unreal Engine provides advanced features for creating compelling and visually striking virtual reality games. It is often chosen for projects that demand high-quality graphics in VR environments.',
  color: '#FFAA33',
  technologies: 'Unreal Engine'
},
{
  stack_id: '22',
  name: 'Microcontrollers Stack 1',
  sub_branch_id: 14,
  usage_percentage: 'Used by approximately 68% of embedded developers.',
  short_description: 'Advanced programming techniques for microcontrollers.',
  long_description: 'Go beyond the basics and delve into advanced protocols, interfaces, and programming paradigms to get the most out of microcontroller-based systems.',
  color: '#FF3333',
  technologies: 'FreeRTOS'
},
{
  stack_id: '23',
  name: 'Microcontrollers Stack 2',
  sub_branch_id: 14,
  usage_percentage: 'Integrated into around 75% of IoT projects.',
  short_description: 'Integrating microcontrollers with IoT ecosystems.',
  long_description: 'Seamlessly blend the capabilities of microcontrollers with the interconnected world of the Internet of Things, enabling smart and responsive systems.',
  color: '#FF3333',
  technologies: 'ESP32, Raspberry Pi Pico'
},
{
  stack_id: '24',
  name: 'IoT Stack 1',
  sub_branch_id: 15,
  usage_percentage: 'Adopted by about 82% of smart city projects.',
  short_description: 'Developing IoT solutions for smart cities.',
  long_description: 'IoT is at the heart of creating smart city solutions, from traffic management to public utilities, making urban life more efficient and sustainable.',
  color: '#33FFAA',
  technologies: 'LoRaWAN, Zigbee'
},
{
  stack_id: '25',
  name: 'IoT Stack 2',
  sub_branch_id: 15,
  usage_percentage: 'Incorporated in approximately 78% of industrial automation.',
  short_description: 'Industrial automation using IoT technologies.',
  long_description: 'Leverage the power of IoT to bring automation, efficiency, and precision to industrial processes, thereby enhancing productivity and reducing operational costs.',
  color: '#33FFAA',
  technologies: 'Modbus, MQTT'
},
{
  stack_id: '26',
  name: 'Automotive Stack 1',
  sub_branch_id: 16,
  usage_percentage: 'Implemented in around 87% of modern cars with advanced infotainment systems.',
  short_description: 'Creating sophisticated in-car entertainment systems.',
  long_description: 'Develop software for cutting-edge infotainment systems that offer rich multimedia experiences, navigation, connectivity, and more in modern vehicles.',
  color: '#AA33FF',
  technologies: 'Android Auto, Apple CarPlay'
},
{
  stack_id: '27',
  name: 'Automotive Stack 2',
  sub_branch_id: 16,
  usage_percentage: 'Installed in 65% of vehicles for safety-critical features.',
  short_description: 'Developing safety-critical systems for vehicles.',
  long_description: 'Work on essential software systems that ensure the safety and security of vehicles and their occupants, from advanced braking systems to collision avoidance.',
  color: '#AA33FF',
  technologies: 'ADAS, LIDAR'
},
{
  stack_id: '28',
  name: 'Supervised Learning Stack 1',
  sub_branch_id: 17,
  usage_percentage: 'Used in about 90% of voice recognition systems.',
  short_description: 'Voice and sound pattern recognition.',
  long_description: 'Harness supervised learning to develop systems capable of recognizing and interpreting voice commands, ambient sounds, and more.',
  color: '#AADD33',
  technologies: 'TensorFlow, Keras'
},
{
  stack_id: '29',
  name: 'Unsupervised Learning Stack 1',
  sub_branch_id: 18,
  usage_percentage: 'Depended upon by 63% of content recommendation platforms.',
  short_description: 'Content recommendation and personalization.',
  long_description: 'Use unsupervised learning techniques to develop algorithms that provide personalized content recommendations to users based on their behavior and preferences.',
  color: '#33DDFF',
  technologies: 'Scikit-learn, PyTorch'
},
{
  stack_id: '30',
  name: 'Unsupervised Learning Stack 2',
  sub_branch_id: 18,
  usage_percentage: 'Leveraged by about 72% of businesses for market analysis.',
  short_description: 'Market trend identification and analysis.',
  long_description: 'Leverage unsupervised learning to identify underlying market trends, enabling businesses to make data-driven decisions and strategize effectively.',
  color: '#33DDFF',
  technologies: 'PCA, T-SNE'
},
{
  stack_id: '31',
  name: 'Reinforcement Learning Stack 1',
  sub_branch_id: 19,
  usage_percentage: 'Utilized in around 69% of robotics projects.',
  short_description: 'Robotics and agent-based systems.',
  long_description: 'Apply reinforcement learning in developing robotic systems that can autonomously navigate environments and adapt to new situations through trial and error.',
  color: '#FFDD33',
  technologies: 'OpenAI Gym, DDPG'
},
{
  stack_id: '32',
  name: 'Reinforcement Learning Stack 2',
  sub_branch_id: 19,
  usage_percentage: 'Integrated into 61% of AI game development projects.',
  short_description: 'AI in gaming environments.',
  long_description: 'Reinforcement learning plays a pivotal role in creating intelligent game characters that can adapt and strategize against the player, providing a more immersive gaming experience.',
  color: '#FFDD33',
  technologies: 'PPO, A3C'
},
{
  stack_id: '33',
  name: 'Neural Networks Stack 1',
  sub_branch_id: 20,
  usage_percentage: 'Adopted by about 80% of image processing tools.',
  short_description: 'Image processing and computer vision.',
  long_description: 'Neural networks, especially convolutional ones, have revolutionized image processing, enabling machines to see and interpret visual data like never before.',
  color: '#DDFF33',
  technologies: 'Convolutional Neural Networks, ResNet'
},
{
  stack_id: '34',
  name: 'Neural Networks Stack 2',
  sub_branch_id: 20,
  usage_percentage: 'Preferred by 75% of NLP tasks.',
  short_description: 'Natural language processing and understanding.',
  long_description: 'Deep neural networks are now at the forefront of natural language understanding, driving advancements in chatbots, translators, and other language-based tools.',
  color: '#DDFF33',
  technologies: 'BERT, GPT-2'
},
{
  stack_id: '35',
  name: 'Neural Networks Stack 3',
  sub_branch_id: 20,
  usage_percentage: 'Used in about 82% of complex data modeling tasks.',
  short_description: 'Complex data analysis using deep learning.',
  long_description: 'Advanced neural network structures are used for processing and analyzing complex data structures, making sense of patterns that other algorithms might miss.',
  color: '#DDFF33',
  technologies: 'LSTM, Transformer Networks'
},

{
  stack_id: '36',
  name: 'Statistical Analysis Stack',
  sub_branch_id: 21,
  usage_percentage: '80% of research projects use statistical analysis.',
  short_description: 'Data Analysis',
  long_description: 'Use statistical tools to interpret data patterns and trends.',
  color: '#FF33DD',
  technologies: 'R, Python, SPSS'
},

// Stack for Deep Learning
{
  stack_id: '37',
  name: 'Deep Learning Stack',
  sub_branch_id: 22,
  usage_percentage: '85% of advanced AI projects utilize deep learning.',
  short_description: 'Advanced Machine Learning',
  long_description: 'Machine learning techniques based on artificial neural networks.',
  color: '#DD33FF',
  technologies: 'TensorFlow, Keras, PyTorch'
},

// Stack for Convolutional NNs
{
  stack_id: '38',
  name: 'Convolutional NNs Stack',
  sub_branch_id: 23,
  usage_percentage: '90% of image-based AI projects use convolutional networks.',
  short_description: 'Image-based Networks',
  long_description: 'Neural networks designed for image processing.',
  color: '#DDFF33',
  technologies: 'CNN, ImageNet, OpenCV'
},

// Stack for Recurrent NNs
{
  stack_id: '39',
  name: 'Recurrent NNs Stack',
  sub_branch_id: 24,
  usage_percentage: '75% of sequential data projects employ recurrent networks.',
  short_description: 'Sequential Data Networks',
  long_description: 'Neural networks designed for sequential data like time series.',
  color: '#33DDFF',
  technologies: 'RNN, LSTM, GRU'
},

// Stack for Automated Machines
{
  stack_id: '40',
  name: 'Automated Machines Stack',
  sub_branch_id: 25,
  usage_percentage: '65% of manufacturing industries have integrated automation.',
  short_description: 'Robot Movement',
  long_description: 'Robots and devices that perform tasks without human intervention.',
  color: '#FFDDDD',
  technologies: 'Industrial Robots, CNC Machines'
},

// Stack for Robot Controllers
{
  stack_id: '41',
  name: 'Robot Controllers Stack',
  sub_branch_id: 26,
  usage_percentage: '70% of robotic systems use advanced controllers.',
  short_description: 'Robot Command Units',
  long_description: 'Devices that control the actions of a robot.',
  color: '#DDFFDD',
  technologies: 'Arduino, Raspberry Pi'
},

// Stack for Sensors
{
  stack_id: '42',
  name: 'Sensors Stack',
  sub_branch_id: 27,
  usage_percentage: '85% of IoT devices are equipped with multiple sensors.',
  short_description: 'Data Collection Devices',
  long_description: 'Devices that detect changes in the environment and send data to a processing unit.',
  color: '#DDDDFF',
  technologies: 'Thermal Sensors, Motion Sensors'
},

// Stack for Translations
{
  stack_id: '43',
  name: 'Translations Stack',
  sub_branch_id: 28,
  usage_percentage: '78% of multilingual platforms utilize automated translations.',
  short_description: 'Language Conversion',
  long_description: 'Convert text or speech from one language to another using algorithms.',
  color: '#FFDDAA',
  technologies: 'Google Translate API, IBM Language Translator'
},

// Stack for Sentiment Analysis
{
  stack_id: '44',
  name: 'Sentiment Analysis Stack',
  sub_branch_id: 29,
  usage_percentage: '83% of marketing analysis tools use sentiment detection.',
  short_description: 'Mood Detection',
  long_description: 'Determine the sentiment or mood behind a piece of text.',
  color: '#DDAAFF',
  technologies: 'NLTK, TextBlob'
},

// Stack for Chatbots
{
  stack_id: '45',
  name: 'Chatbots Stack',
  sub_branch_id: 30,
  usage_percentage: '90% of customer service platforms have integrated chatbots.',
  short_description: 'Automated Chat Systems',
  long_description: 'Systems designed to simulate human conversation.',
  color: '#AADDFF',
  technologies: 'Dialogflow, Microsoft Bot Framework'
},


{
  stack_id: '46',
  name: 'Infrastructure Management Stack',
  sub_branch_id: 31,
  usage_percentage: '80% of IT departments focus on infrastructure management.',
  short_description: 'Network Foundations',
  long_description: 'Managing and maintaining the essential networking hardware and software.',
  color: '#89D6F8',
  technologies: 'Cisco, Juniper'
},


{
  stack_id: '47',
  name: 'Protocol Standards Stack',
  sub_branch_id: 32,
  usage_percentage: '95% of networks follow standardized protocols.',
  short_description: 'Communication Rules',
  long_description: 'Set rules that allow computers to communicate across a network.',
  color: '#89F8D4',
  technologies: 'TCP/IP, HTTP/HTTPS'
},

// Stack for Wireless Technologies
{
  stack_id: '48',
  name: 'Wireless Technologies Stack',
  sub_branch_id: 33,
  usage_percentage: '89% of modern devices support multiple wireless technologies.',
  short_description: 'Untethered Connections',
  long_description: 'Techniques and standards for transmitting data without physical connections.',
  color: '#F889E6',
  technologies: 'Bluetooth, Wi-Fi'
},

// Stack for Infrastructure Solutions
{
  stack_id: '49',
  name: 'Infrastructure Solutions Stack',
  sub_branch_id: 34,
  usage_percentage: '85% of businesses have moved to cloud infrastructure.',
  short_description: 'Cloud Hardware',
  long_description: 'Cloud services that offer virtualized computing resources over the Internet.',
  color: '#F8D889',
  technologies: 'AWS EC2, Azure Virtual Machines'
},

// Stack for Platform Solutions
{
  stack_id: '50',
  name: 'Platform Solutions Stack',
  sub_branch_id: 35,
  usage_percentage: '80% of developers use cloud platforms for app deployment.',
  short_description: 'Cloud Software',
  long_description: 'Services that provide a platform allowing customers to develop, run, and manage applications.',
  color: '#89F888',
  technologies: 'Heroku, Google App Engine'
},

// Stack for Software Solutions
{
  stack_id: '51',
  name: 'Software Solutions Stack',
  sub_branch_id: 36,
  usage_percentage: '78% of software applications are now cloud-based.',
  short_description: 'Cloud Apps',
  long_description: 'Cloud-based software that is hosted on remote servers for use on the internet.',
  color: '#D689F8',
  technologies: 'SaaS applications, Office 365'
},


{
  stack_id: '52',
  name: 'Network Safeguarding Stack',
  sub_branch_id: 37,
  usage_percentage: '90% of companies invest in advanced network safeguarding.',
  short_description: 'Protection Mechanisms',
  long_description: 'Techniques and tools to protect network infrastructure from external threats.',
  color: '#F88989',
  technologies: 'Firewalls, Intrusion Detection Systems'
},

// Stack for Data Safeguarding
{
  stack_id: '53',
  name: 'Data Safeguarding Stack',
  sub_branch_id: 38,
  usage_percentage: '93% of businesses prioritize data safeguarding techniques.',
  short_description: 'Data Security',
  long_description: 'Ensuring that data is kept safe from corruption and unauthorized access.',
  color: '#F8A689',
  technologies: 'Encryption, VPNs'
},

// Stack for App Safeguarding
{
  stack_id: '54',
  name: 'App Safeguarding Stack',
  sub_branch_id: 39,
  usage_percentage: '87% of developers employ app safeguarding tools.',
  short_description: 'Application Security',
  long_description: 'Measures taken to improve the security of an application.',
  color: '#89B0F8',
  technologies: 'SSL certificates, Secure coding practices'
},

          ]);
      });
};
