import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <Navbar />
      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">Contact</h1>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, provident sapiente minima facilis expedita laudantium quidem alias dolor quo voluptas fuga magnam mollitia harum cum cupiditate qui minus quisquam! Nisi.
            </p>
            <ul className="contact-links">
                <li className="contact-item">Email: ted@mail.com</li>
                <li className="contact-item">Phone: +628xxxxx</li>
            </ul>
          </div>
        </div>
        </section>
    </>
  );
}

export default Contact;