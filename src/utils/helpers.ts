import { Article } from "../types";

export const getNyTimeImageUrl = (multimedia: any[]): string | undefined => {
  console.log("getNyTimeImageUrl", multimedia);
  const thumbnail =
    multimedia?.length > 0
      ? multimedia.filter((media) => media.subtype === "thumbLarge")[0].url
      : "";
  return thumbnail ? `https://www.nytimes.com/${thumbnail}` : undefined;
};

export const convertNewsArticle = (articles: any[]): Article[] => {
  return articles.map((article) => ({
    title: article.title,
    description: article.abstract || article.description,
    url: article.url,
    source: article.source?.name ? article.source.name : article.source,
    image: article.urlToImage
      ? article.urlToImage
      : getNyTimeImageUrl(article.multimedia),
  }));
};
