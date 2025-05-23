import React from 'react'
import Hero from '../components/Hero'
import ShortMenu from '../components/menu/ShortMenu'
import NewlyAdded from '../components/New Items/NewlyAdded'
import ReviewCarousel from '../components/reviews/ReviewCarousel'
import Loader from '../components/loaders/Loader'
import Card from '../components/Card'

export default function Home() {
  return (
    <>
    <div className='flex flex-col justify-center items-center'>

    <Hero/>
    <ShortMenu/>
    <NewlyAdded/>
    <ReviewCarousel/>

    </div>
    </>
  )
}
