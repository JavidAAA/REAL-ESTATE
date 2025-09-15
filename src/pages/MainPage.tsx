import AboutMain from '@/sections/Main/AboutMain'
import { HeroMain } from '@/sections/Main/HeroMain'
import MainListing from '@/sections/Main/MainListing'
import TestimonialMain from '@/sections/Main/TestimonialMain'
import React from 'react'

const MainPage = () => {
  return (
    <div>
      <HeroMain />
      <div className='px-5'>
        <MainListing />
        <AboutMain />
        <TestimonialMain />
      </div>
    </div>
  )
}

export default MainPage