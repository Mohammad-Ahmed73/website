import React from 'react'
import Banner from '../components/Banner'
import ListingSection from '../components/ListingSection'
import ExclusiveDeals from '../components/ExclusiveDeals'
import JoinUs from '../components/JoinUs'
import SearchFrom from '../components/SearchFrom'

function Home() {
  return (
    <>
        <Banner />
        <SearchFrom />
        <ListingSection />
        <JoinUs />
        <ExclusiveDeals />
    </>
  )
}

export default Home
