import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NewsList.css'; // Import a CSS file for styling (if needed)
import { Link } from 'react-router-dom';



function WorldNews() {
  const [articles, setArticles] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=world-news&api-key=n0L4wORyKDAUUGU0ypXFt47mNTMLptYV');
        //console.log(response.data.response.docs.slice(1,3));


        setArticles(response.data.response.docs);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  //console.log(articles[0]?.multimedia[0]?.url);


  return (
    <div className="article-container">

      {/* <img src={"https://static01.nyt.com/" + articles[0]?.multimedia[0]?.url} alt="Ini Gambar GG" /> */}

      <h1>World News - New York Times</h1>
      <div className="card-container">
        {articles.map((article, index) => (
          article._id && (
            
            
            <div className="card" key={index}>
            {/* {JSON.stringify(article._id)} */}
            <h2>{article.headline.main}</h2>
            <img src={
              
              article?.multimedia[0] ? 
            
              "https://static01.nyt.com/" + article?.multimedia[0]?.url : 

              "https://www.telegraph.co.uk/content/dam/world-news/2024/02/12/TELEMMGLPICT000366236201_17077625115270_trans_NvBQzQNjv4BqF4WwDpbO-CkdHTTCi9TWzkikPYR0xYwuEBLwP9UFqPg.jpeg?imwidth=480"

            } alt="Ini Gambar GG" style={{width:'100%'}} />
            {/* <p>{article.snippet}</p> */}
            <Link to={`/world-news-detail/${article._id.split('nyt://')[1].split('/')[1]}`}>Read More</Link>
          </div>)
        ))}
      </div>
    </div>
  );
}

export default WorldNews;
