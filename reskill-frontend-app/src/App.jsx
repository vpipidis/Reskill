
import { Route,createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage';
import MainLayout from './MainLayout';
import Post from './components/Post';
import Posts from './components/Posts';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}> 
      <Route index element={<HomePage/>}/>
      <Route path='/post' element={<Post/>}/>
      <Route path='/posts' element={<Posts/>}/>
    </Route>
)
)

function App() {

  return <RouterProvider router={router}/>
}

export default App
