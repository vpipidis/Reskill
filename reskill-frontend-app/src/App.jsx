
import { Route,createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage';
import MainLayout from './MainLayout';
import Post from './components/Post';
import Posts from './components/Posts';
import UnderConstraction from './components/UnderConstruction';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}> 
      <Route index element={<HomePage/>}/>
      <Route path='/post/:id' element={<Post/>}/>
      <Route path='/posts' element={<Posts/>}/>
      <Route path='/*' element={<UnderConstraction/>}/>
    </Route>
)
)

function App() {

  return <RouterProvider router={router}/>
}

export default App
