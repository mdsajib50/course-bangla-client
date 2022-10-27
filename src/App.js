import Main from '../src/components/Main/Main'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from '../src/components/Home/Home'
import Courses from '../src/components/Courses/Courses'

function App() {
  const router = createBrowserRouter([
    {
      path:'/',

      element:<Main></Main>,

      children: [
        {
          path: '/home',

          element: <Home></Home>
      },
      {
        path:'/courses',

        element:<Courses></Courses>
      }
      ]
      
    }
  ])
  return (
    <div className="App">

      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
