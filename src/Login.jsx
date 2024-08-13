import React, { useState } from 'react'
import "./sass/login.scss"
import logo1 from "./images/Google.svg"
import { Link, useNavigate } from 'react-router-dom'
import { GoogleAuthProvider,signInWithPopup,signInWithEmailAndPassword,sendPasswordResetEmail} from 'firebase/auth'
import { auth } from './firebase'

const Login = () => {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const navigate=useNavigate()

  const handleGoogle=()=>{
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
  const signIn=()=>{
    signInWithEmailAndPassword(auth,email,password).then((res)=>{
      localStorage.setItem("email",JSON.stringify(email))
      navigate("/")
    })
  }
  return (
    <div style={{width:"100%",height:"770px",border:"1px solid",background:"black"}}>
      <div className='login-main'>
        <h1 className='login'>Kirish</h1>
        <br />
        <br />
        <label>Email</label>
        <br />
        <input onChange={(e)=>setEmail(e.target.value)} className='login-main-input' type="text" placeholder='email kiriting' />
        <br />
        <br />
        <label >Parol</label>
        <br />
        <input onChange={(e)=>setPassword(e.target.value)} className='login-main-input' type="password" placeholder='parolni kiriting' />
        <Link to={"/forgetpassword"}  className='forget'>Parolni unutdingizmi?</Link>
        <br />
        <br />
        <button onClick={signIn} className='login-btn'>Kirish</button>
        <br />
        <br />
        <br />
        <div className='linear'>
          <div className='linear-hr'></div>
          <p className='or'>Yoki</p>
          <div className='linear-hr'></div>
        </div>
        <div className='cdf'>
        <button onClick={handleGoogle} className='google-btn'>
          <img className='google-img' src={logo1} alt="" />
        </button>
        </div>
        <br />
        <br />
        <div className='have'>
          <p className='dont'>Hisobingiz yo'qmi?</p>
          <Link to={"/register"} className='object'>Ro'yxatdan o'tish</Link>


        </div>
        
      </div>
    </div>
  )
}

export default Login