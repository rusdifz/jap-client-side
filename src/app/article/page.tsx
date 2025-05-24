import ArticleList from '@/layouts/article-list';
import Wrapper from '@/layouts/Wrapper';
import { useEffect } from 'react';

export const metadata = {
  title: 'Article Publication Jardine Asia Pasific',
};

const index = () => {
  return (
    <Wrapper>
      <ArticleList />
    </Wrapper>
  );
};

export default index;
