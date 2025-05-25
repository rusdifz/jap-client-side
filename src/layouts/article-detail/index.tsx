'use client';

import { useEffect, useState } from 'react';
import { Spin, Result } from 'antd';

import BlogDetailArea from '../../components/organisms/BlogDetail';
import { fetchApiArticleDetail } from '@/api/article.api';
import { IArticleDetail } from '@/libs/interfaces';
import BlogSidebar from '@/components/moleculs/article/BlogSidebar';
import Link from 'next/link';
import MediaVideoYoutube from '@/components/organisms/property-detail/MediaVideo';
import ReactPlayer from 'react-player';

interface PageProps {
  id: string;
}

// icon: [
//   'fa-brands fa-whatsapp',
//   'fa-brands fa-x-twitter',
//   'fa-brands fa-instagram',
//   'fa-brands fa-viber',
// ],

const BlogDetails = ({ id }: PageProps) => {
  const [article, setArticle] = useState<IArticleDetail | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchApiArticleDetail(id)
      .then((resp) => {
        setArticle(resp.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log('error get articles', err);
        setArticle(null);
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="position-relative z-1">
        <div className="empty-section position-relative z-1 ">
          <Spin spinning={true} size="large">
            <Result
              status="info"
              title="Memuat Data..."
              subTitle="Silakan tunggu sebentar"
              className="min-h-screen h-500"
            />
          </Spin>
        </div>
      </div>
    );
  }

  function ArticleContent(htmlContent: any) {
    return (
      <div dangerouslySetInnerHTML={{ __html: htmlContent.htmlContent }} />
    );
  }

  return (
    // <>
    //   <BlogDetailArea />
    // </>

    <div className="blog-details border-top mt-130 xl-mt-100 pt-100 xl-pt-80 mb-150 xl-mb-100">
      <div className="container">
        <div className="row gx-xl-5">
          <div className="col-lg-8">
            <div className="blog-post-meta mb-60 lg-mb-40">
              <div className="post-info">
                {article?.created_by}. {article?.updated_at}
              </div>
              <h3 className="blog-title">{article?.title}</h3>
            </div>
          </div>
        </div>
        <div className="row gx-xl-5">
          <div className="col-lg-8">
            <article className="blog-post-meta">
              <figure
                className="post-img position-relative m0"
                style={{
                  backgroundImage: article?.thumbnail
                    ? `url(${article.thumbnail})`
                    : `url(/assets/images/blog/blog_img_11.jpg)`,
                }}
              />

              {article?.content && (
                <div className="post-data pt-50 md-pt-30">
                  <ArticleContent htmlContent={article?.content} />
                </div>
              )}

              {/* area video */}
              {article?.url_youtube && (
                <div className="post-data pt-20 md-pt-30  pb-20 md-pb-30">
                  <ReactPlayer
                    className="react-player"
                    url={article.url_youtube}
                    width="100%"
                    height={500}
                    controls
                  />
                </div>
              )}

              <div className="bottom-widget d-sm-flex align-items-center justify-content-between">
                <ul className="d-flex align-items-center tags style-none pt-20">
                  <li>Tag:</li>
                  <li>
                    <Link href="#">Apartments,</Link>
                  </li>
                  <li>
                    <Link href="#">loan,</Link>
                  </li>
                  <li>
                    <Link href="#">Sale</Link>
                  </li>
                </ul>
                <ul className="d-flex share-icon align-items-center style-none pt-20">
                  {/* <li>Share:</li> */}
                  {/* {icon.map((icon, index) => (
                  <li key={index}>
                    <Link href="#">
                      <i className={icon}></i>
                    </Link>
                  </li>
                ))} */}
                </ul>
              </div>
            </article>
          </div>

          <BlogSidebar style={true} />
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
