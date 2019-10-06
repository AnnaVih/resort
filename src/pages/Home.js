import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <Hero hero="defaultHero">
      <Banner title="Luxurious rooms" subtitle="deluxe">
        <Link to="/rooms" className="btn-primary">our rooms</Link>
      </Banner>
    </Hero>
  )
}

Hero.defaultProps = {
  hero: "defaultHero"
}

export default Home
