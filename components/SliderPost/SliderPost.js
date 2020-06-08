import Slider from 'react-slick';
import classnames from 'classnames';
import styles from './SliderPost.module.scss';
import Link from 'next/link';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const SliderPost = ({ posts }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: false,
    // responsive: [
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       arrows: false,
    //     },
    //   },
    // ],
  };

  return (
    <div className={styles.SliderContainer}>
      <div className={classnames(styles.RecentPost)}>
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
    </div>
  );
};

export default SliderPost;
