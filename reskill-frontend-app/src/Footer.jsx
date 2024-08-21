
import './App.css'
import facebook from './assets/facebookIcon.svg'
import instagram from './assets/instaIcon.svg'
import linkedin from './assets/linkedinIcon.svg'
import youtube from './assets/ytIcon.svg'

function App() {

  return (
    <>
    <div className='half-container'>
      <div >
        <h5>Site Name</h5>
      </div>
      <div>
        <table>
          <tc>
            <a href='https://www.facebook.com' target="_blank">
              <img src={facebook} className="icon" alt="facebook" />
            </a>
          </tc>
          <tc>
            <a href='https://www.linkedin.com/' target="_blank">
              <img src={linkedin} className="icon" alt="linkedin" />
            </a>
          </tc>
          <tc>
            <a href='https//:www.youtube.com' target="_blank">
              <img src={youtube} className="icon" alt="Youtube" />
            </a>
          </tc>
          <tc>
            <a href='https//:www.instagram.com' target="_blank">
              <img src={instagram} className="icon" alt="Instagram" />
            </a>
          </tc>

        </table>
      </div>
      <div>
      <table>
        <tr>
          <th>
            Topic
          </th>
          <th>
            Topic   
          </th>
          <th>
            Topic   
          </th>
        </tr>
        <tr>
          <tc>
            Page
          </tc>
          <tc>
            Page
          </tc>
          <tc>
            Page
          </tc>
        </tr>
        <tr>
          <tc>
            Page
          </tc>
          <tc>
            Page
          </tc>
          <tc>
            Page
          </tc>
        </tr>
        <tr>
          <tc>
            Page
          </tc>
          <tc>
            Page
          </tc>
          <tc>
            Page
          </tc>
        </tr>
        
      </table>
      </div>
    </div>
    </>
  )
}

export default App
