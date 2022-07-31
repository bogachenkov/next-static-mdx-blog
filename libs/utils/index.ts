import { Article } from "types/article";

type SortOrder = 'asc' | 'desc';

export const sortByDate = (articles: Article[], order:SortOrder = 'desc') => {
  return articles.sort((a, b) => {
    if (order === 'desc')  {
      // @ts-ignore
      return (new Date(b.date) - new Date(a.date));
    } else {
      // @ts-ignore
      return (new Date(a.date) - new Date(b.date));
    }
  })
}

export const sortByPopularity = (articles: Article[], order:SortOrder = 'desc') => {
  return articles.slice(0, 7);
}

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}