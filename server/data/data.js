const sections = [
   {
       title: "Software Development",
       desc: "Building applications and software solutions.",
       color: "#FF5733",
       detailedDesc: "The process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components.",
       parentId: null,
       subsections: [
           {
               title: "Web Development",
               desc: "Designing and building websites.",
               color: "#FF8D33",
               detailedDesc: "Creating websites and web applications. It encompasses several different aspects, including webpage layout, content production, and graphic design.",
               parentId: "Software Development",
               subsections: [
                   {
                       title: "Frontend",
                       desc: "The client side of web development.",
                       color: "#FFB433",
                       detailedDesc: "Dealing with what users see directly, it's about the look, feel, and design of the website. Also responsible for the website's user experience.",
                       parentId: "Web Development",
                       subsections: [
                           {
                               title: "HTML, CSS, JavaScript",
                               desc: "Core technologies for web displays.",
                               color: "#FFD433",
                               detailedDesc: "Standard tools to structure content, style presentations, and enable interactivity on the web.",
                               parentId: "Frontend",
                               subsections: []
                           },
                           {
                               title: "Frameworks and Libraries",
                               desc: "Tools to expedite frontend development.",
                               color: "#FFD433",
                               detailedDesc: "React, Vue.js, Angular, Svelte, Bootstrap and other tools that aid in quicker and structured web development.",
                               parentId: "Frontend",
                               subsections: []
                           },
                           {
                               title: "Tools",
                               desc: "Essential tools for web building.",
                               color: "#FFD433",
                               detailedDesc: "Webpack, Babel, Gulp, and others that help in bundling, transpiling, and automating tasks.",
                               parentId: "Frontend",
                               subsections: []
                           }
                       ]
                   },
                   {
                       title: "Backend",
                       desc: "Server side of web development.",
                       color: "#FFB433",
                       detailedDesc: "Deals with how the website works, updates, and changes. This refers to everything that the user can't see in the browser, like databases and servers.",
                       parentId: "Web Development",
                       subsections: [
                           {
                               title: "Languages",
                               desc: "Programming languages for server.",
                               color: "#FFD433",
                               detailedDesc: "Node.js, Django, Ruby on Rails, PHP, Java (Spring Boot), .NET and others that power the backend operations.",
                               parentId: "Backend",
                               subsections: []
                           },
                           {
                               title: "Serverless",
                               desc: "Cloud functions execution model.",
                               color: "#FFD433",
                               detailedDesc: "AWS Lambda, Azure Functions, and other serverless architectures to run code in response to events.",
                               parentId: "Backend",
                               subsections: []
                           },
                           {
                               title: "APIs",
                               desc: "Protocols for building and interacting.",
                               color: "#FFD433",
                               detailedDesc: "RESTful, GraphQL and other architectures to facilitate communication between systems.",
                               parentId: "Backend",
                               subsections: []
                           }
                       ]
                   },
                   {
                       title: "Full Stack",
                       desc: "Combination of frontend and backend.",
                       color: "#FFB433",
                       detailedDesc: "Covers both aspects of website creation and is knowledgeable in both.",
                       parentId: "Web Development",
                       subsections: [
                           {
                               title: "Stacks",
                               desc: "Predefined tech stacks for full stack dev.",
                               color: "#FFD433",
                               detailedDesc: "MERN, MEAN, LAMP, JAMstack and other combinations of technologies for comprehensive development.",
                               parentId: "Full Stack",
                               subsections: []
                           },
                           {
                               title: "Tools",
                               desc: "Tools for facilitating full stack development.",
                               color: "#FFD433",
                               detailedDesc: "Next.js, Nuxt.js and other tools that ease the process of both frontend and backend development.",
                               parentId: "Full Stack",
                               subsections: []
                           }
                       ]
                   }
               ]
           }
           // ... Continue in the same pattern for other sections, subsections and technologies.
       ]
   }
];


