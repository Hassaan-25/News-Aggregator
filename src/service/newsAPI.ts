import axios from "axios";

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2";

export const fetchArticles = (query: string) => {
  const params: any = {
    q: query,
    sortBy: "popularity",
    apiKey: API_KEY,
  };

  // if (date) {
  //   params.from = date;
  // }

 

  return axios.get(`${BASE_URL}/everything`, { params });
};



// import axios from "axios";

// const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
// const BASE_URL = "https://newsapi.org/v2";

// export const fetchArticles = (query: string, category: string) => {
//   const params: any = {
//     q: query,
//     sortBy: "popularity",
//     apiKey: API_KEY,
//   };



//   if (category) {
//     params.category = category;
//   }

//   return axios.get(`${BASE_URL}/top-headlines`, { params });
// };

