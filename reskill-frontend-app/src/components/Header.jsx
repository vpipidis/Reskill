import { useState } from 'react'


function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
    <nav className='header'>

    <div>
      <div className='container relative inline-flex items-center justify-center p4'>
        <div className='inline float-left mr-4 my-2 h-24'><h3>
          Page Title
        </h3></div>
       <div>
        <button className='inline float-right mr-4 my-2 h-24'>
          Page
       </button></div>
       <div>
        <button className='page-link'>
          Page
       </button></div>
        <div>
        <button className='page-link'>
          Page
        </button></div>
        <div><button className='button' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button></div>
        </div>
      </div>
     </nav>
     </header>
    </>
  )
}

export default Header
   