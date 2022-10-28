import Main from './layout/Main/Main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from '../src/components/Home/Home'
import Courses from '../src/components/Courses/Courses';
import Footer from '../src/components/Footer/Footer';
import Error from '../src/components/Error/Error'
import Login from './components/Login/Login';
import Signup from './components/Sign-Up/Signup'

function App() {
  const router = createBrowserRouter([
    {
      path:'/',

      element:<Main></Main>,

      children: [
        {
          path: '/home',

          loader: ()=> fetch('http://localhost:5000/courses'),

          element: <Home></Home>
      },
      {
        path:'/courses',

        loader: ()=> fetch('http://localhost:5000/courses'),

        element:<Courses></Courses>
      },
      {
        path:'/login',

        element:<Login></Login>
      },
      {
        path: '/signup',

        element:<Signup></Signup>
      }
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
      <Footer></Footer>
      
    </div>
  );
}

export default App;
