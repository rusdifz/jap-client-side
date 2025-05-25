'use client';

import { Skeleton } from 'antd';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import { fetchApiArticleList } from '@/api/article.api';
import { IArticleList, IPagination, ResponseAPI } from '@/libs/interfaces';

const categories: string[] = ['articles', 'video'];

const Blogs = () => {
  const [articles, setArticles] = useState<IArticleList[]>([]);
  const [pagination, setPagination] = useState<IPagination>({
    page: 1,
    total: 0,
    total_page: 1,
  });

  const [isLoading, setLoading] = useState<boolean>(true);
  const dataLoad = Array.from({ length: 6 }, (_, i) => i + 1);

  useEffect(() => {
    fetchApiArticleList({ page: 1, limit: 6 })
      .then((resp) => {
        setArticles(resp.data);
        setPagination(resp.pagination);
        setLoading(false);
      })
      .catch((err) => {
        console.log('error get articles', err);
        setArticles([]);
        setLoading(false);
      });
  }, []);

  const [selectedCategory, setSelectedCategory] = useState('all'); // Step 1

  const handlePageClick = async (event: any) => {
    setLoading(true);
    const newPage = event.selected + 1;

    try {
      const resp: ResponseAPI<IArticleList[]> = await fetchApiArticleList({
        page: newPage,
        limit: 6,
      });
      console.log('page click', newPage);

      if (!resp.error) {
        setLoading(false);
        setArticles(resp.data);
        setPagination(resp.pagination);
      }
    } catch (error: any) {
      setPagination({
        page: 1,
        total: 0,
        total_page: 1,
      });
      setLoading(false);
      throw new Error(error);
    }
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category); // Step 2
    // setItemOffset(0); // Reset offset when category changes
  };

  if (isLoading) {
    return (
      <div className="blog-section-three mt-50 xl-mt-50 mb-150 xl-mb-100">
        <div className="container">
          <div className="blog-filter-nav">
            <ul className="style-none d-flex justify-content-center flex-wrap isotop-menu-wrapper">
              {categories.map((category) => (
                <li
                  key={category}
                  className={selectedCategory === category ? 'is-checked' : ''}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}{' '}
                </li>
              ))}
            </ul>
          </div>

          <div className="row isotop-gallery-2-wrapper pt-60 lg-pt-40">
            {dataLoad.map((item, index) => (
              <div key={index} className="col-lg-6">
                <div className="isotop-item villa sale">
                  <article className="blog-meta-one mb-70 lg-mb-40">
                    <Skeleton.Image />

                    <div className="post-data">
                      <Skeleton />
                    </div>
                  </article>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-section-three mt-50 xl-mt-50 mb-150 xl-mb-100">
      <div className="container">
        <div className="blog-filter-nav">
          <ul className="style-none d-flex justify-content-center flex-wrap isotop-menu-wrapper">
            {categories.map((category) => (
              <li
                key={category}
                className={selectedCategory === category ? 'is-checked' : ''}
                onClick={() => handleCategoryClick(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}{' '}
              </li>
            ))}
          </ul>
        </div>

        <div className="row isotop-gallery-2-wrapper pt-60 lg-pt-40">
          {articles.map((article, index) => (
            <div key={index} className="col-lg-6">
              <div className="isotop-item villa sale">
                <article className="blog-meta-one mb-70 lg-mb-40">
                  <figure
                    className={`post-img border-25 position-relative m0`}
                    style={{
                      backgroundImage: article.thumbnail
                        ? `url(${article.thumbnail})`
                        : `url(/assets/images/blog/blog_img_02.jpg)`,
                    }}
                  >
                    <Link
                      href={`/article/${article.slug}`}
                      className="stretched-link date tran3s"
                    />
                  </figure>

                  <div className="post-data">
                    <div className="post-info">
                      <pre>
                        {article.created_by}, {article.updated_at}
                      </pre>
                    </div>
                    <div className="d-flex justify-content-between align-items-sm-center flex-wrap">
                      <Link
                        href={`/article/${article.slug}`}
                        className="blog-title"
                      >
                        <h4>{article.title}</h4>
                      </Link>
                      <Link
                        href={`/article/${article.slug}`}
                        className="read-btn rounded-circle d-flex align-items-center justify-content-center tran3s"
                      >
                        <i className="bi bi-arrow-up-right"></i>
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-20 text-center">
          <ReactPaginate
            breakLabel="..."
            nextLabel={<i className="fa-regular fa-chevron-right"></i>}
            onPageChange={handlePageClick}
            pageRangeDisplayed={pagination.total_page}
            pageCount={pagination.total_page}
            previousLabel={<i className="fa-regular fa-chevron-left"></i>}
            renderOnZeroPageCount={null}
            className="pagination-two d-inline-flex align-items-center justify-content-center style-none"
            forcePage={pagination.page - 1}
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
