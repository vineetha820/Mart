import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Navbar from "../components/navbar/Navbar"
import Home from "../components/Home/Home"
import SingleProduct from '../components/SingleProduct'
import Cart from '../components/Cart'
function Routing() {
  return (
    <div>
         <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/SingleProduct/:id' element={<SingleProduct/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
      
    </div>
  )
}

export default Routing
