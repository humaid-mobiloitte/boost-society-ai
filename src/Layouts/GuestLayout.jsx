import React from 'react'
import TopNavbar from '../components/TopNavbar'
import Footer from '../components/Footer'
import SubscriptionSection from '../components/SubscriptionSection'
import Footnote from '../components/Footnote'

import {Box} from '@mui/material'
const GuestLayout = ({children}) => {
  return (
    <div>
      <TopNavbar/>
      <Box>
        {children}
      </Box>
      <SubscriptionSection/>
      <Footer/>
      <Footnote/>
    </div>
  )
}

export default GuestLayout
