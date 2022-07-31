import Categories from '@modules/Categories';
import PopularArticles from '@modules/PopularArticles';
import React from 'react';
import { Article } from 'types/article';
import { Category } from 'types/category';
import { StyledAside } from './styled';

interface IAsideProps {
  children?: React.ReactNode;
  categories: Category[];
  popular: Article[];
}

const Aside:React.FC<IAsideProps> = ({ categories, popular }) => {
  return (
    <StyledAside>
      <Categories categories={categories} />
      <PopularArticles articles={popular} />
    </StyledAside>
  );
}

export default Aside;
