import './App.css'
import { Private, Public } from './layout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AboutUsPage, AchievementsPage, AnnouncementPage, Error, HomePage, LandingPage, Login, MerchandisePage, PlansPage, ProfilePage, Signup, TaskPage } from './pages'
import { RouterUrl } from './routes'
import Form from './layout/form'
import { LEventPage } from './pages/public/landingPage/events'
import { LMerchandisePage } from './pages/public/landingPage/merchandise'

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
        {
          path: RouterUrl.EVENTPLANS,
          element:<LEventPage />
        },
        {
          path: RouterUrl.LMERCHANDISE,
          element:<LMerchandisePage />
        },
      ]
    },
    {
      path:RouterUrl.LANDINGPAGE,
      element : <Private />,
      children:[
        {
          path: RouterUrl.HOME,
          element:<HomePage />
        },
        {
          path: RouterUrl.ANNOUNCMENT,
          element:<AnnouncementPage />
        },
        {
          path: RouterUrl.TASK,
          element:<TaskPage />
        },
        {
          path: RouterUrl.PLANS,
          element:<PlansPage />
        },
        {
          path: RouterUrl.MERCHANDISE,
          element:<MerchandisePage />
        },
        {
          path: RouterUrl.PROFILE,
          element:<ProfilePage />
        },
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
