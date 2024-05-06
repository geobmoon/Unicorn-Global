import Home from './Home';
import AboutUs from './AboutUs';
import BrandStrategy from './BrandStrategy';
import SocialMedia from './SocialMedia';
import MktPerformance from './MktPerformance';
import Contact from './Contact';

const routes = [ 

  { path: '/', component: <Home />},
  { path: '/about', component: <AboutUs />}, 
  { path: '/service-ecommerce', component: <BrandStrategy />},
  { path: '/service-landing', component: <SocialMedia />},
  { path: '/service-web', component: <MktPerformance />},
  { path: '/contact', component: <Contact />},
]

export default routes;