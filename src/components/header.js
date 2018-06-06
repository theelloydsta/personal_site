import React from 'react'
import Link from 'gatsby-link'
import logo from './../images/logo.svg'
import './navbar.css'



const Header = ({ siteTitle }) => (
  
  

  <div style={{ 
     
    }}

  >

    <a>
      <img src={logo} alt="logo" />
    </a>
 

    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>


  
)

export default Header
