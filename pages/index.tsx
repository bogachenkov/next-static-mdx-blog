import type { NextPage } from 'next'
import Head from 'next/head'
import Container from '@ui/Container';
import HomeHero from '@modules/HomeHero';
import MainContent from '@modules/MainContent';
import ArticlePreview from '@ui/ArticlePreview';
import { getAllArticles, getAllCategories } from 'libs/articles';
import { Article } from 'types/article';
import ArticleWrapLink from '@ui/ArticleWrapLink';
import HomePageGrid from '@modules/HomePageGrid';
import ArticlesList from '@modules/ArticlesList';
import Aside from '@modules/Aside';
import { sortByDate, sortByPopularity } from 'libs/utils';
import { useMemo } from 'react';
import { Category } from 'types/category';

interface Props {
  articles: Article[];
  categories: Category[];
}

const Home: NextPage<Props>= ({ articles, categories }) => {
  const popular = useMemo(() => sortByPopularity(articles), [articles]);
  return (
    <div>
      <Head>
        <title>Weblog. - MDX Static Blog</title>
        <meta name="description" content="MDX Static Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeHero>
        <ArticleWrapLink slug={articles[0].slug}>
          <ArticlePreview article={articles[0]} />
        </ArticleWrapLink>
      </HomeHero>
      <MainContent>
        <Container>
          <HomePageGrid>
            <ArticlesList articles={articles.slice(1)} />
            <Aside categories={categories} popular={popular} />
          </HomePageGrid>
        </Container>
      </MainContent>
    </div>
  )
}

export async function getStaticProps() {
  try {
    const articles = await getAllArticles();
    const categories = await getAllCategories(articles);
      
    return {
      props: {
        articles: sortByDate(articles),
        categories
      }
    }
  } catch (error) {
    console.log('ERROR', error);
    return {
      props: {
        articles: [],
        categories: []
      }
    }
  }
}

export default Home;
