import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import newhairbreed from './../images/newhairbreed.svg'

const NewHairBreed = () => (
  <div>
    <p className="newhairbreed-logo">
      <Link to="/projects">
        <img src={newhairbreed} alt="newhairbreed" width="400" heigth="400" />
      </Link>
    </p>
    <p
      className="about-newhairbreed"
      style={{
        width: 750,
        paddingLeft: 400,
      }}
    >
      New Hair Breed is a up and coming beauty supply line, and hair company
      with their own line of hair and personal designed wigs, I created a logo
      as a type of badge or stamp that they can put on all their bagged
      products.
    </p>
  </div>
)

export default NewHairBreed
