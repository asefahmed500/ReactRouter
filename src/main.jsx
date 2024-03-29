import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './Components/Contact/Contact.jsx'
import Users from './Components/Users/Users.jsx'
import UserDetail from './Components/UserDeatail/UserDetail.jsx'
import Posts from './Components/Posts/Posts.jsx'
import PostDetail from './Components/PostDetail/PostDetail.jsx'
import Errorpage from './Components/ErrorPage/Errorpage.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/users",
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: '/user/:UserId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.UserId}`),
        element: <UserDetail></UserDetail>
      },
      {
        path: '/posts',
        loader:() => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path: '/post/:postId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element :<PostDetail></PostDetail>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
  </React.StrictMode>,
)
