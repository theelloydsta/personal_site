import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import Navbar from '../components/navbar'
import './index.css'
import Popup from 'reactjs-popup'
import Menu from '../pages/menu'




 const styles = {
   fontFamily: "sans-serif",
   textAlign: "center"
 };

 const contentStyle = {
  background: "rgba(255,255,255,0",
  width: "80%",
  border: "none"
};
 
const App = ({children, data}) => 
(

  <div>
      <Header />
    <Popup
      modal
      overlayStyle={{ background: "rgba(255,255,255,0.98" }}
      contentStyle={contentStyle}
      closeOnDocumentClick={false}
      trigger={open => <Navbar open={open} />}
    >
      {close => <Menu close={close} />}
    </Popup>
    <div>

    
      {children()}
    </div>
  </div>
)

// render (<App />, document.getElementById("root"))
  

export default App




// const Layout = ({ children, data }) => (
//   <div>
//     <Helmet
//       title={data.site.siteMetadata.title}
//       meta={[
//         { name: 'description', content: 'Sample' },
//         { name: 'keywords', content: 'sample, something' },
//       ]}
//     />
//     <Header siteTitle={data.site.siteMetadata.title} />
//       <Navbar />
//       <div
//         style={{
//           margin: '0 auto',
//           maxWidth: 960,
//           padding: '0px 1.0875rem 1.45rem',
//           paddingTop: 0,
//           }}
//       >
//         {children()}
//       </div>
//   </div>
// )

// Layout.propTypes = {
//   children: PropTypes.func,
// }


  




// export default Layout
// // export default App

// export const query = graphql`
//   query SiteTitleQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `


