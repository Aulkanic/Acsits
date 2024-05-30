import './App.css'
import { Private, Public } from './layout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AboutUsPage, AchievementsPage, Error, LandingPage, Login, Signup } from './pages'
import { RouterUrl } from './routes'
import Form from './layout/form'

function App() {
  const router = createBrowserRouter([
    {
      path: RouterUrl.LANDINGPAGE,
      element: <Public />,
      errorElement: <Error />,
      children:[
        {
          path: RouterUrl.LANDINGPAGE,
          element:<LandingPage />
        },
        {
          path: RouterUrl.ACHIEVEMENTS,
          element:<AchievementsPage />
        },
        {
          path: RouterUrl.ABOUTUS,
          element:<AboutUsPage />
        },
      ]
    },
    {
      path:RouterUrl.LANDINGPAGE,
      element : <Private />,
      children:[
      ]
    },
    {
      path:RouterUrl.LANDINGPAGE,
      element : <Form />,
      children:[
        {
          path: RouterUrl.SIGNUPPAGE,
          element:<Signup />
        },
        {
          path: RouterUrl.LOGIN,
          element:<Login />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} fallbackElement={<h6>Loading...</h6>} />
  )
}

export default App
