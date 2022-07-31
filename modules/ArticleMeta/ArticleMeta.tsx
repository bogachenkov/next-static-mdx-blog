import React from 'react';
import { StyledArticleBreadcrumbs, StyledArticleDate, StyledArticleMeta } from './styled';
import dayjs from 'dayjs';
import { Category } from 'types/category';
import Link from 'next/link';
import { ChevronRight } from 'tabler-icons-react';

interface IArticleMetaProps {
  children?: React.ReactNode;
  date: string;
  category: Category;
}

const ArticleMeta:React.FC<IArticleMetaProps> = ({ date, category }) => {
  return (
    <StyledArticleMeta>
      <StyledArticleBreadcrumbs>
        <Link href={'/'}>
          <a>Home</a>
        </Link>
        <ChevronRight size={14} />
        <Link href={`/categories/${category.uri}`}>
          <a>{category.label}</a>
        </Link>
      </StyledArticleBreadcrumbs>
      <StyledArticleDate>
        Published on <br />
        <b>{dayjs(date).format('DD MMMM')}</b>
        <b>{dayjs(date).format(' YYYY')}</b>
      </StyledArticleDate>
    </StyledArticleMeta>
  );
}

export default ArticleMeta;
