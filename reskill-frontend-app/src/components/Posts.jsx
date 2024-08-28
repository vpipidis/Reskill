import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

// eslint-disable-next-line react/prop-types
function Posts({ isHome = false }) {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const apiUrl=isHome?'https://jsonplaceholder.typicode.com/posts?_limit=9':'https://jsonplaceholder.typicode.com/posts'
    const data = axios.get(apiUrl)
      .then(response => {
        console.log(data, posts);
        setPosts(response.data);
        // handle success
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

  })

  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    const dataphotos = axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
        console.log(dataphotos, photos);
        setPhotos(response.data);
        // handle success
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(() => { setLoading(false); }
      );
  })


  return (
    <>
      <div className=''>
        <div className='grid grid-cols-3'>
          {loading ? (<h1>Loading...</h1>): (
          <>
            {posts.map((post => (

              <div className='' key={post.id} >
                <a href='/' target="_blank">
                  <img src={photos[post.id-1].thumbnailUrl} className="justify-self-center w-full p-2" alt={photos[post.id].title} />
                </a>
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
