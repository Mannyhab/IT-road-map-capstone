exports.seed = function(knex) {
  return knex('sections').del() // Clear the table first
      .then(function() {
          return knex('sections').insert([
              {
                title: 'Software Development', 
                desc: 'The process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components.',
                color: '#FF5733', 
                detailedDesc: 'Software development is a process by which standalone or individual software is created using a specific programming language.'
              },
              {
                title: 'Data Science', 
                desc: 'A multidisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data.',
                color: '#33FF57', 
                detailedDesc: 'Data Science is an interdisciplinary field about processes and systems to extract knowledge or insights from data in various forms.'
              },
              {
                title: 'AI & Robotics', 
                desc: 'The interdisciplinary branch of science and engineering dedicated to creating machines that act and behave like humans.',
                color: '#5733FF', 
                detailedDesc: 'AI & Robotics includes the design, construction, operation, and use of robots to perform tasks done traditionally by human beings.'
              },
              {
                title: 'Networking', 
                desc: 'The practice of interfacing two or more computing devices with each other for the purpose of sharing data.',
                color: '#FF33A6', 
                detailedDesc: 'Networking involves design, construction, and use of a network, including the physical (cabling, hub, bridge, switch, router, etc.), the selection and use of telecommunication protocol and computer software for using and managing the network, and the establishment of operation policies and procedures related to the network.'
              },
              {
                title: 'Cloud Computing', 
                desc: 'The delivery of different services through the Internet, including data storage, servers, databases, networking, and software.',
                color: '#A633FF', 
                detailedDesc: 'Cloud computing is a way of delivering various computing services—such as servers, storage, databases, networking, software, analytics, intelligence, and more—over the Cloud.'
              },
              {
                title: 'Cybersecurity', 
                desc: 'The practice of protecting systems, networks, and programs from digital attacks.',
                color: '#33FFF9', 
                detailedDesc: 'Cybersecurity involves implementing measures to prevent unauthorized access to data, websites, and computerized systems in the digital computing landscape.'
              }
          ]);
      });
};
