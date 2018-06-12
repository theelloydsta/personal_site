import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import redbarrel from './../images/redbarrel.svg'

const RedBarrel = () => (
  <div>
    <p className="redbarrel-logo">
      <Link to="/projects">
        <img src={redbarrel} alt="redbarrel" width="600" heigth="600" />
      </Link>
    </p>
    <p
      className="about-redbarrel"
      style={{
        width: 750,
        paddingLeft: 400,
      }}
    >
      Red Barrel is a logo i created for the up and coming chef Rashad Mabry. He
      is Based in Inglewood, CA, and you can order food from him on his
      instagram account @redbarrel. He is catering chef working from his house
      and a good friend of mine, i designed his logo, and kitchen teams cooking
      accessories and promotion clothing wear.
    </p>
  </div>
)

export default RedBarrel
