import { NextSeo } from 'next-seo';

const about = () => {
  const SEO = {
    title: 'About Page',
    description: 'Just Your Normal About Page',
    openGraph: {
      title: 'About Page',
      description: 'Just Your Normal About Page',
    },
  };
  return (
    <>
      <NextSeo {...SEO} />
      <div className="container">
        <div className="content">I Am about </div>
      </div>
    </>
  );
};

export default about;
