import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios";

function Post() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState([]);
  useEffect(() => {
    const apiUrl = `https://jsonplaceholder.typicode.com/posts/${id}`
    const data = axios.get(apiUrl)
      .then(response => {
        console.log(data, post);
        setPost(response.data);
        // handle success
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

  })

  const [photo, setPhoto] = useState([]);
  useEffect(() => {
    const dataphotos = axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then(response => {
        console.log(dataphotos, photo);
        setPhoto(response.data);
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
      <div className='m-16 grid grid-cols-2'>
        {loading ? <h1>Loading...</h1> :
          <>
            <div>
              <h1 className="text-4xl font-bold">{post.title}</h1>
              <h3 className="text-xl my-6 text-gray-400">Author {post.userId}</h3>
              <p>
                {post.body}
              </p>
            </div>
            <div>
              <img src={photo.url} alt={photo.title} />
            </div>
          </>}


      </div>
    </>
  )
}

export default Post
