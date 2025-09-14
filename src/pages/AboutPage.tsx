import HeroAbout from '@/sections/About/HeroAbout'
import StoryAbout from '@/sections/About/StoryAbout'
import TeamAbout from '@/sections/About/TeamAbout'
import ValueAbout from '@/sections/About/ValueAbout'
import React from 'react'

const AboutPage = () => {
  return (
    <div>
        <HeroAbout/>
        <div className='px-5'>
            <StoryAbout/>
            <ValueAbout/>
            <TeamAbout/>
        </div>
    </div>
  )
}

export default AboutPage