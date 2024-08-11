import { Box, Flex, Spinner, Text, SimpleGrid } from "@chakra-ui/react";
import FilterBar from "../../components/FilterBar";
import ArticleCard from "../../components/ArticleCard";
import { useFiltersContext } from "../../context/FiltersContext";
import styles from "./Home.module.scss";
import { Colors } from "../../constants/colors";

const HomePage = () => {
  const { articles, loading } = useFiltersContext();
  const sortedArticles = articles.sort((a, b) => (a.image ? -1 : 1));

  return (
    <Box className="home" p={4} background={Colors.background}>
      <Box className={`${styles.searchWrapper}`}>
        <Box
          className={`${styles.searchSection}`}
          p={4}
          pt={8}
          mx={[0, 10]}
          background={Colors.SearchBackground}
        >
          <Flex
            justify={"center"}
            align={"center"}
            direction={["column", "row"]}
          >
            <Flex justify="center" mb={4} padding={2}>
              <FilterBar />
            </Flex>
          </Flex>
        </Box>
      </Box>
      {loading ? (
        <Flex justify="center" align="center" h="100vh">
          <Spinner
            size="xl"
            thickness="4px"
            speed="0.65s"
            emptyColor={Colors.gray}
            color={Colors.blue}
          />
        </Flex>
      ) : (
        <Box className="articles">
          {articles.length === 0 ? (
            <Text fontSize="lg" color={Colors.gray}>
              No articles found for the given query and date.
            </Text>
          ) : (
            <SimpleGrid
              columns={[1, 2, 3]}
              spacing={10}
              padding={[0, 10]}
              pt={4}
            >
              {sortedArticles
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
