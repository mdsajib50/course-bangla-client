import Main from '../src/components/Main/Main'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',

      element:<Main></Main>
    }
  ])
  return (
    <div className="App">

      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
