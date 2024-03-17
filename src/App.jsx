import React from 'react'
import Header from './components/Header/Header'
import Footerr from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { Flowbite } from 'flowbite-react';
import { useLocation } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  return (
    <>
      <Flowbite >
        <Header />
        <Outlet />
        <Footerr />
      </Flowbite>
    </>
  )
}

export default App
