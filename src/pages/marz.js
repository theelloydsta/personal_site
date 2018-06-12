import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import marz from './../images/marz.svg'


const Marz = () => (
  <div>
    <p className="marz-logo">
      <Link to="/projects">
        <img src={marz} alt="marz" width="400" heigth="400" />
      </Link>
    </p>
    <p
      className="about-marz"
      style={{
        width: 750,
        paddingLeft: 400,
      }}
    >
      Starz On Marz is a recording studio based in Santa Monica California who
      inquired to me to create/re-create the logo for their studio from which
      they had a logo before but was looking for a modern illustrative logo.
    </p>
  </div>
)




export default Marz