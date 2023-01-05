import Main from './layout/Main/Main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from '../src/components/Home/Home'
import Courses from '../src/components/Courses/Courses';
import Details from '../src/components/Courses/Details';
import '../src/components/Checkout/'
import Error from '../src/components/Error/Error'
import Login from './components/Login/Login';
import Signup from './components/Sign-Up/Signup';
import Blog from './components/Blog/Blog';
import Faq from './components/Faq/Faq';
import PrivateRoute from'../src/Router/PrivateRoute/PrivateRoute'


function App() {
  const router = createBrowserRouter([
    {
      path:'/',

      element:<Main></Main>,

      children: [
        {
          path: '/',
          loader: ()=> fetch(https://courses-bangla-server.vercel.app/courses'),
          
          element: <Home></Home>
      },
        {
          path: '/home',

          loader: ()=> fetch(https://courses-bangla-server.vercel.app/courses'),

          element: <Home></Home>
      },
      {
        path:'/courses',

        loader: ()=> fetch(https://courses-bangla-server.vercel.app/courses'),

        element:<Courses></Courses>
      },
      {
        path: '/blog',

        element:<Blog></Blog>
      },
      {
        path:'/faq',

        element:<Faq></Faq>
      },
      {
        path:'/login',

        element:<Login></Login>
      },
      {
        path: '/signup',

        element:<Signup></Signup>
      },
      {
        path: '/course-details/:id',
        loader:({params})=> fetch(`https://courses-bangla-server.vercel.app/courses/${params.id}`),
        element: <Details></Details>
      },
      {
        path: '/checkout/:id',
        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
        loader:({params})=> fetch(`https://courses-bangla-server.vercel.app/courses/${params.id}`)
    },
      ]
      
    },
    {
      path:'*',
      element:<Error></Error>
    }
  ])
  return (
    <div className="App">

      <RouterProvider router={router}></RouterProvider>
     
      
    </div>
  );
}

export default App;
