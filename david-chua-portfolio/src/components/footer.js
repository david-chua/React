import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () =>{
  return(
    <footer>
      <Link to="/">Home</Link>
      <a target="_blank" href="https://www.instagram.com/dp_chua/"><img className="social" src="/images/social/instagram-logo.svg"/></a>

    </footer>
  )
}

export default Footer
