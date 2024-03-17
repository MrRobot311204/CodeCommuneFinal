import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './components/Home/Home'
import {  Flowbite } from 'flowbite-react';
import Learn from './components/Learn/Learn.jsx'
import SignUp from './components/SignUp/SignUp.jsx'
import Doubts from './components/Doubts/Doubts.jsx'
import HabitTracker from './components/HabitTracker/HabitTracker.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
       <Route index element={<Home/>} />
       <Route path='doubts' element={<Doubts/>}/>
       <Route path='habittracker' element={<HabitTracker/>} />
       <Route path='learn' element={<Learn/>}/>
       <Route path='register' element={<SignUp/>}/>
    </Route>
  
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Flowbite>
    <RouterProvider router={router} />
    </Flowbite>
  </React.StrictMode>,
  
)
