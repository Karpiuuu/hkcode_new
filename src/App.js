import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Helmet } from 'react-helmet';

import Home from './pages/Home'
import NoPage from './pages/NoPage';
import Contact from './pages/Contact';
import Website_Offer from './pages/Website_Offer';
import Social_Media_Marketing from './pages/Social_Media_Marketing';
import ShopsOffer from './pages/ShopsOffer';
import ArticlesPage from './pages/ArticlesPage'
import BlockedPageArticle from './articles/websites/BlockedPageArticle'
import BluePageArticle from './articles/websites/BluePageArticle'
import DestinationPageArticle from './articles/websites/DestinationPageArticle'
import FactChekingPageArticle from './articles/websites/FactChekingPageArticle'
import FreePageArticle from './articles/websites/FreePageArticle'
import HowPageLooksLikeArticle from './articles/websites/HowPageLooksLikeArticle'
import HowPageWorksArticle from './articles/websites/HowPageWorksArticle'
import HowToCheckIfPageIsRealArticle from './articles/websites/HowToCheckIfPageIsRealArticle'
import HowToCheckIfPageIsSecureArticle from './articles/websites/HowToCheckIfPageIsSecureArticle'
import OldPageArticle from './articles/websites/OldPageArticle'
import OpenPageArticle from './articles/websites/OpenPageArticle'
import ResultPageArticle from './articles/websites/ResultPageArticle'
import UnMaterialArticle from './articles/websites/UnMaterialArticle'
import WhenPageWasMadeArticle from './articles/websites/WhenPageWasMadeArticle'
import WhenSitesArticle from './articles/websites/WhenSitesArticle'
import WhereBuyPageArticle from './articles/websites/WhereBuyPageArticle'
import WhereMakePageArticle from './articles/websites/WhereMakePageArticle'
import WherePageArticle from './articles/websites/WherePageArticle'
import WhereToBlockPageArticle from './articles/websites/WhereToBlockPageArticle'
import WhereToUnBlockPageArticle from './articles/websites/WhereToUnBlockPageArticle'
import WorkPageArticle from './articles/websites/WorkPageArticle'
import WebPageArticle from './articles/websites/WebPageArticle';
import WhyMarketingArticle from './articles/marketing_agency/WhyMarketingArticle';
import MarketingImportantArticle from './articles/marketing_agency/MarketingImportantArticle';
import DirectMarketingAgency from './articles/marketing_agency/DirectMarketingAgency';
import WhyNetworMarketingArticle from './articles/marketing_agency/WhyNetworMarketingArticle';
import WhisperingMarketingArticle from './articles/marketing_agency/WhisperingMarketingArticle';
import StudyingMarketingArticle from './articles/marketing_agency/StudyingMarketingArticle';
import WarsawMarketingArticle from './articles/marketing_agency/WarsawMarketingArticle';
import MadeArticle from './articles/marketing_agency/MadeArticle';
import StudeMarketingArticle from './articles/marketing_agency/StudeMarketingArticle';
import MarketigInfluenceArticle from './articles/marketing_agency/MarketigInfluenceArticle';
import ContactMarketingArticle from './articles/marketing_agency/ContactMarketingArticle';
import EmailMarketingArticle from './articles/marketing_agency/EmailMartketingArticle';
import OnlineMarketingArticle from './articles/marketing_agency/OnlineMarketingArticle';


function App() {
  return (
    <div>
      <Helmet>
          <title>Agencja Marketingowa HKCode | Projektowanie Stron, Media Marketing, AI Marketing</title>
          <meta name="description" content="Agencja marketingowa HKCode oferuje kompleksowe usługi w zakresie projektowania stron internetowych, media marketingu oraz wykorzystywania sztucznej inteligencji w marketingu. Skuteczne strategie online dla Twojej firmy!" />
          <meta name="keywords" content="agencja marketingowa, projektowanie stron, media marketing, AI marketing, strategie online" />
          <meta name="author" content="Agencja Marketingowa HKCode" />
          <meta property="og:title" content="Agencja Marketingowa HKCode | Projektowanie Stron, Media Marketing, AI Marketing" />
          <meta property="og:description" content="Agencja marketingowa HKCode oferuje kompleksowe usługi w zakresie projektowania stron internetowych, media marketingu oraz wykorzystywania sztucznej inteligencji w marketingu. Skuteczne strategie online dla Twojej firmy!" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://hkcode.pl" />
          <meta property="og:image" content="https://hkcode.pl/" />
          <meta name="twitter:title" content="Agencja Marketingowa HKCode | Projektowanie Stron, Media Marketing, AI Marketing" />
          <meta name="twitter:description" content="Agencja marketingowa HKCode oferuje kompleksowe usługi w zakresie projektowania stron internetowych, media marketingu oraz wykorzystywania sztucznej inteligencji w marketingu. Skuteczne strategie online dla Twojej firmy!" />
      </Helmet>
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
          <Route path ='/whymarketing' element={<WhyMarketingArticle />}/>
          <Route path ='/importantmarketing' element={<MarketingImportantArticle />}/>
          <Route path ='/directmarketing' element={<DirectMarketingAgency />}/>
          <Route path ='/networkmarketing' element={<WhyNetworMarketingArticle />}/>
          <Route path ='/whisperingmarketing' element={<WhisperingMarketingArticle />}/>
          <Route path ='/studyingmarketing' element={<StudyingMarketingArticle />}/>
          <Route path ='/warsawmarketing' element={<WarsawMarketingArticle />}/>
          <Route path ='/mademarketing' element={<MadeArticle />}/>
          <Route path ='/studemarketing' element={<StudeMarketingArticle />}/>
          <Route path ='/influencemarketing' element={<MarketigInfluenceArticle />}/>
          <Route path ='/contactmarketing' element={<ContactMarketingArticle />}/>
          <Route path ='/emailmarketing' element={<EmailMarketingArticle />}/>
          <Route path ='/onlinemarketing' element={<OnlineMarketingArticle />}/>
          {/* NoPage path */}
          <Route path="*" element={<NoPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
