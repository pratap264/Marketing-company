 //Home.js
 import React from 'react';
 import Hero from '../components/Hero/Hero';
 import BrandsLogo from '../components/BrandsLogo/BrandsLogo';
 import Services from '../components/Services/Services';
 import Testimonial from '../components/Testimonial/Testimonial';
 import WorkComp from '../components/Work/WorkComp';
 import Navbar from '../components/Navbar/Navbar';
 import Footer from '../components/Footer/Footer';
import Team from '../components/OurTeam/Team';

 const Home = () => {  // Receive theme as a prop
   return (
     <div>
      <Hero />
      <Services />
      <Testimonial />
      <BrandsLogo/>
      <Team/>
      <WorkComp />
     </div>
   )
 }

 export default Home