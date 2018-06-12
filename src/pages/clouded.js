import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import clouded from './../images/clouded.svg'


const Clouded = () => (
  <div>
    <p className="clouded-logo">
      <Link to="/projects">
        <img src={clouded} alt="clouded" width="400" heigth="400" />
      </Link>
    </p>
    <p
      className="about-clouded"
      style={{
        width: 750,
        paddingLeft: 400,
      }}
    >
      Clouded is a Medical Marijuana dispensary based in Los Angeles, CA, who
      i've worked with on numerous occasions, creating their company logo,
      business cards, shirts and sweaters, and their own very special pre-rolled
      joint boxes.
    </p>
  </div>
)




export default Clouded