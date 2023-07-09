import { Navbar } from './components/Navbar';
import { Hero } from './sections/hero/Hero';
import { About } from './sections/about/About';
import { Plans } from './sections/plans/Plans';
import { Reviews } from './sections/reviews/Reviews';
import { AppSection } from './sections/app/AppSection';
import { Footer } from './sections/footer/Footer';

export const App = () => {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Plans />
      <AppSection />
      <Reviews />
      <Footer />
    </>
  )
}