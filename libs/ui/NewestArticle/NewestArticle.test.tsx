import { render, screen } from '@testing-library/react';
import React from 'react';
import NewestArticle from './NewestArticle';

const articleData = {
  slug: 'article',
  title: 'Test title',
  excerpt: 'Test excerpt'
}

describe('<NewestArticle />', () => {

  beforeEach(() => {
    render(<NewestArticle article={articleData} />)
  });


  it('renders correctly', () => {
    expect(screen.getByText('NEW')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toHaveTextContent(articleData.title);
    expect(screen.getByTestId('article-excerpt')).toHaveTextContent(articleData.excerpt);
    expect(screen.getByRole('button')).toHaveAttribute('href', `/articles/${articleData.slug}`)
  })
});
