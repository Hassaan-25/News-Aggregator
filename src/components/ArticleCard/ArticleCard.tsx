import React from "react";
import {
  Card,
  CardBody,
  Link,
  Text,
  Heading,
  Image,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import placeHolderImg from "../../assets/placeholder-img.jpg";
import { Article } from "../../types";

const options: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  timeZoneName: "short",
};

const ArticleCard = ({ article }: { article: Article }) => {
  const formattedDate = new Date(article.publishDate).toLocaleDateString(
    "en-US",
    options
  );

  return (
    <Card
      className="article"
      p={2}
      borderWidth="0px"
      borderRadius="lg"
      overflow="hidden"
      background={"white"}
      boxShadow={"md"}
    >
      <CardBody className="articleCard" p={2}>
        <Flex direction="column" height="100%">
          <Image
            src={article.image ?? placeHolderImg}
            alt={article.title}
            borderRadius="md"
            mb={4}
            maxHeight="200px"
            objectFit="cover"
            width={"100%"}
            transition="transform 0.3s"
            transitionTimingFunction="cubic-bezier(.4,0,.2,1)"
            _hover={{ transform: "scale(1.05)" }}
          />

          <Text fontSize="md" mb={2} color={"#7C7D7D"}>
            Published on {formattedDate}
          </Text>
          <Box mb={4}>
            {article.source && (
              <Text fontSize="md" mb={4}>
                Source: {article.source}
              </Text>
            )}

            <Heading as="h2" fontSize="xl" mb={2}>
              {article.title}
            </Heading>
            <Text fontSize="md">{article.description}</Text>
          </Box>
          <Spacer />
          <Link
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            color="blue.500"
            textDecoration="underline"
          >
            Read more
          </Link>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ArticleCard;
