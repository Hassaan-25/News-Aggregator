import { useEffect, useState } from "react";
import { Box, Flex, Spinner, Text } from "@chakra-ui/react";
import SearchBar from "../../components/SearchBar";
import FilterBar from "../../components/FilterBar";
import ArticleCard from "../../components/ArticleCard";
import { fetchArticles as fetchNewsAPIArticles } from "../../service/newsAPI";
import { useFiltersContext } from "../../context/FiltersContext";
// import { fetchArticles as fetchGuardianArticles } from "../../service/guardianAPI";
// import { fetchArticles as fetchNYTimesArticles } from "../../service/nyTimesAPI";

export interface Filters {
  category: string;
  date: string;
}

const HomePage = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [query, setQuery] = useState("");
  const {
    filters,
    actions: { updateFilters },
  } = useFiltersContext();
  // const [filters, setFilters] = useState<Filters>({ category: "", date: "" });
  const [loading, setLoading] = useState(true);

  const fetchAllArticles = async (query: string, filters: Filters) => {
    const defaultQuery = query || "election";
    const currentDate = filters.date || new Date().toISOString().split("T")[0];

    console.log(
      `Fetching articles with query: ${defaultQuery}, date: ${currentDate}`
    );

    try {
      const [newsAPIResponse /*, guardianResponse, nyTimesResponse */] =
        await Promise.all([
          fetchNewsAPIArticles(defaultQuery, currentDate),
          //   fetchGuardianArticles(defaultQuery, filters.category, currentDate),
          //   fetchNYTimesArticles(defaultQuery, filters.category, currentDate),
        ]);

      const allArticles = [
        ...newsAPIResponse.data.articles,
        // ...guardianResponse.data.response.results,
        // ...nyTimesResponse.data.response.docs,
      ];

      console.log("Fetched articles:", allArticles);

      setArticles(allArticles);
      setLoading(false); // Set loading to false when data is fetched
    } catch (error) {
      console.error("Error fetching articles:", error);
      setLoading(false); // Set loading to false even if there's an error
    }
  };

  useEffect(() => {
    fetchAllArticles(query, filters);
  }, [query, filters]);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
  };

  return (
    <Box className="home" p={4} pt={8}>
      <Flex justify="center" mb={4}>
        <SearchBar onSearch={handleSearch} />
      </Flex>
      <Flex justify="center" mb={4}>
        <FilterBar onFilter={(val) => console.log(val)} />
      </Flex>
      {loading ? (
        <Flex justify="center" align="center" h="100vh">
          <Spinner size="xl" />
        </Flex>
      ) : (
        <Box className="articles">
          {articles.length === 0 ? (
            <Text fontSize="lg" color="gray.500">
              No articles found for the given query and date.
            </Text>
          ) : (
            articles
              .filter((article) => {
                return (
                  article.title !== "[Removed]" &&
                  article.description !== "[Removed]" &&
                  article.content !== "[Removed]" &&
                  article.url !== "https://removed.com" &&
                  article.urlToImage !== null
                );
              })
              .map((article, index) => (
                <ArticleCard key={index} article={article} />
              ))
          )}
        </Box>
      )}
    </Box>
  );
};

export default HomePage;
