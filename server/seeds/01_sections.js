exports.seed = async function(knex) {
  // Disable foreign key checks
  await knex.raw('SET FOREIGN_KEY_CHECKS = 0');

  // Deletes ALL existing entries for sections table
  await knex('sections').truncate();

  // Inserts seed entries for sections table
  await knex('sections').insert([
    {
      id: 1,
      title: 'Software Development', 
      desc: 'The process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components.',
      detailedDesc: 'Software development is a process by which standalone or individual software is created using a specific programming language.'
    },
    {
      id: 2,
      title: 'Data Science', 
      desc: 'A multidisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data.',
      detailedDesc: 'Data Science is an interdisciplinary field about processes and systems to extract knowledge or insights from data in various forms.'
    },
    {
      id: 3,
      title: 'AI and Robotics', 
      desc: 'The interdisciplinary branch of science and engineering dedicated to creating machines that act and behave like humans.',
      detailedDesc: 'AI & Robotics includes the design, construction, operation, and use of robots to perform tasks done traditionally by human beings.'
    },
    {
      id: 4,
      title: 'Networking', 
      desc: 'The practice of interfacing two or more computing devices with each other for the purpose of sharing data.',
      detailedDesc: 'Networking involves design, construction, and use of a network, including the physical (cabling, hub, bridge, switch, router, etc.), the selection and use of telecommunication protocol and computer software for using and managing the network, and the establishment of operation policies and procedures related to the network.'
    },
    {
      id: 5,
      title: 'Cloud Computing', 
      desc: 'The delivery of different services through the Internet, including data storage, servers, databases, networking, and software.',
      detailedDesc: 'Cloud computing is a way of delivering various computing services—such as servers, storage, databases, networking, software, analytics, intelligence, and more—over the Cloud.'
    },
    {
      id: 6,
      title: 'Cybersecurity', 
      desc: 'The practice of protecting systems, networks, and programs from digital attacks.',
      detailedDesc: 'Cybersecurity involves implementing measures to prevent unauthorized access to data, websites, and computerized systems in the digital computing landscape.'
    }
    // ... other seed entries here ...
  ]);

  // Enable foreign key checks
  await knex.raw('SET FOREIGN_KEY_CHECKS = 1');
};
