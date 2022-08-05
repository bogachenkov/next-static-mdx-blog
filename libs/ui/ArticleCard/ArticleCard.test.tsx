import { render, screen } from '@testing-library/react';
import React from 'react';
import ArticleCard from './ArticleCard';
import dayjs from 'dayjs';

const articleData = {
  title: 'Test title',
  date: '2000-01-01',
  excerpt: 'Test excerpt'
}

describe('<NewestArticle />', () => {

  beforeEach(() => {
    render(<ArticleCard {...articleData} />)
  });


  it('renders correctly', () => {
    expect(screen.getByRole('heading')).toHaveTextContent(articleData.title);
    expect(screen.getByTestId('article-excerpt')).toHaveTextContent(articleData.excerpt);
    expect(screen.getByTestId('article-date')).toHaveTextContent(dayjs(articleData.date).format('DD MMMM YYYY'))
  })
});
