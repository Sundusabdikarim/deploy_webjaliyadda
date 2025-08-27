'use client';

import Image from 'next/image';

const AboutUs = ({ data }) => {
  const { headline, text, textpr, featuredImage } = data;

  return (
    <main className="about">
      {/* Hero Section */}
      <section className="about__hero">
        <div className="about__hero-text">
          <h5 className="highlight">{headline}</h5>
          <p>{text}</p>
          <h6 className="about__paragraphh">{textpr}.</h6>
          <button className="btn">Let&apos;s talk →</button>
        </div>
        <div className="about__hero-image">
          <Image src={featuredImage} alt="Team" width={500} height={500} />
        </div>
      </section>

      {/* Stats Section */}
      <section className="about__stats">
        <div className="stat">500+ Community Members</div>
        <div className="stat">★ Empowering Somali Voices in Istanbul 🇹🇷</div>
        <div className="stat">4.9 ★ Community Trust</div>
        <div className="stat">100+ Youth Supported</div>
        <div className="stat">30+ Successful Events</div>
      </section>
    </main>
  );
};

export default AboutUs;
