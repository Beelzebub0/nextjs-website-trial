import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head';

function About() {
  return (
    <>
    <Head>
        <title>About</title>
      </Head>
      <Navbar />
      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">About</h1>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, provident sapiente minima facilis expedita laudantium quidem alias dolor quo voluptas fuga magnam mollitia harum cum cupiditate qui minus quisquam! Nisi.</p>
          </div>
        </div>
        </section>
    </>
  );
}

export default About;