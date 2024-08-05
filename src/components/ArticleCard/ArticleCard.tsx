import React from "react";
import { Box, Link, Text, Heading } from "@chakra-ui/react";

export interface Article {
  title: string;
  description: string;
  url: string;
}

const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <Box
      className="article"
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      margin={"10"}
    >
      <Box className="articleCard" p={4}>
        <Heading as="h2" fontSize="xl" mb={2}>
          {article.title}
        </Heading>
        <Text fontSize="md" mb={4}>
          {article.description}
        </Text>
        <Link
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          color="blue.500"
          textDecoration="underline"
        >
          Read more
        </Link>
      </Box>
    </Box>
  );
};

export default ArticleCard;
