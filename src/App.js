import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import NoPage from './pages/NoPage';
import Contact from './pages/Contact';
import Website_Offer from './pages/Website_Offer';
import Social_Media_Marketing from './pages/Social_Media_Marketing';
import ShopsOffer from './pages/ShopsOffer';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/website_offer" element={<Website_Offer />} />
          <Route path="/socialmedia" element={<Social_Media_Marketing />}/>
          <Route path="/shops" element={<ShopsOffer />}/>
          <Route path="*" element={<NoPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
