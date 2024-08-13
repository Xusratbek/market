import React, { useState } from 'react'
import "./sass/register.scss"
import logo1 from "./images/barg.png"
import logo2 from "./images/google2.svg"
import { Link, useNavigate } from 'react-router-dom'
import { GoogleAuthProvider,signInWithPopup,createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebase'
const Register = () => {
  const [ism,setIsm]=useState("")
  const [email,setEmail]=useState("")
  const [parol,setParol]=useState("")


const navigate=useNavigate()
  const googleSign=()=>{
    const provider=new GoogleAuthProvider()
    signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    localStorage.setItem("email",JSON.stringify(user.email))
    
    navigate("/")
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });
  }
  const register=()=>{
    createUserWithEmailAndPassword(auth,email,parol).then((res)=>{
      navigate("/login")
    }).catch((error)=>{
      alert("xatolik")
    })




  }
  return (
    <div>
      <div className='build'>
        <div className='left'>
          <h1>Ro'yhatdan o'tish</h1>
          <br />
          <br />
          <label >Ism</label>
          <br />
          <input onChange={(e)=>setIsm(e.target.value)}  className='inputs' type="text" placeholder='ismingizni kiriting'/>
          <br />
          <br />
          <label >E-pochta manzili</label>
          <br />
          <input onChange={(e)=>setEmail(e.target.value)} className='inputs' type="text" placeholder='Elektron pochtangizni kiriting'/>
          <br />
          <br />
          <label >Parol</label>
          <br />
          <input onChange={(e)=>setParol(e.target.value)} className='inputs' type="password" placeholder='parol kiriting'/>
          <br />
          <br />
          <br />
          <button onClick={register} className='sign'>Ro'yhatdan o'tish</button>
          <br />
          <br />
          <br />
          <div className='or'>
            <div className='or-left'>
            </div>
            <span>Or</span>
            <div className='or-right'>
            </div>
          </div>
          <br />
          
          <div className='with-google'>
            <button onClick={googleSign} className='btns'>
              <img src={logo2} alt="" />
              Google bilan tizimga kiring
            </button>
          </div>
          <div className='buttom'>
            <p>Hisobingiz bormi?</p>
            <Link to={"/login"} className='qwerty'>Tizimga kirish</Link>
          </div>
        </div>
        <div className='right'>
          <img src={logo1} alt="" />
        </div>

      </div>
    </div>
  )
}

export default Register