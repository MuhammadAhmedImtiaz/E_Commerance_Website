import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Category from './components/Category/Category'
import Category2 from './components/Category/Category2'
import Services from './components/Services/Services'
import Banner from './components/Category/Banner/Banner'
import headphone from './assets/hero/headphone.png'
import smartwatch2 from './assets/category/smartwatch2-removebg-preview.png'
import Products from './components/Products/Products'
import Partners from './components/Partners/Partners'
import Blogs from './components/Blogs/Blogs'
import Footer from './components/Footer/Footer'
import Popup from './components/Popup/Popup'
import AOS from "aos"
import "aos/dist/aos.css"
import Aos from 'aos'


const BannerData={
  discount:"30% OFF",
  title:"Fine Simle",
  date:"10 Jan to 28 Jan",
  image:headphone,
  title2:"Air Solo Bags",
  title3:"Winter Sale",
  title4:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  bgColor:'#f42c37'

}
const BannerData2={
  discount:"30% OFF",
  title:"Happy Hours",
  date:"10 Jan to 28 Jan",
  image:smartwatch2,
  title2:"Smart Salo",
  title3:"Winter Sale",
  title4:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  bgColor:'#2dcc6f'

}
const App = () => {
  const [orderPopup,setOrderPopup]=React.useState(false);

  const handleOrderPopup=()=>{
    setOrderPopup(!orderPopup);
  }
  React.useEffect(()=>{
    AOS.init({
      duration: 800,
      easing:"ease-in-sine",
      delay:100,
      offset:100,
    });
    AOS.refresh();
  },[])
    return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden '> 
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Category/>
      <Category2/>
      <Services/>
      <Banner data={BannerData}/>
      <Products />
      <Banner data={BannerData2}/>
      <Blogs />
      <Partners />
      <Footer />
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
    </div>
  )
}

export default App