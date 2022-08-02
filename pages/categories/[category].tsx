import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import Container from "@ui/Container";
import { getAllCategories, getArticlesByCategoryUri } from "libs/articles";
import HomeHero from "@modules/HomeHero";
import Title from "@ui/Title";
import { Article } from "types/article";
import ArticlesList from "@modules/ArticlesList";
import { capitalize } from "libs/utils";

/* eslint-disable-next-line */
export interface UrlParams extends ParsedUrlQuery {
  category?: string;
};

interface Props {
  category: string;
  articles: Article[];
}

function Category({ category, articles }: Props) {
  return (
    <div>
      <HomeHero>
        <Title level={1} size={32}>
          {category}
        </Title>
      </HomeHero>
      <Container>
        <ArticlesList articles={articles} noTitle />
      </Container>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths<UrlParams> = async () => {
  const categories = await getAllCategories();
  const paths = categories.map((c) => ({ params: { category: c.uri } }));

  return {
    paths,
    fallback: false
  }
};

export const getStaticProps: GetStaticProps = async ({
  params
}: {
  params?: UrlParams;
}) => {
  if (!params?.category) return {
    redirect: {
      statusCode: 404,
      destination: '/',
      permanent: false
    }
  };

  const articles = await getArticlesByCategoryUri(params.category);
  const categories = await getAllCategories(articles);

  return {
    props: {
      category: categories[0].label,
      articles
    }
  }
}

export default Category;
