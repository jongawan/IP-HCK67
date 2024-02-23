import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function IndonesianNews() {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=indonesian-news&api-key=n0L4wORyKDAUUGU0ypXFt47mNTMLptYV');
        setArticles(response.data.response.docs);
        setSearchResults(response.data.response.docs);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const results = articles.filter(article =>
      article.headline.main.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, articles]);

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="article-container">
      <h1>Indonesian News - New York Times</h1>
      <input
        type="text"
        placeholder="Search articles..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="card-container">
        {searchResults.map((article, index) => (
          <div className="card" key={index}>
            <h2>{article.headline.main}</h2>
            <img
              className="mb-5"
              src={
                article?.multimedia[0] ?
                "https://static01.nyt.com/" + article?.multimedia[0]?.url :
                "https://www.telegraph.co.uk/content/dam/world-news/2024/02/12/TELEMMGLPICT000366236201_17077625115270_trans_NvBQzQNjv4BqF4WwDpbO-CkdHTTCi9TWzkikPYR0xYwuEBLwP9UFqPg.jpeg?imwidth=480"
              }
              alt="Ini Gambar GG"
              style={{width:'100%'}}
            />
            <Link
              to={`/indonesian-news-detail/${article._id.split('nyt://')[1].split('/')[1]}`}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IndonesianNews;





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './NewsList.css'; // Import a CSS file for styling (if needed)
// import { Link } from 'react-router-dom';



// function IndonesianNews() {
//   const [articles, setArticles] = useState([]);


//   useEffect(() => {
//     const fetchData = async () => {
//       try {

//         const response = await axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=indonesian-news&api-key=n0L4wORyKDAUUGU0ypXFt47mNTMLptYV');
//         //console.log(response.data.response.docs.slice(1,3));


//         setArticles(response.data.response.docs);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   //console.log(articles[0]?.multimedia[0]?.url);


//   return (
//     <div className="article-container">

//       {/* <img src={"https://static01.nyt.com/" + articles[0]?.multimedia[0]?.url} alt="Ini Gambar GG" /> */}

//       <h1>Indonesian News - New York Times</h1>
//       <div className="card-container">
//         {articles.map((article, index) => (
//           article._id && (
            
            
//             <div className="card" key={index}>
//             {/* {JSON.stringify(article._id)} */}
//             <h2>{article.headline.main}</h2>
//             <img className="mb-5" src={
              
//               article?.multimedia[0] ? 
            
//               "https://static01.nyt.com/" + article?.multimedia[0]?.url : 

//               "https://www.telegraph.co.uk/content/dam/world-news/2024/02/12/TELEMMGLPICT000366236201_17077625115270_trans_NvBQzQNjv4BqF4WwDpbO-CkdHTTCi9TWzkikPYR0xYwuEBLwP9UFqPg.jpeg?imwidth=480"

//             } alt="Ini Gambar GG" style={{width:'100%'}} />
//             {/* <p>{article.snippet}</p> */}
//             <Link to={`/indonesian-news-detail/${article._id.split('nyt://')[1].split('/')[1]}`} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Read More</Link>
//           </div>)
//         ))}
//       </div>
//     </div>
//   );
// }

// export default IndonesianNews;
