import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import edl from './../images/edl.svg'

const Edl = () => (
  <div>
    <p className="edl">
      <Link to="/projects">
        <img src={edl} alt="edl" width="400" heigth="400" />
      </Link>
    </p>
    <p
      className="about-edl"
      style={{
        width: 750,
        paddingLeft: 400,
      }}
    >
      EDL stands for EVERYDAYLIFE it is a street wear clothing company and has
      branched out into an up and coming recording company, i had the chance to
      create the logo for their recording company and a couple artistic layouts
      for their brand.
    </p>
  </div>
)

export default Edl