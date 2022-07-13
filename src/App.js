import React from 'react';
import Nav from './cmoponents/basic/Nav.js';
import IntroBox from './cmoponents/basic/IntroBox.js';
import Features from './cmoponents/basic/Features.js';
import Sponsors from './cmoponents/basic/Sponsors.js';
import About from './cmoponents/basic/About.js';
import Section4 from './cmoponents/basic/media/Section4.png'
import HelpCenter from './cmoponents/basic/HelpCenter.js';
import Members from './cmoponents/basic/Member.js';
import Footer from './cmoponents/basic/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
 <>
<Nav/> 
<IntroBox/>
<Features/>
<Sponsors/>
<About/>
<img src={Section4} alt="section4" />
<HelpCenter/>
<Members/>
<Footer/>
 </>
  );
}

export default App;
