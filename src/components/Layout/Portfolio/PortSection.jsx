import React from 'react'
import Portfoliopill from './Portfoliopill'
import PortfolioHeading from './PortfolioHeading'
import PortfolioCard from '../../UI/Portfolio/PortfolioCard'
import Dark from "../../../assets/Dark.jpg"
import Yellow from "../../../assets/yellow.jpg"
import premium from "../../../assets/premium.jpg"
import pic2 from "../../../assets/pic2.jpg"
const PortfolioSection = () => {
  return (
    <section className='text-white'>
    <Portfoliopill/>
    <PortfolioHeading/>
    <PortfolioCard Title={"Modern Oasis Revamp"} Para={"Witness the shift from a cramped, outdated layout to a breathable, modern sanctuary. We maximized natural light and introduced minimalist textures to create a space that truly breathes. Slide to reveal the magic."} BeforeImg={Dark} AfterImg={Yellow}/>
    <PortfolioCard Title={"Bespoke Urban Elegance"} Para={"A masterclass in premium detailing. By combining custom woodwork with sophisticated, moody tones, we delivered an elegant living space designed for both deep relaxation and grand entertaining."} BeforeImg={premium} AfterImg={pic2} reverse={true}/>
    <PortfolioCard Title={"Seamless Spatial Flow"} Para={"Transformed the legacy interface into a sleek, modern, and dark-themed experience. Slid the handle on the right to see the visual upgrade."} BeforeImg={Dark} AfterImg={Yellow}/>
    </section>
  )
}

export default PortfolioSection