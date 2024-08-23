import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

function Posts() {

  const [posts,setPosts]= useState([]);
  useEffect(()=>{
    const data= axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      console.log(data,posts);
      setPosts(response.data);
      // handle success
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  
  })

  const [photos,setPhotos]= useState([]);
  useEffect(()=>{
    const dataphotos= axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      console.log(dataphotos,photos);
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
    <div className='header'>
        <div className='posts'>
          {posts.map((post) => (
            <div className='post' key={post.id}>  
              <h2 className='title'>{post.title}</h2>
            </div>
          ))}
           {photos.map((photo) => (
            <div className='photo' key={photo.id}>  
             <a  target="_blank">
                 <img src={photo.thumbnailUrl} className="fullImage" alt={photo.title} />
               </a> 
            </div>
          ))}
        </div>
    </div>
    </>
  )
}

export default Posts
