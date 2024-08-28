
import Posts from './Posts'
import { useEffect,useState } from 'react'
import axios from 'axios'

function Home() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const apiUrl='https://jsonplaceholder.typicode.com/posts?_limit=3';
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



  return (loading?<h1>Loading ...</h1>:
    <div className="m-16">
      <div className="w-1/2 py-16">
        <h1 className='text-5xl p-4 font-bold'>Posts List</h1>
        <h4 className="text-gray-400 p-6 text-xl">  {posts[0].title}
        </h4>
      </div>  
      <div className=' flex w-full  justify-center items-center ' >
        <a target="_blank">
          <img src={photos[0].url} className="" alt={photos[0].title}/>
        </a>
      </div>
      <div className=" flex w-full  justify-center items-center py-16">
        <p className='w-3/5 font-semibold'>
        {posts[0].body}
         </p>
      </div>
      <div className='grid grid-cols-2 gap-x-4	'>
        <img src={photos[1].url}className=" mx-4" alt={photos[1].title} />
        <img src={photos[2].url} className="mx-4" alt={photos[2].title} />
      </div>

      <div className='flex w-full py-16 justify-center items-center'>
        <p className='w-3/5 font-semibold '>
        {posts[1].title}
        <br /> 
        {posts[1].body}
          <br /> <br />
        {posts[2].title}
        <br /> 

        {posts[2].body}


        </p>
      </div>
      <div>
        <div>
          <h2 className='text-4xl font-bold'>Related Articles or posts</h2>
          <Posts isHome={true} />

        </div>
      </div>
    </div>
  )
}

export default Home