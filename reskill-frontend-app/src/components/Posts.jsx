import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function Posts({ isHome = false }) {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const apiUrl=isHome?'http://localhost:3000/posts?_limit=12':'http://localhost:3000/posts'
    const data = axios.get(apiUrl)
      .then(response => {
        console.log(data, posts);
        setPosts(response.data);
        // handle success
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })      .finally(() => { setLoading(false); }
    );

  })

   const postsSliced=isHome?posts.slice(3,12):posts;



  return (
    <>
      <div className=''>
        <div className='grid grid-cols-3'>
          {loading ? (<h1>Loading...</h1>): (
          <>
            {postsSliced.map((post => (

              <div className='' key={post.id} >
                <NavLink to={'/post/'+post.id} target="_blank">
                  <img src={post.thumbnailUrl} className="justify-self-center w-full p-2" alt={post.title} />
                </NavLink>
                <h3 className='font-bold'>
                  {post.title}
                </h3>

                <h3 className='text-gray-400'>
                  Author {post.userId}
                </h3>


              </div>
            )))}
          </>
          )}



        </div>


      </div>
    </>
  )
}

export default Posts
