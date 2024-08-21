import React from "react";
import './index.css'
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturesAndBenefits from '../components/Featuresbenfits'
import HowItWorks from '../components/HowitWork'
import UpcomingFeatures from '../components/upcomingFeatures'
import CTASections from '../components/ctcSection'
import AboutUs from '../components/AboutSection'
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import Contact from "../components/contact";
import Footer from '../components/FooterSection'



const LandingPage=()=>{
    return(
       <>
      <div className="LandingPageContainer"> 
       <Navbar/>
       
       <HeroSection/>
       <FeaturesAndBenefits/>
       <HowItWorks/>
       <UpcomingFeatures/>
       <CTASections/>
       <AboutUs/>
       <Contact/>
       <Footer/>
       </div>
       </>
    )
}
export default LandingPage