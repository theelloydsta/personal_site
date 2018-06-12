import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import paperboy from './../images/paperboy.svg'


const PaperBoy = () => (
  <div>
    <p className="paperboy-logo">
      <Link to="/projects">
        <img src={paperboy} alt="paperboy" width="400" heigth="400" />
      </Link>
    </p>
    <p
      className="about-paperboy"
      style={{
        width: 750,
        paddingLeft: 400,
      }}
    >
      The Paper Boy illustration is a creation of mine that i seperated from
      another whole illustration of mine called the Paper Route, which stands as
      the main T-shirt design of the clothing line Paper Route, ive created
      several t-shirt and sweatshirt designs with the illustration and many
      other clothing items for the line.
    </p>
  </div>
)

export default PaperBoy
