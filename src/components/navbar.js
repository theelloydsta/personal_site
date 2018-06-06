import React from 'react'
import Link from 'gatsby-link'
import './navbar.css'
import Typography from 'typography'
import Menu from 'react-burger-menu'



// const Navbar = () => (
//     <div> 
        
      
//     </div>
// );

// export default Navbar;




export default ({ open, ...props}) => (
    <div className={open ? "burger-menu open" : "burger-menu"} {...props}>
        <div className="bar1" key="b1" />
        <div className="bar2" key="b2" />
        <div className="bar3" key="b3" />
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


