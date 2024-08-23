import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

function Posts() {

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const data = axios.get('https://jsonplaceholder.typicode.com/posts')
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
    const dataphotos = axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        console.log(dataphotos, photos);
        setPhotos(response.data);
        // handle success
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  })



  return (
    <>
      <div className=''>
        <div className='grid grid-cols-3'>


          <div className='' >
            <h3 className='font-bold'>
              title
            </h3>

            <h3 className='text-gray-400'>
              body
            </h3>

          </div>
          <div className='' >
            <h3 className='font-bold'>
              title
            </h3>

            <h3 className='text-gray-400'>
              body
            </h3>

          </div>
          <div className='' >
            <h3 className='font-bold'>
              title
            </h3>

            <h3 className='text-gray-400'>
              body
            </h3>

          </div>
          <div className='' >
            <h3 className='font-bold'>
              title
            </h3>

            <h3 className='text-gray-400'>
              body
            </h3>

          </div>
          <div className='' >
            <h3 className='font-bold'>
              title
            </h3>

            <h3 className='text-gray-400'>
              body
            </h3>

          </div>
          

        </div>


      </div>
    </>
  )
}

export default Posts
