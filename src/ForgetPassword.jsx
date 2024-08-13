import { sendPasswordResetEmail } from 'firebase/auth'
import React from 'react'
import { auth } from './firebase'
import { useNavigate } from 'react-router-dom'

const ForgetPassword = () => {
  const navigate=useNavigate()
          const handleSubmit=async(e)=>{
                    e.preventDefault()
                    const emailVal=e.target.email.value
                    sendPasswordResetEmail(auth,emailVal).then((res)=>{
                              alert("gmail-ni tekshiring")
                              navigate("/login")
                    }).catch(err=>{
                              alert(err.code)

                    })
          }
  return (
    <div>
          <form onSubmit={(e)=>handleSubmit(e)}>
                    <input name='email' type="text" />
                    <br />
                    <br />
                    <button>Reset</button>
          </form>
    </div>
  )
}

export default ForgetPassword