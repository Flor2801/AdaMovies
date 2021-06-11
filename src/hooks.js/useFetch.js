import { useState, useEffect } from "react";


// Hook custom para generar el fetch 
const useFetch = (url) => {
  const [content, setContent] = useState([]);
  

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setContent(data.results);
      });
  }, []);

  return content;
};

export default useFetch;
