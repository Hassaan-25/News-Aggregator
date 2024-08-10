import { Article } from "../types";

export const getNyTimeImageUrl = (multimedia: any[]): string | undefined => {
  if (!multimedia || multimedia.length === 0) {
    return undefined;
  }

  const thumbnail = multimedia.find((media) => media.subtype === "thumbLarge");

  return thumbnail ? `https://www.nytimes.com/${thumbnail.url}` : undefined;
};

export const convertNewsArticle = (articles: any[]): Article[] => {
  return articles && articles.length > 0
    ? articles.map((article) => ({
        title: article.title || article.webTitle,
        description: article.abstract || article.description,
        url: article.url || article.webUrl,
        publishDate:
          article.publishedAt || article.webPublicationDate || article.pub_date,
        source: article.source?.name ? article.source.name : article.source,
        image: article.urlToImage
          ? article.urlToImage
          : getNyTimeImageUrl(article.multimedia),
      }))
    : [];
};
