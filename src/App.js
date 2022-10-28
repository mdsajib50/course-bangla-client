import Main from './layout/Main/Main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from '../src/components/Home/Home'
import Courses from '../src/components/Courses/Courses';
import Footer from '../src/components/Footer/Footer'

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
      }
      ]
      
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
