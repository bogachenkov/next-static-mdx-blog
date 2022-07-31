import Title from '@ui/Title';
import Link from 'next/link';
import React from 'react';
import { ChevronsRight } from 'tabler-icons-react';
import { Article } from 'types/article';
import { StyledPopularArticles } from './styled';

interface IPopularArticlesProps {
  children?: React.ReactNode;
  articles: Article[];
}

const PopularArticles:React.FC<IPopularArticlesProps> = ({ articles }) => {
  return (
    <StyledPopularArticles>
      <Title><span>P</span>opular<span>.</span></Title>
      {
        articles.map(a => (
          <Link key={a.slug} href={`/articles/${a.slug}`}>
            <a>
              <ChevronsRight size={20} />
              <span>
                {a.title}
              </span>
            </a>            
          </Link>
        ))
      }
    </StyledPopularArticles>
  );
}

export default PopularArticles;
