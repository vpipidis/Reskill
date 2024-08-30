
import Posts from './Posts'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom';

function Home() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const apiUrl='http://localhost:3000/posts?_limit=3';
    const data = axios.get(apiUrl)
      .then(response => {
        console.log(data, posts);
        setPosts(response.data);
        // handle success
      })
      .catch(function (error) {
        // handle error
        
        console.log(error);
      }).finally(() => { setLoading(false); }
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
        <NavLink to='/post/1' target="_blank">
          <img src={posts[0].url} className="  rounded-lg" alt={posts[0].title}/>
        </NavLink>
      </div>
      <div className=" flex w-full  justify-center items-center py-16">
        <p className='w-3/5 font-semibold'>
        {posts[0].body}
         </p>
      </div>
      <div className='grid grid-cols-2 gap-x-4	'>
      <NavLink to='/post/2' target="_blank">

        <img src={posts[1].url}className=" mx-4  rounded-lg" alt={posts[1].title} />
        </NavLink>
        <NavLink to='/post/2' target="_blank">

        <img src={posts[2].url} className="mx-4  rounded-lg" alt={posts[2].title} />
        </NavLink>
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
          <h2 className='text-4xl font-bold py-4'>Related Articles or posts</h2>
          <Posts isHome={true} />

        </div>
      </div>
    </div>
  )
}

export default Home