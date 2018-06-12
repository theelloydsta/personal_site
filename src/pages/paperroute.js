import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import paperroute from './../images/paperroute.svg'

const PaperRoute = () => (
  <div>
    <p className="paperroute-logo">
      <Link to="/projects">
        <img src={paperroute} alt="paperroute" width="400" heigth="400" />
      </Link>
    </p>
    <p
      className="about-paperroute"
      style={{
        width: 750,
        paddingLeft: 400,
      }}
    >
      This is the original artwork for the Paper Route Clothing line that
      inspired many more designs, like the Paper Boy illustration, and other
      clothing accessories for the Paper Route Clothing line.
    </p>
  </div>
)

export default PaperRoute
