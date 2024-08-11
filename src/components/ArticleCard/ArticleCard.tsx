import { useMemo, useState } from "react";
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
  Spinner,
} from "@chakra-ui/react";
import placeHolderImg from "../../assets/placeholder-img.jpg";
import { Article } from "../../types";
import moment from "moment";
import { Colors } from "../../constants/colors";

export const DEFAULT_DATE_FORMAT = "MMMM Do YYYY";

const ArticleCard = ({ article }: { article: Article }) => {
  const formattedDate = useMemo(
    () => moment(article.publishDate).format(DEFAULT_DATE_FORMAT),
    [article.publishDate]
  );

  const [isLoading, setIsLoading] = useState(true);
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <Card
      className="article"
      p={2}
      borderWidth="0px"
      borderRadius="lg"
      overflow="hidden"
      background={Colors.white}
      boxShadow={"md"}
    >
      <CardBody className="articleCard" p={2}>
        <Flex direction="column" height="100%">
          {isLoading && (
            <Flex
              justifyContent="center"
              alignItems="center"
              maxWidth="100%"
              minHeight="200px"
            >
              <Spinner size="xl" color={Colors.textSecondary} />
            </Flex>
          )}
          <Image
            src={article?.image ?? placeHolderImg}
            alt={article.title}
            borderRadius="md"
            mb={4}
            maxHeight="200px"
            objectFit="cover"
            width={"100%"}
            transition="transform 0.3s"
            transitionTimingFunction="cubic-bezier(.4,0,.2,1)"
            _hover={{ transform: "scale(1.05)" }}
            onLoad={handleImageLoad}
            display={isLoading ? "none" : "block"}
          />

          <Text fontSize="md" mb={2} color={Colors.textSecondary}>
            Published on {formattedDate}
          </Text>
          <Box mb={4}>
            {article?.source && (
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
            href={article?.url}
            target="_blank"
            rel="noopener noreferrer"
            color={Colors.LinkColor}
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
