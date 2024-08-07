import React from "react";
import { Card, Box, Link, Text, Heading, Image } from "@chakra-ui/react";
import placeHolderImg from "../../assets/placeholder-img.jpg";
import { Article } from "../../types";

const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <Box
      className="article"
      p={2}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      // margin="10"
      background={"white"}
    >
      <Box className="articleCard" p={2}>
        <Image
          src={article.image ?? placeHolderImg}
          alt={article.title}
          borderRadius="md"
          mb={4}
          maxHeight="200px"
          objectFit="cover"
          transition="transform 0.3s"
          transitionTimingFunction="cubic-bezier(.4,0,.2,1)"
          _hover={{ transform: "scale(1.05)" }}
          width={"100%"}
        />
        <Text fontSize="md" mb={4}>
          Source: {article.source}
        </Text>

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
