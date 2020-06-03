import Slider from 'react-slick';
import classnames from 'classnames';
import styles from './SliderPost.module.scss';
import Link from 'next/link';

const SliderPost = ({ posts }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className={classnames(styles.RecentPost, 'container')}>
      <h2 className={styles.Tittle}>Recent Post</h2>
      <Slider {...settings}>
        {posts.map((post) => {
          const { API_URL } = process.env;
          const {
            post_image: [
              {
                formats: {
                  medium: { url },
                },
              },
            ],
          } = post;

          return (
            <div key={post.id}>
              <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
                <a>
                  <div className={styles.Card}>
                    <img src={API_URL + url} alt={post.tiitle} />
                    <div className={styles.PostContent}>
                      <h3>{post.tittle}</h3>
                      <p>{post.description.substring(0, 300)}</p>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SliderPost;
