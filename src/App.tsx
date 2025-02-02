import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ArtistPage from './Pages/ArtistPage/ArtistPage';
import HomePage from './Pages/HomePage/HomePage';
import LoginPage from './Pages/LoginPage/LoginPage';
import MusicPage from './Pages/MusicPage/MusicPage';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import UserPage from './Pages/UserPage/UserPage';

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/artist',
      element: <ArtistPage />
    },
    {
      path: '/login',
      element: <LoginPage />
    },{
      path: '/music',
      element: <MusicPage />
    },{
      path: '/register',
      element: <RegisterPage />
    },{
      path: '/users',
      element: <UserPage />
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
