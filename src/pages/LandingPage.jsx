import React from 'react'
import TopNavbar from '../components/TopNavbar'
import HeroSection from '../components/HeroSection'
import CollaborativePartners from '../components/CollaborativePartners'
import CollaborativeProjects from '../components/CollaborativeProjects'
import KeyFeatures from '../components/KeyFeaturesBenefits'
import HowItWorks from '../components/HowItWorks'
import TestimonialCarousel from '../components/TestimonialCarousel'
import SubscriptionSection from '../components/SubscriptionSection'
import Footer from '../components/Footer'
import Footnote from '../components/Footnote'
import GuestLayout from '../Layouts/GuestLayout'

function LandingPage() {
  return (
    <GuestLayout>
       <HeroSection/>
       <CollaborativePartners/>
       <CollaborativeProjects/>
       <KeyFeatures/>
       <HowItWorks/>
       <TestimonialCarousel/>
       
    </GuestLayout>
  )
}

export default LandingPage
