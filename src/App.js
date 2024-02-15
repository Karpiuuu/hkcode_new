import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import NoPage from './pages/NoPage';
import Contact from './pages/Contact';
import Website_Offer from './pages/Website_Offer';
import Social_Media_Marketing from './pages/Social_Media_Marketing';
import ShopsOffer from './pages/ShopsOffer';
import ArticlesPage from './pages/ArticlesPage'
import WebPageArticle from './articles/WebPageArticle';
import BlockedPageArticle from './articles/BlockedPageArticle'
import BluePageArticle from './articles/BluePageArticle'
import DestinationPageArticle from './articles/DestinationPageArticle'
import FactChekingPageArticle from './articles/FactChekingPageArticle'
import FreePageArticle from './articles/FreePageArticle'
import HowPageLooksLikeArticle from './articles/HowPageLooksLikeArticle'
import HowPageWorksArticle from './articles/HowPageWorksArticle'
import HowToCheckIfPageIsRealArticle from './articles/HowToCheckIfPageIsRealArticle'
import HowToCheckIfPageIsSecureArticle from './articles/HowToCheckIfPageIsSecureArticle'
import OldPageArticle from './articles/OldPageArticle'
import OpenPageArticle from './articles/OpenPageArticle'
import ResultPageArticle from './articles/ResultPageArticle'
import UnMaterialArticle from './articles/UnMaterialArticle'
import WhenPageWasMadeArticle from './articles/WhenPageWasMadeArticle'
import WhenSitesArticle from './articles/WhenSitesArticle'
import WhereBuyPageArticle from './articles/WhereBuyPageArticle'
import WhereMakePageArticle from './articles/WhereMakePageArticle'
import WherePageArticle from './articles/WherePageArticle'
import WhereToBlockPageArticle from './articles/WhereToBlockPageArticle'
import WhereToUnBlockPageArticle from './articles/WhereToUnBlockPageArticle'
import WorkPageArticle from './articles/WorkPageArticle'


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
          {/* Artciles paths */}
          <Route path ="/blog" element={<ArticlesPage />}/>
          <Route path ="/webpagearticle" element={<WebPageArticle />}/>
          <Route path ="/blockedpagearticle" element={<BlockedPageArticle />}/>
          <Route path ="/bluepage" element={<BluePageArticle />}/>
          <Route path ="/destination" element={<DestinationPageArticle />}/>
          <Route path ="/factchecking" element={<FactChekingPageArticle />}/>
          <Route path ="/freepage" element={<FreePageArticle />}/>
          <Route path ="/howlooks" element={<HowPageLooksLikeArticle />}/>
          <Route path ="/howworks" element={<HowPageWorksArticle />}/>
          <Route path ="/real" element={<HowToCheckIfPageIsRealArticle />}/>
          <Route path ="/secured" element={<HowToCheckIfPageIsSecureArticle />}/>
          <Route path ="/old" element={<OldPageArticle />}/>
          <Route path ="/open" element={<OpenPageArticle />}/>
          <Route path ="/result" element={<ResultPageArticle/>}/>
          <Route path ="/material" element={<UnMaterialArticle/>}/>
          <Route path ="/made" element={<WhenPageWasMadeArticle/>}/>
          <Route path ="/sites" element={<WhenSitesArticle/>}/>
          <Route path ="/buy" element={<WhereBuyPageArticle/>}/>
          <Route path ="/make" element={<WhereMakePageArticle/>}/>
          <Route path ="/where" element={<WherePageArticle/>}/>
          <Route path ="/whereblock" element={<WhereToBlockPageArticle/>}/>
          <Route path ="/whereunblock" element={<WhereToUnBlockPageArticle/>}/>
          <Route path ="/workpage" element={<WorkPageArticle/>}/>
          {/* NoPage path */}
          <Route path="*" element={<NoPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
