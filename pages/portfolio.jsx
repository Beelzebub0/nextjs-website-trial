import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head';

function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

      <Navbar />
      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">Portfolio</h1>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <div className="portfolio-wrapper">
                <div className="portfolio-item">
                    <img src="lion.png" className="portfolio-image" />
                    <h4 className="portfolio-name">Lion</h4>
                    <div className="portfolio-category">Animal</div>
                </div>

                <div className="portfolio-item">
                    <img src="falcon.png" className="portfolio-image" />
                    <h4 className="portfolio-name">Falcon</h4>
                    <div className="portfolio-category">Animal</div>
                </div>
            </div>
          </div>
        </div>
        </section>
    </>
  );
}

export default Portfolio;