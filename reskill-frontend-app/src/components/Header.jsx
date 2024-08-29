import { useState } from 'react'
import { NavLink } from 'react-router-dom'


function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <nav className=''>

          <div>
            <div className='flex flex-row justify-between'>
              <div className='flex flex-col mx-16 mt-16 gap-6 font-bold'>
                <NavLink to='/'>
                  <h3>
                    Web Reskill</h3>
                </NavLink>
              </div>
              <div className='flex flex-col '>
                <ul className='flex  items-center'>
                  <li>
                    <NavLink to='/' className='font-semibold m-5'>
                      Home
                    </NavLink></li>
                  <li>

                    <NavLink to='/posts' className='font-semibold m-5'>
                      Posts
                    </NavLink></li>
                  <li>

                    <NavLink to='/about' className='font-semibold m-5'>
                      About
                    </NavLink></li>
                  <li>

                    <button className='m-5' onClick={() => setCount((count) => count + 1)}>
                      count is {count}
                    </button></li>
                </ul></div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
