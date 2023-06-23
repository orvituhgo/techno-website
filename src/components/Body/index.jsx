import { useEffect } from 'react';
import FirstSection from '../FirstSection';
import Cards from '../SecondSection';
import Portfolio from '../ThirdSection';
import Contact from '../FourthSection';
import Footer from '../Footer';

export default function Body() {
  const observer = new IntersectionObserver((entries) => {
    Array.from(entries).forEach((entry) => {
      if (entry.intersectionRatio >= 0.7) {
        entry.target.classList.add('init-hidden-off');
      }
    });
  }, {
    threshold: 0.7,
  });

  useEffect(() => { Array.from(document.querySelectorAll('.init-hidden')).forEach((element) => observer.observe(element)); });

  return (
    <>
      <FirstSection />
      <Cards />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}
