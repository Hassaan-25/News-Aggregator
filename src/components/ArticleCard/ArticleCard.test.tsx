import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ArticleCard from "./ArticleCard";
import { Article } from "../../types";
import placeHolderImg from "../../assets/placeholder-img.jpg";
import { DEFAULT_DATE_FORMAT } from "./ArticleCard";
import moment from "moment";

describe("ArticleCard", () => {
  const mockArticle: Article = {
    title: "Test Article Title",
    description: "Test Article Description",
    url: "https://example.com",
    publishDate: "2024-08-10T12:34:56Z",
    source: "Test Source",
    image: "https://example.com/image.jpg",
  };

  it("renders the article title, description, and source correctly", () => {
    render(<ArticleCard article={mockArticle} />);

    const titleElement = screen.getByText("Test Article Title");
    const descriptionElement = screen.getByText("Test Article Description");
    const sourceElement = screen.getByText("Source: Test Source");

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(sourceElement).toBeInTheDocument();
  });

  it("renders the publish date correctly formatted", () => {
    render(<ArticleCard article={mockArticle} />);

    const formattedDate = moment(mockArticle.publishDate).format(
      DEFAULT_DATE_FORMAT
    );

    const dateElement = screen.getByText(`Published on ${formattedDate}`);
    expect(dateElement).toBeInTheDocument();
  });

  it("renders the image correctly if provided", () => {
    render(<ArticleCard article={mockArticle} />);

    const imageElement = screen.getByAltText("Test Article Title");
    expect(imageElement).toHaveAttribute("src", mockArticle.image);
  });

  it("renders the placeholder image if no image is provided", () => {
    const articleWithoutImage: Article = { ...mockArticle, image: undefined };
    render(<ArticleCard article={articleWithoutImage} />);

    const imageElement = screen.getByAltText("Test Article Title");
    expect(imageElement).toHaveAttribute("src", placeHolderImg);
  });

  it("renders the read more link with the correct href", () => {
    render(<ArticleCard article={mockArticle} />);

    const linkElement = screen.getByText("Read more");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", mockArticle.url);
    expect(linkElement).toHaveAttribute("target", "_blank");
  });

  it("does not render the source text if the source is not provided", () => {
    const articleWithoutSource: Article = { ...mockArticle, source: undefined };
    render(<ArticleCard article={articleWithoutSource} />);

    const sourceElement = screen.queryByText("Source:");
    expect(sourceElement).not.toBeInTheDocument();
  });
});
