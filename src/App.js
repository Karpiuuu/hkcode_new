import Navbar from './compontents/Navbar';
import Hero from './compontents/Hero';
import Content from './compontents/Content';
import Cards from './compontents/Cards';

function App() {
  return (
    <div className='main-bg '>
      <Navbar />
      <Hero />
      {/* <Content /> */}
      <Cards />
    </div>
  );
}

export default App;
