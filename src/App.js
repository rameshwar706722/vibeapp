
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import Footer from './Footer';
import Project from './Project';
import Blogs from './Blogs';
import Internship from './Internship';
import Webdev from './Webdev';
import Websitedev from './Websitedev';
import Ecom from './Ecom';
import Cms from './Cms';
import Informative from './Informative';
import Erp from './Erp';




import { BrowserRouter, Route ,Routes } from 'react-router-dom';
import Header from './Header';
import Android from './Android';
import Webapp from './Webapp';
import Ios from './Ios';
import Blogdetail from './Blogdetail';


function App() {
  return (
    <div >
    

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path="/about" element={<About/>} />
       <Route path="/contact" element={<Contact/>} />

       <Route path="/internship" element={<Internship/>} />

      <Route path="/project" element={<Project/>} />
      <Route path="/blogs" element={<Blogs/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/websitedev" element={<Websitedev/>} />
      <Route path="/webdev" element={<Webdev/>} />
      <Route path="/cms" element={<Cms/>} />
      <Route path="/ecom" element={<Ecom/>} />
      <Route path="/Webapp" element={<Webapp/>} />
      <Route path="/ios" element={<Ios/>} />
      <Route path="/blogdetail/:bid" element={<Blogdetail/>} />
      <Route path="/android" element={<Android/>} />


      <Route path="/erp" element={<Erp/>} />
      <Route path="/informative" element={<Informative/>} />

    </Routes>
    
    </BrowserRouter>
    <Footer/> 
   
    </div>
  );
}

export default App;
