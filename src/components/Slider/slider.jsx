import mainbanner1 from "../../assets/images/mainbanner1.png"
import mainbanner2 from "../../assets/images/mainbanner2.jpeg"
import mainbanner3 from "../../assets/images/mainbanner3.jpeg"
import mainbanner4 from "../../assets/images/mainbanner4.jpeg"
import React, { useEffect, useState } from 'react'
import "./Slider.css"

const slider = () => {

  const [ banner , setBanner] = useState([mainbanner1, mainbanner2, mainbanner3, mainbanner4]);

  const [ slider , setslider] = useState(0);


  useEffect(() => { 

    setInterval(() => {
      setslider((slider=>slider>2?0:slider+1))

    }, 1500);
  },[])

  return (

    <div>
        <img className="Website-Banner" src={banner[slider]}  alt="/"/>
    </div>
  )
}

export default slider