import banner2 from "../../assets/images/banner2.png"
import banner3 from "../../assets/images/banner3.png"
import banner4 from "../../assets/images/banner4.png"
import laptop6 from "../../assets/images/laptop6.png"
import laptop7 from "../../assets/images/laptop7.png"
import laptop8 from "../../assets/images/laptop8.png"
import laptop9 from "../../assets/images/laptop9.png"
import laptop10 from "../../assets/images/laptop10.png"
import logo from "../../assets/images/logo.png"
import logo1 from "../../assets/images/logo1.png"
import logo2 from "../../assets/images/logo2.png"
import logo3 from "../../assets/images/logo3.png"
import logo4 from "../../assets/images/logo4.png"
import logo5 from "../../assets/images/logo5.png"
import logo6 from "../../assets/images/logo6.png"
import logo7 from "../../assets/images/logo7.png"
import Slider from "../../components/Slider/Slider"
import "./Home.css"
import React from 'react'
import { Link } from "react-router-dom"


export const Home = () => {
  return (
    <div id="home">

    <div id="laptop-brands">
    <Link className="P-S" to="/ProductStore"><span className="store1">Lapt</span><span    className="store">ops👨‍💻</span></Link>
    <h1 className="Lapbrand">APPLE</h1>
    <h1 className="Lapbrand">HP</h1>
    <h1 className="Lapbrand">MSI</h1>
    <h1 className="Lapbrand">ASUS</h1>
    <h1 className="Lapbrand">DELL</h1> 
    </div>


<Slider/>
    
    
<marquee className="marquee" width="100%" scrollamount="10" direction="left" height="45px"  >
India's Largest Laptop Store 🚀 Friday Sale is on!!! You can easily buy laptops online, with the convenience of sitting at your home. Various brands like Dell, Lenovo, Asus, HP, and Acer offer various models with varied features.India's Largest Laptop Store 🚀 Friday Sale is on!!! You can easily buy laptops online, with the convenience of sitting at your home. Various brands like Dell, Lenovo, Asus, HP, and Acer offer various models with varied features.India's Largest Laptop Store 🚀 Friday Sale is on!!! You can easily buy laptops online, with the convenience of sitting at your home. Various brands like Dell, Lenovo, Asus, HP, and Acer offer various models with varied features.
</marquee>


  <div id="Categories-Chart">
  🔰Laptop Categories!!!  
  </div>
  <hr className="Categories-Chart-Hr"></hr>
    


<div className="Categories-Images">
<div>
<div> <img className="Images-Chart " src={laptop6} alt="" /></div>
  <h1 className="head-Tag">Best Buy Gaming📌</h1>
  <hr className="Images-Chart-HR"></hr>
  <p className="Heading-Description">💻.Gaming laptops typically have better processors, graphics cards, and cooling systems than regular laptops. This makes them ideal for gaming, but it also means they tend to be more expensive.</p>

</div>
<div>
  <div> <img className="Images-Chart"  src={laptop7} alt="" /></div>
  <h1 className="head-Tag">Best Buy business📌</h1>
  <hr className="Images-Chart-HR"></hr>
  <p className="Heading-Description">💻.What is a business laptop? A business laptop is designed and intended for company use. Manufacturers optimize business laptops for traveling and longer active periods than personal-use laptops. Consequently, a business laptop will be more efficient in battery life, speed and power to keep up with a 40-hour workweek.</p>
</div>

 <div>
 <div> <img className="Images-Chart " src={laptop8} alt=""/></div>
 <h1 className="head-Tag">For Multitasking📌</h1>
  <hr className="Images-Chart-HR"></hr>
  <p className="Heading-Description">💻.multitasking,the running of multiple programs (sets of instructions) in one computer at the same time. Multitasking is used to keep all of a computer's resources at work as much of the time as possible.</p>
 </div> 

<div>
<div> <img className="Images-Chart" src={laptop9} alt=""/></div> 
<h1 className="head-Tag">For Creators📌 </h1>
  <hr className="Images-Chart-HR"></hr>
  <p className="Heading-Description">💻 .A creator laptop is a laptop that has been specifically designed for those who need to tackle heavy-duty content creation tasks. By that, we mean things like video and audio editing, graphic design, game development and more. In fact, anything where you need more power than the typical laptop can provide.</p>
</div>
</div>

<div className="Categories-Images-1">
<div> <img className="Images-Chart-1" src={laptop10} alt=""/></div>
<h1 className="head-Tag-1">premium laptop📌</h1>
  <hr className="Images-Chart-HR-1"></hr>
  <p className="Heading-Description-1">💻.It means getting a laptop that gives you more high-end components, style and functionality for your money. It means not paying a premium price to get premium and smart features Information technology has deeply penetrated many areas of our lives. Almost any modern person can hardly imagine himself without such devices as a smartphone, a computer, a laptop, etc. And if only recently, a stationary computer was the limit of dreams, now this area has expanded enormously.
   </p>
</div>


  
 <div className="Foter-banner"> 
<div> <img className="Ban-ner" src={banner2} alt="" /></div>
<div> <img className="Ban-ner" src={banner3} alt="" /></div>
</div>
<div><img className="Ban-ner-1"  src={banner4} alt=""/></div>


<div id="Brand-Logo-Footer ">
<img className="asus" src={logo} alt=""/>
<img className="dell" src={logo1} alt=""/>
<img className="msi" src={logo2} alt=""/>
<img className="hp" src={logo3} alt=""/>
<img className="apple" src={logo4} alt=""/>
<img className="toshiba" src={logo5} alt=""/>
<img className="Rog" src={logo6} alt=""/>
<img className="samsung" src={logo7} alt=""/> 
</div>

{/* ========================================================================================================================================================================== */}

<div className='footer-container' >   
<div className='footer-section'>
<h6 className='footer-subheading'>COMMUNITY</h6> 
<hr className="Footer-Chart-HR"></hr>
<p className='footer1'> Eco-Store Reward Program </p>
<p className='footer1'> Forums </p>
<p className='footer1'> Social Media </p>
<p className='footer1'> Videos </p> 
<p className='footer1'> Gaming Teams </p> 
<p className='footer1'> Blogs </p> 
<p className='footer1'> Customer Storie </p> 
</div>



<div  className='footer-section'>
<h6 className='footer-subheading'>SUPPORT</h6>
<hr className="Footer-Chart-HR"></hr> 
<p className='footer1'> Downloads</p>
<p className='footer1'> Member Center </p>
<p className='footer1'> Online Customer Service </p>
<p className='footer1'> Service Locations </p> 
<p className='footer1'> Gaming Teams </p> 
<p className='footer1'> Warranty </p> 
<p className='footer1'> India Warranty Condition</p> 
<p className='footer1'> Laptop Service FAQ</p> 
 </div>


<div className='footer-section'>
<h6 className='footer-subheading'>NEWS</h6> 
<hr className="Footer-Chart-HR"></hr>
<p className='footer1'>Press Room</p>
<p className='footer1'>Awards</p>
<p className='footer1'>RSS</p>
</div>




<div  className='footer-section'>
<h6 className='footer-subheading'>MEDIA</h6> 
<hr className="Footer-Chart-HR"></hr>
<p className='footer1'>Brochure</p>
<p className='footer1'>Wallpaper</p>
<p className='footer1'>Eco-Store Apps</p>
</div>



<div className='footer-section'>
<h6 className='footer-subheading'>ABOUT US</h6> 
<hr className="Footer-Chart-HR"></hr>
<p className='footer1'>About Eco-Store</p>
<p className='footer1'>Mission And Vision</p>
<p className='footer1'>Brand Story</p>
<p className='footer1'>Investor Information</p> 
<p className='footer1'>Innovation DNA</p> 
<p className='footer1'>CSR</p> 
<p className='footer1'>E-waste Management</p> 
<p className='footer1'>TOLL-FREE NO.1800-11-8976</p> 
<p className='footer1'>TOLL-FREE NO.1800-34-3245</p>  </div>

</div>
</div>
  )
}

export default Home

