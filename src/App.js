import Navbar from './compontents/Navbar';
import Hero from './compontents/Hero';
import Content from './compontents/Content';
import Cards from './compontents/Cards';
import Reviews from './compontents/Reviews';
import Portfolio from './compontents/Portfolio';
import GoogleReviews from './compontents/GoogleReviews';



function App() {
  return (
    <div className='main-bg '>
      <Navbar />
      <Hero />
      {/* <Content /> */}
      <Cards />
      <Reviews />
      <Portfolio />
    </div>
  );
}

export default App;
