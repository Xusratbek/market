import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Register from './Register'
import ForgetPassword from './ForgetPassword'
import Erkaklar_kiyimlari from './Erkaklar_kiyimlari'
import Telefonlar from './Telefonlar'
import Elektronika from './Elektronika'
import MaishiyTexnika from './MaishiyTexnika'
import Noutbuklar from './Noutbuklar'
import Sport from './Sport'
import Data from './Data'
import Table from './Table'
import Texnika from './Texnika'
import Card from './Card'
import Elektr from './Elektr'

function App() {
  return (
   <div>
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route index  path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/forgetpassword' element={<ForgetPassword/>}/>
      <Route path='/erkaklar-kiyimlari' element={<Erkaklar_kiyimlari/>}/>
      <Route path='/telefonlar' element={<Telefonlar/>}/>
      <Route path='/elektronika' element={<Elektronika/>}/>
      <Route path='/maishiy-texnika' element={<MaishiyTexnika/>}/>
      <Route path='/noutbuklar' element={<Noutbuklar/>}/>
      <Route path='/sport' element={<Sport/>}/>
      <Route path='/data' element={<Data/>}/>
      <Route path='/table' element={<Table/>}/>
      <Route path='/texnika' element={<Texnika/>}/>
      <Route path='/card' element={<Card/>}/>
      <Route path='/elektr' element={<Elektr/>}/>

      
    </Routes>
   </div>
  )





}

export default App
