import { useState } from 'react'

import './Header.css'

function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav className='header'>

    <table>
    <tr>
      <th><h3>
          Page Title
        </h3></th>
      <th>
        <button className='page-link'>
          Page
       </button></th>
       <th>
        <button className='page-link'>
          Page
       </button></th>
       <th>
        <button className='page-link'>
          Page
       </button></th>
      <th><button className='button' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button></th>
    </tr>
  </table>
     </nav>
    </>
  )
}

export default Header
   