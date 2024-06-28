import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

function NewsBoard(props) {
  let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=fdfc2ee602ce4b208477b77179a060a1`;

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles))
      .catch((error) => console.error("Error fetching data:", error));
  }, [props.category, url]); // Include 'url' in the dependency array to fetch data whenever the URL changes

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {articles.map((news, index) => (
        <NewsItem
          key={index}
          title={news.title}
          description={news.description}
          src={news.urlToImage}
          url={news.url}
        />
      ))}
    </div>
  );
}

export default NewsBoard;
