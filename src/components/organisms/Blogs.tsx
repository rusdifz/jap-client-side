'use client';

import { fetchApiArticleList } from '@/api/article.api';
import inner_blog_data from '@/data/inner-data/BlogData';
import { Skeleton } from 'antd';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

const categories: string[] = ['articles', 'video'];

const Blogs = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const dataLoad = Array.from({ length: 6 }, (_, i) => i + 1);

  useEffect(() => {
    fetchApiArticleList({ page: 1, limit: 6 })
      .then((resp) => {
        setArticles(resp.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log('error get articles', err);
        setArticles([]);
        setLoading(false);
      });
  }, []);

  const blog = inner_blog_data.filter((items) => items.page === 'blog_3');

  const [selectedCategory, setSelectedCategory] = useState('all'); // Step 1

  const itemsPerPage = 6;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const filteredBlog =
    selectedCategory === 'all'
      ? blog
      : blog.filter((item) => item.category === selectedCategory); // Step 3
  const currentItems = filteredBlog.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredBlog.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % filteredBlog.length;
    setItemOffset(newOffset);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category); // Step 2
    setItemOffset(0); // Reset offset when category changes
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
          {currentItems.map((item) => (
            <div key={item.id} className="col-lg-6">
              <div className="isotop-item villa sale">
                <article className="blog-meta-one mb-70 lg-mb-40">
                  <figure
                    className={`post-img border-25 position-relative m0 ${item.class_name}`}
                  >
                    <Link
                      href="/article/100"
                      className="stretched-link date tran3s"
                    >
                      {item.date}
                    </Link>
                  </figure>
                  <div className="post-data">
                    <div className="post-info">
                      <Link href="/article/100">{item.info_name}</Link>{' '}
                      {item.info_time} min
                    </div>
                    <div className="d-flex justify-content-between align-items-sm-center flex-wrap">
                      <Link href="/article/100" className="blog-title">
                        <h4>{item.title}</h4>
                      </Link>
                      <Link
                        href="/article/100"
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
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel={<i className="fa-regular fa-chevron-left"></i>}
            renderOnZeroPageCount={null}
            className="pagination-two d-inline-flex align-items-center justify-content-center style-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
