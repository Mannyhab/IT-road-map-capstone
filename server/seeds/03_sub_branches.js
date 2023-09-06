exports.seed = async function(knex) {
  // Disable foreign key checks
  await knex.raw('SET FOREIGN_KEY_CHECKS = 0');

  // Deletes ALL existing entries for sub_branches table
  await knex('sub_branches').truncate();

  // Inserts seed entries for sub_branches table
  await knex('sub_branches').insert([
    {id:1,branch_id: 1, title: 'Frontend', desc: 'Design UI', detail_desc: 'Design and build user interfaces for web applications.'},
    {id:2,branch_id: 1, title: 'Backend', desc: 'Server Logic', detail_desc: 'Handle server-side application logic and database operations.'},
    {id:3,branch_id: 1, title: 'Full Stack', desc: 'Full App Development', detail_desc: 'Handle both frontend and backend of applications.'},
    {id:4,branch_id: 2, title: 'iOS', desc: 'Apple OS App Development', detail_desc: 'Design and develop apps for Apple mobile devices.'},
    {id:5,branch_id: 2, title: 'Android', desc: 'Android OS App Development', detail_desc: 'Design and develop apps for Android mobile devices.'},
    {id:6,branch_id: 2, title: 'Cross Platform', desc: 'Universal App Development', detail_desc: 'Design and develop apps that work across multiple platforms.'},
    {id:7,branch_id: 3, title: 'Windows', desc: 'Windows OS App Development', detail_desc: 'Design and develop apps for the Windows desktop environment.'},
    {id:8,branch_id: 3, title: 'Mac', desc: 'Mac OS App Development', detail_desc: 'Design and develop apps for the Mac desktop environment.'},
    {id:9,branch_id: 3, title: 'Linux', desc: 'Linux OS App Development', detail_desc: 'Design and develop apps for the Linux desktop environment.'},
    {id:10,branch_id: 4, title: 'PC', desc: 'Personal Computer Game Dev', detail_desc: 'Design and develop games for personal computers.'},
    {id:11,branch_id: 4, title: 'Console', desc: 'Console Game Dev', detail_desc: 'Design and develop games for gaming consoles.'},
    {id:12,branch_id: 4, title: 'Mobile', desc: 'Mobile Game Dev', detail_desc: 'Design and develop games for mobile devices.'},
    {id:13,branch_id: 4, title: 'VR', desc: 'Virtual Reality Game Dev', detail_desc: 'Design and develop games for virtual reality platforms.'},
    {id:14,branch_id: 5, title: 'Microcontrollers', desc: 'Tiny Computing Devices', detail_desc: 'Program and manage small computing devices that control other devices.'},
    {id:15,branch_id: 5, title: 'IoT', desc: 'Internet of Things', detail_desc: 'Develop solutions for devices connected to the internet.'},
    {id:16,branch_id: 5, title: 'Automotive', desc: 'Car Systems Development', detail_desc: 'Develop software solutions for modern vehicles.'},
    {id:17,branch_id: 6, title: 'Supervised', desc: 'Guided Machine Learning', detail_desc: 'Machine learning with guidance. The machine is provided input-output pairs.'},
    {id:18,branch_id: 6, title: 'Unsupervised', desc: 'Independent Machine Learning', detail_desc: 'Machine learning without any guidance. The machine is given data without explicit instructions.'},
    {id:19,branch_id: 6, title: 'Reinforcement', desc: 'Reward-based Machine Learning', detail_desc: 'Machine learning where the machine is trained via a reward-based mechanism.'},
    {id:20,branch_id: 7, title: 'Data Visualization', desc: 'Visual Data Representation', detail_desc: 'Use visual elements to represent data and insights.'},
      {id:21,branch_id: 7, title: 'Statistical Analysis', desc: 'Data Analysis', detail_desc: 'Use statistical tools to interpret data patterns and trends.'},
      {id:22,branch_id: 8, title: 'Deep Learning', desc: 'Advanced Machine Learning', detail_desc: 'Machine learning techniques based on artificial neural networks.'},
      {id:23,branch_id: 8, title: 'Convolutional NNs', desc: 'Image-based Networks', detail_desc: 'Neural networks designed for image processing.'},
      {id:24,branch_id: 8, title: 'Recurrent NNs', desc: 'Sequential Data Networks', detail_desc: 'Neural networks designed for sequential data like time series.'},
      {id:25,branch_id: 9, title: 'Automated Machines', desc: 'Robot Movement', detail_desc: 'Robots and devices that perform tasks without human intervention.'},
      {id:26,branch_id: 9, title: 'Robot Controllers', desc: 'Robot Command Units', detail_desc: 'Devices that control the actions of a robot.'},
      {id:27,branch_id: 9, title: 'Sensors', desc: 'Data Collection Devices', detail_desc: 'Devices that detect changes in the environment and send data to a processing unit.'},
      {id:28,branch_id: 10, title: 'Translations', desc: 'Language Conversion', detail_desc: 'Convert text or speech from one language to another using algorithms.'},
      {id:29,branch_id: 10, title: 'Sentiment Analysis', desc: 'Mood Detection', detail_desc: 'Determine the sentiment or mood behind a piece of text.'},
      {id:30,branch_id: 10, title: 'Chatbots', desc: 'Automated Chat Systems', detail_desc: 'Systems designed to simulate human conversation.'},
      {id:31,branch_id: 11, title: 'Infrastructure Management', desc: 'Network Foundations', detail_desc: 'Managing and maintaining the essential networking hardware and software.'},
      {id:32,branch_id: 12, title: 'Protocol Standards', desc: 'Communication Rules', detail_desc: 'Set rules that allow computers to communicate across a network.'},
      {id:33,branch_id: 13, title: 'Wireless Technologies', desc: 'Untethered Connections', detail_desc: 'Techniques and standards for transmitting data without physical connections.'},
      {id:34,branch_id: 14, title: 'Infrastructure Solutions', desc: 'Cloud Hardware', detail_desc: 'Cloud services that offer virtualized computing resources over the Internet.'},
      {id:35,branch_id: 15, title: 'Platform Solutions', desc: 'Cloud Software', detail_desc: 'Services that provide a platform allowing customers to develop, run, and manage applications.'},
      {id:36,branch_id: 16, title: 'Software Solutions', desc: 'Cloud Apps', detail_desc: 'Cloud-based software that is hosted on remote servers for use on the internet.'},
      {id:37,branch_id: 17, title: 'Network Safeguarding', desc: 'Protection of Data Transfer', detail_desc: 'Protecting data during transfer across or access from networks.'},
      {id:38,branch_id: 18, title: 'Information Assurance', desc: 'Data Protection', detail_desc: 'Ensuring the integrity, availability, authentication, and confidentiality of user data.'},
      {id:39,branch_id: 19, title: 'Application Defense', desc: 'Software Security', detail_desc: 'Securing software against malicious attacks and vulnerabilities.'}
  ]);

  // Enable foreign key checks
  await knex.raw('SET FOREIGN_KEY_CHECKS = 1');
};
