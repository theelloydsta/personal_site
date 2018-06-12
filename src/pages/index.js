import React from 'react'
import Link from 'gatsby-link'
import Navbar from '../components/navbar'
import Header from '../components/header'
import logo from './../images/logo.svg'
import profile from './../images/profile.svg'
import './../components/navbar.css'


const IndexPage = () => (
  <div>
    <p className="profile-pic">
      <img src={profile} alt="profile" width="300" heigth="300" />
    </p>
    <p
      className="aboutMe"
      style={{
        width: 700,
        paddingLeft: 400,
      }}
    >
      I am a highly inspired Graphic/Web Designer from Inglewood, California
      with a love for every aspect of art, a sneaker enthusiast, and true fan of
      Hip-Hop. I have earned my Associates and Bachelor's of Science degrees in
      Graphic/Web Design from The Art Institute of California, and am looking
      for an entry level design position in my field of study. I am an
      illustrator and logo creator but also design websites and advertising
      layouts along with clothing merchandise.
    </p>
  </div>
)


 
export default IndexPage
