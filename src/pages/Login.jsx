import React, { useState } from 'react'
import {FaUserAlt} from 'react-icons/fa'
import {BiHide, BiShow} from 'react-icons/bi'
import {Link} from 'react-router-dom'
const Login = () => {
    const [showPassword,setShowPassword] = useState(false)
    const [data,setData]= useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        comfirmPassword:"",
    })
    const handleShowPassword = ()=>{
        setShowPassword(prev => !prev)
    }
    const handleOnchange =(e)=>{

      const {name,value} = e.target
        setData((prev)=>{
            return{
                ...prev,
                [name] : value
            }
        })
       
    }
    const handleSubmit = (e)=>{
       e.preventDefault();
       const  {email,password} = data
       if( email && password){
            alert('Signup is  successfull')
       }else{
        alert('Please enter required fields')
       }
    }
  return (
    <div className=' m-2 md:m-4'>
      <div className=" w-full max-w-sm bg-white m-auto flex flex-col p-4">
          
          <div className=" p-4 h-16 w-16 overflow-hidden rounded-full m-auto drop-shadow-md shadow-md">
            <FaUserAlt className=' h-full  w-full text-red-600'/>
          </div>
          <form className='w-full py-3 flex flex-col' onSubmit={handleSubmit}>
            <label htmlFor="email" >Email</label>
            <input type="email" id='email' name='email' className=' mt-1 mb-2 rounded w-full
             bg-slate-200 px-2 py-2 border-none focus-within:outline-blue-300' value={data.email} onChange={handleOnchange} />
           
            <label htmlFor="password" >Password</label>
            <div className=" flex bg-slate-200 px-2 py-2  mt-1 mb-2 rounded focus-within:outline focus-within:outline-blue-300">
            <input type={showPassword? "text": "password" } id='password' name='password' className=' w-full border-none
             outline-none  bg-slate-200 ' value={data.password} onChange={handleOnchange} />
            <span className='flex text-xl cursor-pointer' onClick={handleShowPassword}>{ showPassword ? <BiShow/>: <BiHide/> }</span>
            </div>            
            <button type='submit' className='w-full max-w-[150px] m-auto text-xl py-1 rounded-full  mt-4 font-medium text-center cursor-pointer bg-red-500 hover:bg-red-600 text-white'>Login</button>
          </form>
          <p className=' text-sm mt-2'>Don't have account? <Link to={'/signUp'} className='text-red-600 underline' >Sign Up</Link></p>
      </div>
    </div>
  )
}

export default Login
