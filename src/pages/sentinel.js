import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import sentinel from './../images/sentinel.svg'

const Sentinel = () => (
  <div>
    <p className="sentinel-logo">
      <Link to="/projects">
        <img src={sentinel} alt="sentinel" width="400" heigth="400" />
      </Link>
    </p>
    <p
      className="about-sentinel"
      style={{
        width: 750,
        paddingLeft: 400,
      }}
    >
      The Sentinel Logo is a logo i created for my old high school as i revamped
      their overall look with shirts and team uniforms as well. i took on this
      job as an old coach of mine inquired on if i can design the new football
      team uniforms and while i was at it he asked me to revamp the school logo
      as it was almost 100 years old at the time in 2016 while it was getting
      slightly remodeled
    </p>
  </div>
)

export default Sentinel
