// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './NewsFeed.scss';

// function NewsFeed() {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     const apiKey = 'd2278149b07644368c0fc850b9000276';
//     const country = 'us'; // You can change this to your desired country
//     const pageSize = 3; // Number of articles to fetch
//     const timestamp = new Date().getTime();
//     axios.get(`https://newsapi.org/v2/top-headlines?apiKey=${apiKey}&country=${country}&category=technology&pageSize=${pageSize}&timestamp=${timestamp}`)
    
//       .then(response => {
//         setArticles(response.data.articles);
//       })
//       .catch(error => {
//         console.error('Error fetching news:', error);
//       });
//   }, []);

//   return (
//     <div className="news-feed">
//       <h2>Top Headlines</h2>
//       <div className="articles">
//         {articles.map(article => (
//           <div key={article.title} className="article">
//             <h3>{article.title}</h3>
//             <p>{article.description}</p>
//             {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
//             <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default NewsFeed;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NewsFeed.scss';

function NewsFeed() {
  const [articles, setArticles] = useState([]);

  const fetchNews = () => {
    const apiKey = 'd2278149b07644368c0fc850b9000276';
    const country = 'us'; 
    const pageSize = 3; 

    axios.get(`https://newsapi.org/v2/top-headlines?apiKey=${apiKey}&country=${country}&category=technology&pageSize=${pageSize}`)
      .then(response => {
        setArticles(response.data.articles);
      })
      .catch(error => {
        console.error('Error fetching news:', error);
      });
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="news-feed">
      <h2>Top Headlines</h2>
      <button onClick={fetchNews}>Refresh</button>
      <div className="articles">
        {articles.map(article => (
          <div key={article.title} className="article">
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsFeed;
