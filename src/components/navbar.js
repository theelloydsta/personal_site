import React from 'react'
import Link from 'gatsby-link'
import './navbar.css'
import Typography from 'typography'
import Menu from 'react-burger-menu'
import logo from './../images/logo.svg'



// const Navbar = () => (
//     <div> 
//         <a>
//             <img src={logo} alt="logo" />
//         </a>
      
//     </div>
// );



export default ({ open, ...props}) => (
    <div className={open ? "burger-menu open" : "burger-menu"} {...props}>
        <div className="bar1" key="b1" />
        <div className="bar2" key="b2" />
        <div className="bar3" key="b3" />
        <div>
            <a>
                <img src={logo} alt="logo" width="200" heigth="200"/>
             </a>
        </div>

    </div>

    
       
    

    
); 






// const Navbar = () => {
//     return (
//      <header>
//     <div className="header-wrap">
//         <Link className="home" to="/index"><span className="logo">logo</span>
//             <h1 className="name">Lloyd McNeal</h1>
//         </Link>
//         <nav className="main-nav">
//             <ul>
//                 <li><Link className="menu-item" to="/">Index</Link></li>
//                 <li><Link className="menu-item" to="/about">About</Link></li>
//                 <li><Link className="menu-item" to="/projects">Projects</Link></li>
//                 <li><Link className="menu-item" to="/contact">Contact</Link></li>
//             </ul>
//         </nav>
//     </div>
// </header> 
//     )

// }


