import { useState } from 'react'


function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
    <nav className=''>

    <div>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-col mx-16 mt-16 gap-6 font-bold'><h3>
        Site Name  
        </h3></div>
       <div className='flex flex-col '>
        <ul className='flex  items-center'>
        <li>
        <button className='font-semibold m-5'>
          Page
       </button></li>
       <li>

        <button className='font-semibold m-5'>
          Page
       </button></li>
       <li>

        <button className='font-semibold m-5'>
          Page
        </button></li>
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
   