import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ArtistPage from './Pages/ArtistPage/ArtistPage';
import HomePage from './Pages/HomePage/HomePage';
import LoginPage from './Pages/LoginPage/LoginPage';
import MusicPage from './Pages/MusicPage/MusicPage';

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
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
