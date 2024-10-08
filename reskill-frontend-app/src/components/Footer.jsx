
import facebook from '../assets/facebookIcon.svg'
import instagram from '../assets/instaIcon.svg'
import linkedin from '../assets/linkedinIcon.svg'
import youtube from '../assets/ytIcon.svg'
import { NavLink } from 'react-router-dom'


function Footer() {

  return (
    <div className='m-16'>
    <div className='grid grid-cols-2 justify-between'>
      <div className='text-2xl font-semibold'>
        <h5 className='mb-16'>Web Reskill</h5>

        <div className='grid grid-cols-4 w-1/3 h-10 py-2 gap-x-3'>
            <a href='https://www.facebook.com' target="_blank">
              <img src={facebook} className="w-10 " alt="facebook" />
            </a>
        
            <a href='https://www.linkedin.com/' target="_blank">
              <img src={linkedin} className="w-12 " alt="linkedin" />
            </a>
          
            <a href='https://www.youtube.com' target="_blank">
              <img src={youtube} className="w-14" alt="Youtube" />
            </a>
         
            <a href='https://:www.instagram.com' target="_blank">
              <img src={instagram} className="w-10" alt="Instagram" />
            </a>

        </div>
      </div>
      <div className='grid grid-cols-3 gap-4' >
        <div className='font-semibold ' >
          <NavLink to='/red'> 
            Red 
          </NavLink>
        </div>
        <div className='font-semibold ' >
        <NavLink to='/blue'> 
            Blue 
          </NavLink>
        </div>
        <div className='font-semibold' >
        <NavLink to='/green'> 
            Green 
          </NavLink>
        </div>
        <div className=' ' >
        <NavLink to='/strawberry'> 
            Strawberry 
          </NavLink>
        </div>
        <div className=' ' >
        <NavLink to='/sea'> 
            Sea 
          </NavLink>
        </div>
        <div className=' ' >
        <NavLink to='/grass'> 
            Grass 
          </NavLink>
        </div>
        <div className=' ' >
        <NavLink to='/paprica'> 
            Paprica 
          </NavLink>
        </div>
        <div className=' ' >
        <NavLink to='/sky'> 
            Sky 
          </NavLink>
        </div>
        <div className=' ' >
        <NavLink to='/lettuce'> 
            Lettuce 
          </NavLink>
        </div>
        <div className=' ' >
        <NavLink to='/tomato'> 
            Tomato 
          </NavLink>
        </div>
        <div className=' ' >
        <NavLink to='/blue-cheese'> 
        Blue-Cheese
          </NavLink>
        </div>
        <div className='' >
        <NavLink to='/cactus'> 
        Cactus 
          </NavLink>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer
