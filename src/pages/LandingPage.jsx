import React from 'react'
import TopNavbar from '../Layouts/TopNavbar'
import HeroSection from '../Layouts/HeroSection'
import CollaborativePartners from '../Layouts/CollaborativePartners'
import CollaborativeProjects from '../Layouts/CollaborativeProjects'
import KeyFeatures from '../Layouts/KeyFeaturesBenefits'
import HowItWorks from '../Layouts/HowItWorks'
import TestimonialCarousel from '../Layouts/TestimonialCarousel'
import SubscriptionSection from '../Layouts/SubscriptionSection'
import Footer from '../Layouts/Footer'
import Footnote from '../Layouts/Footnote'

function LandingPage() {
  return (
    <div>
      <TopNavbar/>
      <HeroSection/>
      <CollaborativePartners/>
      <CollaborativeProjects/>
      <KeyFeatures/>
      <HowItWorks/>
      <TestimonialCarousel/>
      <SubscriptionSection/>
      <Footer/>
      <Footnote/>
    </div>
  )
}

export default LandingPage
