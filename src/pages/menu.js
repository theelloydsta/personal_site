import React from 'react'
import Link from 'gatsby-link'
import Navbar from '../components/navbar'
import Typography from 'typography'

export default ({ close }) => (
  <div className="menu" >
    <ul style={{
      listStyleType: 'none',
      textAlign: 'center',


    }}>
      <li onClick={close}>
        <Link to="/home">Home </Link>
      </li>
      <li onClick={close}>
        <Link to="/about">About </Link>
      </li>
      <li onClick={close}>
        <Link to="/projects">Projects </Link>
      </li>
      <li onClick={close}>
        <Link to="/contact">Contacts </Link>
      </li>
    </ul>
  </div>
)