import React from 'react'
import Link from 'gatsby-link'
import clouded from './../images/clouded.svg'
import marz from './../images/marz.svg'
import paperboy from './../images/paperboy.svg'
import paperroute from './../images/paperroute.svg'
import newhairbreed from './../images/newhairbreed.svg'
import redbarrel from './../images/redbarrel.svg'
import sentinel from './../images/sentinel.svg'
import edl from './../images/edl.svg'
import peregrine from './../images/peregrine.svg'



const Projects = () => (
  <div>
    <div
      class="flex-wrap"
      style={{
        width: 800,
        height: 600,
        paddingLeft: 300,
        display: 'flex',
      }}
    >
      <div className="projects">
        <ul
          style={{
            listStyleType: 'none',
            textAlign: 'center',
            
          }}
        >
          <li>
            <Link to="/clouded">
              <img src={clouded} alt="clouded" width="200" heigth="200" />
            </Link>
          </li>
          <li>
            <Link to="/marz">
              <img src={marz} alt="marz" width="200" heigth="200" />
            </Link>
          </li>
          <li>
            <Link to="/paperboy">
              <img src={paperboy} alt="paperboy" width="200" heigth="200" />
            </Link>
          </li>
          <li>
            <Link to="/newhairbreed">
              <img
                src={newhairbreed}
                alt="newhairbreed"
                width="200"
                heigth="200"
              />
            </Link>
          </li>

          <li>
            <Link to="/paperroute">
              <img src={paperroute} alt="paperroute" width="200" heigth="200" />
            </Link>
          </li>
          <li>
            <Link to="/redbarrel">
              <img src={redbarrel} alt="redbarrel" width="200" heigth="200" />
            </Link>
            <li>
              <Link to="/sentinel">
                <img src={sentinel} alt="sentinel" width="200" heigth="200" />
              </Link>
            </li>
            <li>
              <Link to="/edl">
                <img src={edl} alt="edl" width="200" heigth="200" />
              </Link>
            </li>
            <li>
              <Link to="/peregrine">
                <img src={peregrine} alt="peregrine" width="200" heigth="200" />
              </Link>
            </li>
          </li>
        </ul>
      </div>
    </div>
  </div>
)
    
    


export default Projects

  


