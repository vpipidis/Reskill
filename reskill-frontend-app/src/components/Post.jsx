import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios";

function Post() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState(null);
  useEffect(() => {
    const apiUrl = `http://localhost:3000/posts`
    const data = axios.get(apiUrl)
      .then(response => {
        console.log(data, post);
        setPost(response.data[id-1]);
        // handle success
        
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      }).finally(() => { setLoading(false); }
    );

  })

  return (
    <>
      <div className='m-16 grid grid-cols-2 gap-x-5'>
        {loading ? <h1>Loading...</h1> :
        (post==null)?<h1>Invalid Post</h1>:
          <>
            <div>
              <h1 className="text-4xl font-bold">{post.title}</h1>
              <h3 className="text-xl my-6 text-gray-400">Author {post.userId}</h3>
              <p>
                {post.body}
              </p>
            </div>
            <div>
              <img src={post.url} alt={post.title}/>
            </div>
          </>}


      </div>
    </>
  )
}

export default Post
