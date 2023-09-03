exports.seed = function(knex) {
    return knex('technologies').del() // Clear the table before inserting
        .then(function() {
            return knex('technologies').insert([
                {
                    id: 1,
                    name: 'HTML',
                    stacks_id: 1,
                    description: 'Markup language used to structure content on the web. Fundamental to web development.',
                    usage_percentage: 'Core technology for web content, adopted by nearly 100% of developers.'
                },
                {
                    id: 2,
                    name: 'CSS',
                    stacks_id: 1,
                    description: 'Style-sheet language used for describing the look and formatting of a document written in HTML.',
                    usage_percentage: 'Essential for styling web pages, adopted by almost 100% of web developers.'
                },
                {
                    id: 3,
                    name: 'JS',
                    stacks_id: 1,
                    description: 'High-level, often just-in-time compiled, and multi-paradigm. Core technology of the web.',
                    usage_percentage: 'The backbone of web interactivity, used by 95% of web developers.'
                },
                {
                    id: 4,
                    name: 'React',
                    stacks_id: 2,
                    description: 'JavaScript library for building user interfaces.',
                    usage_percentage: 'Popular for modern web applications, adopted by approximately 40% of developers.'
                },
                {
                    id: 5,
                    name: 'Bootstrap',
                    stacks_id: 2,
                    description: 'Open-source CSS framework directed at responsive, mobile-first front-end web development.',
                    usage_percentage: 'Widely used for responsive designs, adopted by around 50% of developers.'
                },
                {
                    id: 6,
                    name: 'Vue.js',
                    stacks_id: 3,
                    description: 'Open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications.',
                    usage_percentage: 'Gaining traction for UI development, adopted by around 30% of developers.'
                },
                {
                    id: 7,
                    name: 'SASS',
                    stacks_id: 3,
                    description: 'Scripting language that is interpreted into CSS. Enhances the capabilities of CSS.',
                    usage_percentage: 'Suitable for customized styling, adopted by approximately 20% of developers.'
                },
                {
                    id: 8,
                    name: 'Node.js',
                    stacks_id: 4,
                    description: 'JavaScript runtime built on Chrome\'s V8 JavaScript engine. Allows server-side scripting.',
                    usage_percentage: 'Chosen for backend JS development by around 45% of developers.'
                },
                {
                    id: 9,
                    name: 'Express.js',
                    stacks_id: 4,
                    description: 'Web application framework for Node.js. Helps in building web applications and APIs.',
                    usage_percentage: 'Preferred framework for Node.js, used by roughly 38% of Node.js developers.'
                },
                {
                    id: 10,
                    name: 'MongoDB',
                    stacks_id: 4,
                    description: 'Cross-platform document-oriented database program. Classified as a NoSQL database.',
                    usage_percentage: 'Popular NoSQL choice, adopted by approximately 35% of developers working with NoSQL databases.'
                },
                {
                    id: 11,
                    name: 'Django',
                    stacks_id: 5,
                    description: 'A high-level Python web framework that encourages rapid design and clean, pragmatic design.',
                    usage_percentage: 'Popular among Python developers, part of about 70% of Python web applications.'
                },
                {
                    id: 12,
                    name: 'PostgreSQL',
                    stacks_id: 5,
                    description: 'A powerful, open-source object-relational database system.',
                    usage_percentage: 'Used widely in enterprise-grade applications, with an adoption rate of around 40%.'
                },
                {
                    id: 13,
                    name: 'MongoDB',
                    stacks_id: 6,
                    description: 'A NoSQL database designed for scalability and flexibility.',
                    usage_percentage: 'Commonly used in modern web applications, adopted by approximately 50% of NoSQL developers.'
                },
                {
                    id: 14,
                    name: 'Express.js',
                    stacks_id: 6,
                    description: 'A minimal and flexible Node.js web application framework.',
                    usage_percentage: 'One of the most popular Node.js frameworks, utilized by around 60% of Node.js developers.'
                },
                {
                    id: 15,
                    name: 'Angular',
                    stacks_id: 6,
                    description: 'A platform for building mobile and desktop web applications using TypeScript/JavaScript and other languages.',
                    usage_percentage: 'A dominant player in the frontend framework space, used by nearly 40% of JavaScript developers.'
                },
                {
                    id: 16,
                    name: 'Node.js',
                    stacks_id: 6,
                    description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine, allowing for server-side scripting.',
                    usage_percentage: 'A foundational element in many stacks, used by around 70% of JavaScript backend developers.'
                },
                {
                    id: 17,
                    name: 'React',
                    stacks_id: 7,
                    description: 'A JavaScript library for building user interfaces, especially single-page applications.',
                    usage_percentage: 'One of the most popular libraries for front-end development, with an adoption rate of around 60%.'
                },
                {
                    id: 18,
                    name: 'Express.js',
                    stacks_id: 7,
                    description: 'A minimal and flexible Node.js web application framework.',
                    usage_percentage: 'One of the most popular Node.js frameworks, utilized by around 60% of Node.js developers.' 
                },
                {
                    id: 19,
                    name: 'Node.js',
                    stacks_id: 7,
                    description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine, allowing for server-side scripting.',
                    usage_percentage: 'A foundational element in many stacks, used by around 70% of JavaScript backend developers.'
                },
                {
                    id: 20,
                    name: 'MongoDB',
                    stacks_id: 7,
                    description: 'A NoSQL database designed for scalability and flexibility.',
                    usage_percentage: 'Commonly used in modern web applications, adopted by approximately 50% of NoSQL developers.'
                },
                {
                    id: 21,
                    name: 'Swift',
                    stacks_id: 8,
                    description: 'A powerful and intuitive programming language for iOS development.',
                    usage_percentage: 'Popular among iOS developers, with an adoption rate of around 70%.'
                },
                {
                    id: 22,
                    name: 'UIKit',
                    stacks_id: 8,
                    description: 'Provides the core components for building interactive and visually appealing user interfaces on iOS.',
                    usage_percentage: 'Standard for iOS user interface development, used by the majority of iOS apps.'
                },
                
                // Kotlin-Android SDK Stack
                {
                    id: 23,
                    name: 'Kotlin',
                    stacks_id: 9,
                    description: 'A modern and concise programming language for Android development.',
                    usage_percentage: 'Increasingly popular for Android development, used in over 50% of new Android apps.'
                },
                {
                    id: 24,
                    name: 'Android SDK',
                    stacks_id: 9,
                    description: 'A comprehensive set of tools and libraries for creating feature-rich Android applications.',
                    usage_percentage: 'Essential for Android app development, utilized by all Android developers.'
                },
    
                // Flutter-Dart Stack
                {
                    id: 25,
                    name: 'Flutter',
                    stacks_id: 10,
                    description: 'A UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.',
                    usage_percentage: 'Rising rapidly in popularity for cross-platform development, especially for mobile apps.'
                },
                {
                    id: 26,
                    name: 'Dart',
                    stacks_id: 10,
                    description: 'A client-optimized language for building fast apps on any platform.',
                    usage_percentage: 'Mainly used in conjunction with Flutter, adopted by a growing number of developers.'
                },
    
                // Windows Forms Stack
                {
                    id: 27,
                    name: 'C#',
                    stacks_id: 11,
                    description: 'A modern, object-oriented programming language developed by Microsoft.',
                    usage_percentage: 'Widely used in various Microsoft technologies and platforms, including Windows Forms.'
                },
                {
                    id: 28,
                    name: 'Windows Forms',
                    stacks_id: 11,
                    description: 'A graphical class library for building Windows desktop applications.',
                    usage_percentage: 'Remains popular for enterprise desktop applications on Windows.'
                },
    
                // Mac Catalyst Stack
                // (Swift and UIKit already defined, adding Mac Catalyst)
                {
                    id: 29,
                    name: 'Mac Catalyst',
                    stacks_id: 12,
                    description: 'Allows developers to bring their iPad apps to Mac.',
                    usage_percentage: 'Used by developers aiming to share code between macOS and iOS apps.'
                },
    
                // Linux GTK Stack
                {
                    id: 30,
                    name: 'C',
                    stacks_id: 13,
                    description: 'One of the earliest and most influential programming languages.',
                    usage_percentage: 'Core language for system-level programming, especially in Linux development.'
                },
                {
                    id: 31,
                    name: 'GTK',
                    stacks_id: 13,
                    description: 'A free and open-source cross-platform widget toolkit for creating graphical user interfaces.',
                    usage_percentage: 'Popular toolkit for developing Linux desktop applications.'
                },
    
                // Unity PC Game Stack
                {
                    id: 32,
                    name: 'Unity Game Engine for PC',
                    stacks_id: 14,
                    description: 'Unity\'s version optimized for PC harnesses the capabilities of desktop hardware, allowing developers to craft both visually stunning and highly interactive PC games. From indie developers to big studios, Unity offers a seamless and user-friendly environment for PC game development.',
                    usage_percentage: 'Used by around 50% of PC indie game developers.'
                },
    
                // Unreal Engine PC Stack
                {
                    id: 33,
                    name: 'Unreal Engine for PC',
                    stacks_id: 15,
                    description: 'Unreal Engine on PC is renowned for pushing the visual envelope, enabling developers to create graphically intense and immersive experiences. Its high-end graphical capabilities and advanced physics engine make it a prime choice for AAA PC game development.',
                    usage_percentage: 'Adopted by approximately 40% of AAA game developers for PC.'
                },
    
                // Unity Console Game Stack
                {
                    id: 34,
                    name: 'Unity Game Engine for Console',
                    stacks_id: 16,
                    description: 'Adapting its strengths to the console, Unity provides developers with a suite of tools tailored for console game development. With its efficient rendering and cross-platform capabilities, developers can achieve consistent performance across various console platforms.',
                    usage_percentage: 'Utilized by about 45% of developers creating games for multiple console platforms.'
                },
    
                // Unreal Engine Console Stack
                {
                    id: 35,
                    name: 'Unreal Engine for Console',
                    stacks_id: 17,
                    description: 'Unreal Engine\'s prowess is evident in console gaming, where it delivers breathtaking visuals and robust gameplay mechanics. Leveraging the power of modern consoles, it\'s a go-to for many developers aiming for high-fidelity gaming experiences.',
                    usage_percentage: 'Chosen by nearly 35% of developers aiming for high-quality console games.'
                },
    
                // Unity Mobile Game Stack
                {
                    id: 36,
                    name: 'Unity Game Engine for Mobile',
                    stacks_id: 18,  // Assuming stacks_id 18 corresponds to Unity Mobile Game Stack
                    description: 'Unity\'s flexibility shines in the mobile domain, where developers can craft games that work seamlessly across a plethora of devices. With its optimized rendering for mobile GPUs and user-friendly interface, it dominates the mobile game development scene.',
                    usage_percentage: 'Popular among 60% of mobile game developers.'
                },
    
                // Unreal Engine Mobile Game Stack
                {
                    id: 37,
                    name: 'Unreal Engine for Mobile',
                    stacks_id: 19,  // Assuming stacks_id 19 corresponds to Unreal Engine Mobile Game Stack
                    description: 'Expanding its capabilities to the mobile space, Unreal Engine provides tools that allow for the creation of visually stunning mobile games that rival their console counterparts. With mobile-optimized shaders and an array of post-processing tools, it\'s a top choice for high-end mobile game development.',
                    usage_percentage: 'Used by around 25% of developers focused on high-end mobile gaming.'
                },
    
                // Unity VR Game Stack
                {
                    id: 38,
                    name: 'Unity Game Engine for VR',
                    stacks_id: 20,  // Assuming stacks_id 20 corresponds to Unity VR Game Stack
                    description: 'Unity has positioned itself at the forefront of VR development, offering a suite of tools tailored for crafting immersive VR experiences. Its ability to deliver consistent frame rates and handle VR-specific challenges makes it a favorite among VR developers.',
                    usage_percentage: 'Adopted by approximately 55% of VR game developers.'
                },
    
                // Unreal Engine VR Game Stack
                {
                    id: 39,
                    name: 'Unreal Engine for VR',
                    stacks_id: 21,  // Assuming stacks_id 21 corresponds to Unreal Engine VR Game Stack
                    description: 'Unreal Engine\'s emphasis on high-quality visuals finds a natural home in VR. Its suite of tools designed specifically for VR development ensures that experiences are both graphically impressive and interactively engaging.',
                    usage_percentage: 'Preferred by 40% of developers aiming for visually rich VR experiences.'
                },
                
            {
                id: 40,
                name: 'FreeRTOS',
                stacks_id: 22,
                description: 'A real-time operating system kernel for embedded devices, commonly used in microcontroller environments.',
                usage_percentage: 'FreeRTOS is a preferred choice, utilized by approximately 68% of developers aiming for advanced programming techniques with microcontrollers.'
            },

            {
                id: 41,
                name: 'ESP32',
                stacks_id: 23,
                description: 'A low-cost, low-power system on a chip microcontroller with integrated Wi-Fi and dual-mode Bluetooth, popular in IoT projects.',
                usage_percentage: 'ESP32 is integrated into around 37.5% of IoT projects, showcasing its prowess in seamlessly merging microcontroller functionalities with IoT ecosystems.'
            },

            {
                id: 42,
                name: 'Raspberry Pi Pico',
                stacks_id: 23,
                description: 'A tiny, fast, and versatile board built using the RP2040, a microcontroller chip designed by Raspberry Pi in the UK.',
                usage_percentage: 'Raspberry Pi Pico is adopted in roughly 37.5% of microcontroller projects aiming for an efficient blend with IoT systems.'
            },

            {
                id: 43,
                name: 'LoRaWAN',
                stacks_id: 24,
                description: 'A long range, low power wireless platform that has become the de facto technology for Internet of Things networks worldwide.',
                usage_percentage: 'LoRaWAN has been adopted by about 41% of smart city projects, emphasizing its pivotal role in IoT-driven urban development solutions.'
            },

            {
                id: 44,
                name: 'Zigbee',
                stacks_id: 24,
                description: 'A high-level communication protocol used to create personal area networks built from small, low-power digital radios.',
                usage_percentage: 'Zigbee plays a key role in approximately 41% of smart city projects, facilitating wireless communication for IoT devices.'
            },

            {
                id: 45,
                name: 'Modbus',
                stacks_id: 25,
                description: 'A serial communication protocol developed for use with its programmable logic controllers (PLCs).',
                usage_percentage: 'Modbus is a prevalent choice, being incorporated in around 39% of industrial automation projects leveraging IoT technologies.'
            },

            {
                id: 46,
                name: 'MQTT',
                stacks_id: 25,
                description: 'A lightweight messaging protocol for small sensors and mobile devices, optimized for high-latency or unreliable networks.',
                usage_percentage: 'MQTT finds its application in about 39% of industrial IoT projects, facilitating real-time communication in automation systems.'
            },

            {
                id: 47,
                name: 'Android Auto',
                stacks_id: 26,
                description: 'A mobile app developed by Google to mirror features from an Android device to an in-car display.',
                usage_percentage: 'Android Auto is implemented in around 43.5% of cars boasting advanced infotainment systems, enhancing the in-car multimedia experience.'
            },

            {
                id: 48,
                name: 'Apple CarPlay',
                stacks_id: 26,
                description: 'An interface by Apple that allows users to control an iPhone via the head unit of their car.',
                usage_percentage: 'Apple CarPlay graces about 43.5% of modern cars, providing a seamless and intuitive interface for iOS users on the move.'
            },

            {
                id: 49,
                name: 'ADAS',
                stacks_id: 27,
                description: 'Advanced Driver Assistance Systems - A set of systems used in vehicles to provide an intelligent and comfortable driving experience.',
                usage_percentage: 'ADAS has been integrated into 32.5% of vehicles to enhance safety-critical features and augment driving safety.'
            },

            {
                id: 50,
                name: 'LIDAR',
                stacks_id: 27,
                description: 'A method for measuring distances by illuminating the target with laser light and measuring the reflection with a sensor.',
                usage_percentage: 'LIDAR is a crucial technology, incorporated in 32.5% of vehicles to ensure safety and facilitate features like autonomous driving.'
            },

            {
                id: 51,
                name: 'TensorFlow',
                stacks_id: 28,
                description: 'An open-source software library developed by Google Brain for dataflow and differentiable programming across a range of tasks.',
                usage_percentage: 'TensorFlow dominates the voice recognition scene, being utilized in about 45% of systems focusing on sound pattern detection.'
            },

            {
                id: 52,
                name: 'Keras',
                stacks_id: 28,
                description: 'An open-source software library that provides a Python interface for artificial neural networks, using TensorFlow as a backend.',
                usage_percentage: 'Keras is a popular choice for voice recognition, being adopted in roughly 45% of systems to interpret voice commands and ambient sounds.'
            },

            {
                id: 53,
                name: 'Scikit-learn',
                stacks_id: 29,
                description: 'A free machine learning library for Python, built on NumPy, SciPy, and Matplotlib.',
                usage_percentage: 'Scikit-learn is the go-to choice for about 31.5% of content recommendation platforms, personalizing user experiences based on behavior and preferences.'
            },

            {
                id: 54,
                name: 'PyTorch',
                stacks_id: 29,
                description: 'An open-source machine learning library based on the Torch library, used for applications like deep learning and computer vision.',
                usage_percentage: 'PyTorch is utilized in roughly 31.5% of platforms aiming to offer personalized content recommendations to users.'
            },

            {
                id: 55,
                name: 'PCA',
                stacks_id: 30,
                description: 'Principal Component Analysis - A technique used for dimensionality reduction in machine learning.',
                usage_percentage: 'PCA is leveraged by about 36% of businesses to discern underlying market trends and derive insightful data-driven strategies.'
            },

            {
                id: 56,
                name: 'T-SNE',
                stacks_id: 30,
                description: 'T-distributed Stochastic Neighbor Embedding - A machine learning algorithm used for visualization of high-dimensional datasets.',
                usage_percentage: 'T-SNE is adopted by around 36% of businesses aiming for a profound understanding of market trends and patterns.'
            },
            {
                id: 57,
                name: 'OpenAI Gym',
                stacks_id: 31,
                description: 'A toolkit for developing and comparing reinforcement learning algorithms, primarily used in robotics and agent-based systems.',
                usage_percentage: 'OpenAI Gym is a cornerstone for 69% of projects focusing on robotic autonomous navigation and environment adaptation.'
            },

            {
                id: 58,
                name: 'DDPG',
                stacks_id: 31,
                description: 'Deep Deterministic Policy Gradient - A model-free, off-policy algorithm used in reinforcement learning contexts.',
                usage_percentage: 'DDPG is applied in 69% of projects aiming to equip robotic systems with adaptive navigation capabilities.'
            },

            {
                id: 59,
                name: 'PPO',
                stacks_id: 32,
                description: 'Proximal Policy Optimization - A reinforcement learning method which offers stability and efficiency.',
                usage_percentage: 'PPO is an integral part of 61% of AI game development projects aiming for dynamic character behavior.'
            },

            {
                id: 60,
                name: 'A3C',
                stacks_id: 32,
                description: 'Asynchronous Advantage Actor-Critic - A parallelized reinforcement learning algorithm.',
                usage_percentage: 'A3C finds its application in 61% of AI game projects, enhancing character adaptability and in-game strategy formulation.'
            },

            {
                id: 61,
                name: 'Convolutional Neural Networks',
                stacks_id: 33,
                description: 'Neural networks especially designed for image processing and recognizing patterns in visual data.',
                usage_percentage: 'Convolutional Neural Networks are a staple in 80% of image processing tools, leading the AI-driven visual recognition domain.'
            },

            {
                id: 62,
                name: 'ResNet',
                stacks_id: 33,
                description: 'Deep residual networks designed to facilitate training of very deep neural networks, predominantly for image classification tasks.',
                usage_percentage: 'ResNet is a preferred choice for 80% of advanced image processing tools, ensuring accurate visual data classification.'
            },

            {
                id: 63,
                name: 'BERT',
                stacks_id: 34,
                description: 'Bidirectional Encoder Representations from Transformers - A technique for NLP tasks that has set state-of-the-art benchmarks.',
                usage_percentage: 'BERT powers 75% of modern NLP tasks, from chatbots to advanced text interpretation systems.'
            },

            {
                id: 64,
                name: 'GPT-2',
                stacks_id: 34,
                description: 'Generative Pretrained Transformer 2 - A model that has gained recognition for its capability to produce coherent paragraphs of text.',
                usage_percentage: 'GPT-2 is at the heart of 75% of NLP systems, ensuring human-like text generation and interpretation.'
            },

            {
                id: 65,
                name: 'LSTM',
                stacks_id: 35,
                description: 'Long Short-Term Memory - A type of recurrent neural network capable of learning long-term dependencies.',
                usage_percentage: 'LSTM is utilized in 82% of complex data modeling tasks, especially when dealing with time-series data.'
            },

            {
                id: 66,
                name: 'Transformer Networks',
                stacks_id: 35,
                description: 'A type of deep learning model architecture, primarily used in handling sequences of data.',
                usage_percentage: 'Transformer Networks underpin 82% of complex data analysis platforms, offering profound insights.'
            },

            {
                id: 67,
                name: 'R',
                stacks_id: 36,
                description: 'A language and environment for statistical computing and graphics.',
                usage_percentage: 'R is a go-to choice for 80% of research projects when it comes to data analysis and statistical computations.'
            },

            {
                id: 68,
                name: 'Python',
                stacks_id: 36,
                description: 'A high-level, general-purpose programming language, popular for data analysis and machine learning.',
                usage_percentage: 'Python powers statistical tools in 80% of research-oriented projects, providing versatility and efficiency.'
            },

            {
                id: 69,
                name: 'SPSS',
                stacks_id: 36,
                description: 'A widely used program for statistical analysis in social science, also considered as the data mining software application.',
                usage_percentage: 'SPSS is a primary tool in 80% of research projects that delve deep into data patterns and trends.'
            },

            {
                id: 70,
                name: 'TensorFlow',
                stacks_id: 37,
                description: 'An end-to-end open source platform for machine learning, popular for deep learning applications.',
                usage_percentage: 'TensorFlow is at the core of 85% of advanced AI projects, providing a robust framework for deep learning.'
            },

            {
                id: 71,
                name: 'Keras',
                stacks_id: 37,
                description: 'An open-source software library that provides a Python interface for artificial neural networks, using TensorFlow as a backend.',
                usage_percentage: 'Keras is employed in 85% of AI projects focusing on deep learning, thanks to its intuitive API and extensive capabilities.'
            },

            {
                id: 72,
                name: 'PyTorch',
                stacks_id: 37,
                description: 'An open-source machine learning library based on the Torch library, ideal for applications such as deep learning and computer vision.',
                usage_percentage: 'PyTorch is integral to 85% of advanced machine learning tasks, offering flexibility and powerful tensor computations.'
            },

            {
                id: 73,
                name: 'CNN',
                stacks_id: 38,
                description: 'Convolutional Neural Networks - Deep learning algorithms mainly used for image data.',
                usage_percentage: 'CNNs are the backbone of 90% of image-based AI projects, transforming how machines perceive and interpret visual information.'
            },

            {
                id: 74,
                name: 'ImageNet',
                stacks_id: 38,
                description: 'A large visual database designed for use in visual object recognition software research.',
                usage_percentage: 'ImageNet has fueled 90% of AI projects focusing on image recognition, providing a vast dataset for model training.'
            },

            {
                id: 75,
                name: 'OpenCV',
                stacks_id: 38,
                description: 'Open Source Computer Vision Library - A library of programming functions for real-time computer vision.',
                usage_percentage: 'OpenCV is a staple in 90% of image-based AI solutions, facilitating real-time image and video processing.'
            },

            {
                id: 76,
                name: 'RNN',
                stacks_id: 39,
                description: 'Recurrent Neural Networks - A class of neural networks that excel at processing sequences of data.',
                usage_percentage: 'RNNs are the go-to choice for 75% of projects handling sequential data, ensuring optimal time series processing.'
            },

            {
                id: 77,
                name: 'LSTM',
                stacks_id: 39,
                description: 'Long Short-Term Memory - A type of RNN known for its ability to remember long sequences of data.',
                usage_percentage: 'LSTM finds its place in 75% of projects focusing on sequential data, from stock predictions to audio processing.'
            },

            {
                id: 78,
                name: 'GRU',
                stacks_id: 39,
                description: 'Gated Recurrent Units - A variation of RNNs that often outperform standard RNNs in certain tasks.',
                usage_percentage: 'GRU is employed in 75% of projects when advanced sequential data handling is required.'
            },

            {
                id: 79,
                name: 'Industrial Robots',
                stacks_id: 40,
                description: 'Automated, programmable machines capable of carrying out complex tasks with high precision.',
                usage_percentage: 'Industrial Robots are the backbone of 65% of manufacturing industries focusing on automation and precision.'
            },

            {
                id: 80,
                name: 'CNC Machines',
                stacks_id: 40,
                description: 'Computer Numerical Control machines - Automated milling devices that make industrial parts without direct human assistance.',
                usage_percentage: 'CNC Machines are integral to 65% of manufacturing industries aiming for high-precision parts and minimal manual intervention.'
            },
            {
                id: 81,
                name: 'Arduino',
                stacks_id: 41,
                description: 'Open-source electronic prototyping platform enabling users to create interactive electronic objects.',
                usage_percentage: 'Arduino is widely used in 70% of beginner to intermediate robotic projects.'
            },
            {
                id: 82,
                name: 'Raspberry Pi',
                stacks_id: 41,
                description: 'A small and affordable computer used in various applications and for several different types of projects.',
                usage_percentage: 'Raspberry Pi is integrated into 70% of DIY tech projects due to its flexibility and affordability.'
            },
            {
                id: 83,
                name: 'Thermal Sensors',
                stacks_id: 42,
                description: 'Devices that detect and measure temperature changes.',
                usage_percentage: 'Used in 85% of IoT projects for environment monitoring.'
            },
            {
                id: 84,
                name: 'Motion Sensors',
                stacks_id: 42,
                description: 'Devices that detect moving objects, particularly people.',
                usage_percentage: 'A common component in 85% of security and automation IoT devices.'
            },
            {
                id: 85,
                name: 'Google Translate API',
                stacks_id: 43,
                description: 'A cloud-based automatic translation tool from Google.',
                usage_percentage: 'Employs neural machine translation to convert text from one language to another.'
            },
            {
                id: 86,
                name: 'IBM Language Translator',
                stacks_id: 43,
                description: 'A cloud-based API for real-time translation between multiple languages.',
                usage_percentage: 'Popularly used in enterprise solutions for cross-border communications.'
            },
            {
                id: 87,
                name: 'NLTK',
                stacks_id: 44,
                description: 'Natural Language Toolkit - A platform for Python programs to work with human language data.',
                usage_percentage: 'Integral in 50% of academic projects focusing on text analysis.'
            },
            {
                id: 88,
                name: 'TextBlob',
                stacks_id: 44,
                description: 'A Python library for processing textual data, providing simple API for diving into common natural language processing tasks.',
                usage_percentage: 'Preferred in 33% of sentiment analysis applications for its simplicity.'
            },
            {
                id: 89,
                name: 'Dialogflow',
                stacks_id: 45,
                description: 'Google Cloud-based service for building conversational interfaces for websites, apps, and digital platforms.',
                usage_percentage: 'Dialogflow powers 60% of interactive chatbots in customer service portals.'
            },
            {
                id: 90,
                name: 'Microsoft Bot Framework',
                stacks_id: 45,
                description: 'A comprehensive framework for building enterprise-grade conversational AI experiences.',
                usage_percentage: 'Utilized in 30% of enterprise bots and virtual assistants.'
            },
            {
                id: 91,
                name: 'Cisco',
                stacks_id: 46,
                description: 'Leading company in networking hardware, software, and telecommunications equipment.',
                usage_percentage: 'Cisco solutions are at the core of 70% of large-scale IT infrastructure.'
            },
            {
                id: 92,
                name: 'Juniper',
                stacks_id: 46,
                description: 'Provider of networking solutions that creates secure and scalable networks.',
                usage_percentage: 'Juniper products are integral to 25% of enterprise networking systems.'
            },
            {
                id: 93,
                name: 'TCP/IP',
                stacks_id: 47,
                description: 'Set of communication protocols used for the internet and similar networks.',
                usage_percentage: 'TCP/IP forms the backbone of 95% of modern network communications.'
            },
            {
                id: 94,
                name: 'HTTP/HTTPS',
                stacks_id: 47,
                description: 'Protocols for transmitting hypertext requests and information between servers and browsers.',
                usage_percentage: 'All web browsers use HTTP/HTTPS for web document viewing.'
            },
            {
                id: 95,
                name: 'Bluetooth',
                stacks_id: 48,
                description: 'A wireless technology standard for exchanging data over short distances.',
                usage_percentage: '89% of modern electronic devices have Bluetooth capability for peripheral connectivity.'
            },
            {
                id: 96,
                name: 'Wi-Fi',
                stacks_id: 48,
                description: 'A family of wireless network protocols based on the IEEE 802.11 standards.',
                usage_percentage: 'Used by 99% of devices for wireless internet connectivity.'
            },
            {
                id: 97,
                name: 'AWS EC2',
                stacks_id: 49,
                description: 'Amazon Web Service Elastic Compute Cloud, a part of Amazon.com’s cloud-computing platform.',
                usage_percentage: '50% of virtual server deployments on the cloud utilize AWS EC2.'
            },
            {
                id: 98,
                name: 'Azure Virtual Machines',
                stacks_id: 49,
                description: 'Microsoft’s cloud computing platform solution for running virtualized Windows and Linux servers.',
                usage_percentage: '30% of enterprise cloud server deployments are hosted on Azure VMs.'
            },
            {
                id: 99,
                name: 'Heroku',
                stacks_id: 50,
                description: 'Cloud platform as a service supporting several programming languages.',
                usage_percentage: '20% of startup web app deployments favor Heroku for its simplicity.'
            },
            {
                id: 100,
                name: 'Google App Engine',
                stacks_id: 50,
                description: 'A platform for building scalable web apps and mobile backends on Google’s infrastructure.',
                usage_percentage: 'Used by 15% of businesses preferring Google Cloud solutions.'
            },
            {
                id: 101,
                name: 'SaaS applications',
                stacks_id: 51,
                description: 'Cloud-based software that offers solutions to users over the internet without the need for local installations.',
                usage_percentage: '76% of businesses utilize various SaaS solutions for operational efficiency.'
            },
            {
                id: 102,
                name: 'Office 365',
                stacks_id: 51,
                description: 'Microsoft’s suite of cloud-based productivity and collaboration services.',
                usage_percentage: 'Office 365 is the preferred cloud productivity suite for 60% of enterprises globally.'
            },
            {
                id: 103,
                name: 'Firewalls',
                stacks_id: 52,
                description: 'Network security systems that monitor and control incoming and outgoing network traffic based on predetermined security policies.',
                usage_percentage: '98% of organizations deploy firewalls as a primary defense mechanism against external threats.'
            },
            {
                id: 104,
                name: 'Intrusion Detection Systems',
                stacks_id: 52,
                description: 'Device or software application that monitors a network or systems for malicious activities or policy violations.',
                usage_percentage: '82% of enterprises have IDS in place for early detection of security breaches.'
            },
            {
                id: 105,
                name: 'Encryption',
                stacks_id: 53,
                description: 'The method of converting data into a code to prevent unauthorized access.',
                usage_percentage: '95% of businesses employ encryption to safeguard sensitive data during storage or transit.'
            },
            {
                id: 106,
                name: 'VPNs',
                stacks_id: 53,
                description: 'Virtual Private Networks that establish a secure tunnel for data transmission over the internet.',
                usage_percentage: 'Over 70% of remote workers utilize VPNs for secure access to organizational resources.'
            },
            {
                id: 107,
                name: 'SSL certificates',
                stacks_id: 54,
                description: 'Small data files that bind a cryptographic key to an organization’s details and secure server-client communications.',
                usage_percentage: '90% of e-commerce websites use SSL certificates to ensure secure transactions.'
            },
            {
                id: 108,
                name: 'Secure coding practices',
                stacks_id: 54,
                description: 'Programming practices that focus on writing code free from vulnerabilities and prevent software threats.',
                usage_percentage: 'Every responsible developer employs secure coding practices, with 85% of software firms enforcing them as standards.'
            }
    

            ]);
        });
};
