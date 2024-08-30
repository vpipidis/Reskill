import { NavLink } from 'react-router-dom'


function Header() {

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

                    <button className='m-5 bg-black text-white font-bold py-2 px-4 rounded' onClick={() => alert("Successfully Subscribed !   ")
}>
                      Subscribe
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
