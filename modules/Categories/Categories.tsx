import Tag from '@ui/Tag';
import Title from '@ui/Title';
import Link from 'next/link';
import React from 'react';
import { Category } from 'types/category';
import { StyledCategories, StyledCategoriesGroup } from './styled';

interface ICategoriesProps {
  children?: React.ReactNode;
  categories: Category[];
}

const Categories:React.FC<ICategoriesProps> = ({ categories }) => {
  return (
    <StyledCategories>
      <Title><span>C</span>ategories<span>.</span></Title>
      <StyledCategoriesGroup>
        {categories.map(({ label, uri }) => (
          <Link key={uri} href={`/categories/${uri}`}>
            <a data-cy="category-link">
              <Tag>{label}</Tag>
            </a>
          </Link>
        ))}
      </StyledCategoriesGroup>
    </StyledCategories>
  );
}

export default Categories;
