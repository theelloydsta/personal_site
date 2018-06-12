import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import peregrine from './../images/peregrine.svg'

const Peregrine = () => (
  <div>
    <p className="peregrine">
      <Link to="/projects">
        <img src={peregrine} alt="peregrine" width="400" heigth="400" />
      </Link>
    </p>
    <p
      className="about-peregrine"
      style={{
        width: 750,
        paddingLeft: 400,
      }}
    >
      The Peregrine Cafe is a lunchtime cafe in Palmdale, CA that i create the
      logo for as resemblance of the predator Peregrine bird which the logo is
      named after but made the predator bird resemblance as friendly as possibly
      for a overly welcoming lunchtime cafe.
    </p>
  </div>
)

export default Peregrine
