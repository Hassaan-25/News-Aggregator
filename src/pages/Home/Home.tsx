import { Box, Flex, Spinner, Text, SimpleGrid } from "@chakra-ui/react";
import SearchBar from "../../components/SearchBar";
import FilterBar from "../../components/FilterBar";
import ArticleCard from "../../components/ArticleCard";
import { useFiltersContext } from "../../context/FiltersContext";

const HomePage = () => {
  const { articles, loading } = useFiltersContext();

  return (
    <Box className="home" p={4} pt={8} background={"#f5f5f5"}>
      <Flex justify={"center"} align={"center"} direction={"row"}>
        <Flex justify="center" mb={4}>
          <SearchBar />
        </Flex>
        <Flex justify="center" mb={4} padding={2}>
          <FilterBar />
        </Flex>
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
            <SimpleGrid columns={[1, 2, 3]} spacing={10} padding={10}>
              {articles
                .filter((article) => {
                  return (
                    article.title !== "[Removed]" &&
                    article.description !== "[Removed]" &&
                    article.url !== "https://removed.com"
                  );
                })
                .map((article, index) => (
                  <ArticleCard key={index} article={article} />
                ))}
            </SimpleGrid>
          )}
        </Box>
      )}
    </Box>
  );
};

export default HomePage;
