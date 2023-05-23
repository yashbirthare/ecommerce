import {FaLinkedin} from "react-icons/fa"
import {BsTwitter} from "react-icons/bs"
import {AiFillInstagram} from "react-icons/ai"
import {AiFillFacebook} from "react-icons/ai"
import {BsGithub} from "react-icons/bs"
import "./footer.css"

import React from 'react'

const Footer = () => {
  return (
    <div id="Footer-main">
    <div className="footer-1">© buyLaptop 2023. All rights reserved. Site – Managed by Yash Birthare.</div>

   <div>
<a className="a" href="https://www.linkedin.com/in/yash-birthare-278305226/"><FaLinkedin/></a>
<a className="a" href="https://twitter.com/theyashbirthare"><BsTwitter/></a>
<a className="a" href="https://instagram.com/yashbirthare?utm_medium=copy_link"><AiFillInstagram/></a>
<a className="a" href="https://github.com/yashbirthare"><BsGithub/></a>
<a className="a" href="https://www.facebook.com"><AiFillFacebook/></a>
    </div>
    </div>
  )
}

export default Footer