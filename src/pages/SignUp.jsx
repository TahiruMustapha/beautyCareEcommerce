import React, { useState } from 'react'
import {FaUserAlt} from 'react-icons/fa'
import {BiHide, BiShow} from 'react-icons/bi'
import {Link} from 'react-router-dom'
import axios from 'axios'

//import { imgtobase64 } from '../utility/imgbase64'
const SignUp = () => {
    const [file, setFile] = useState();
    function handleChangeImage(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    // const navigate = useNavigate()
    const [showPassword,setShowPassword] = useState(false)
    const [comfirmPassword,setComfirmPassword] = useState(false)
    const [data,setData]= useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        comfirmPassword:"",
        file:""
    })
    const handleShowPassword = ()=>{
        setShowPassword(prev => !prev)
    }
    const handleComfirmPassword = ()=>{
        setComfirmPassword(prev => !prev)
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
    console.log(process.env.REACT_APP_SERVER_DOMAIN);
    const handleSubmit = async(e)=>{
       e.preventDefault();
       const  {firstName,lastName, email,password,comfirmPassword} = data
       if(firstName && lastName && email && password && comfirmPassword){
          if(password === comfirmPassword){
            const fetchData = await fetch(`${'http://localhost:8080'}/signup`,{
              method:'POST',
              headers:{
              "content-type":"application/json"
              },
              body: JSON.stringify(data)
           })       
            const dataRes = await fetchData.json()
            console.log(dataRes);
              alert('Signup is  successfull')
              // navigate('/login')
          }
          else{
            alert('Password did not match')
          }
       }else{
        alert('Please enter required fields')
       }
    }
  return (
    <div className=' m-2 md:m-4'>
      <div className=" w-full max-w-sm bg-white m-auto flex flex-col p-4">
          
          <div className="  h-16 w-16 overflow-hidden rounded-full m-auto drop-shadow-md shadow-md relative">
      { file ? <img src={file} alt='img' className='h-full  w-full object-cover ' /> : <FaUserAlt className=' h-10  w-10 m-auto text-red-600'/>    }  
            <label htmlFor="profileImage">
        
            <div className=" absolute bottom-0 left-0 h-1/3  cursor-pointer bg-opacity-50 bg-slate-500 text-white w-full text-center">
                <p className=' text-xs p-1 text-white bg-transparent '>Upload</p>
            </div>
            <input type="file" id='profileImage' accept='image/' className='hidden'  onChange={handleChangeImage}/>
             
            </label>
          </div>
          <form className='w-full py-3 flex flex-col' onSubmit={handleSubmit}>
            <label htmlFor="firstName" >First Name</label>
         <input type="text" id='firstName' name='firstName' className=' mt-1 mb-2 rounded w-full
          bg-slate-200 px-2 py-2 border-none focus-within:outline-blue-300' value={data.firstName} onChange={handleOnchange} />
            
            <label htmlFor="lastName" >Last Name</label>
            <input type="text" id='lastName' name='lastName' className=' mt-1 mb-2 rounded w-full
             bg-slate-200 px-2 py-2 border-none focus-within:outline-blue-300' value={data.lastName} onChange={handleOnchange} />
           
            <label htmlFor="email" >Email</label>
            <input type="email" id='email' name='email' className=' mt-1 mb-2 rounded w-full
             bg-slate-200 px-2 py-2 border-none focus-within:outline-blue-300' value={data.email} onChange={handleOnchange} />
           
            <label htmlFor="password" >Password</label>
            <div className=" flex bg-slate-200 px-2 py-2  mt-1 mb-2 rounded focus-within:outline focus-within:outline-blue-300">
            <input type={showPassword? "text": "password" } id='password' name='password' className=' w-full border-none
             outline-none  bg-slate-200 ' value={data.password} onChange={handleOnchange} />
            <span className='flex text-xl cursor-pointer' onClick={handleShowPassword}>{ showPassword ? <BiShow/>: <BiHide/> }</span>
            </div>

            <label htmlFor="comfirmPassword" >Comfirm Password</label>
            <div className=" flex bg-slate-200 px-2 py-2  mt-1 mb-2 rounded focus-within:outline focus-within:outline-blue-300">
            <input type={comfirmPassword? "text": "password" } id='comfirmPassword' name='comfirmPassword' className=' w-full border-none
             outline-none  bg-slate-200 ' value={data.comfirmPassword} onChange={handleOnchange} />
            <span className='flex text-xl cursor-pointer' onClick={handleComfirmPassword}>{ comfirmPassword ? <BiShow/>: <BiHide/> }</span>
            </div>
            
            <button type='submit' className='w-full max-w-[150px] m-auto text-xl py-1 rounded-full  mt-4 font-medium text-center cursor-pointer bg-red-500 hover:bg-red-600 text-white'>Sign Up</button>
          </form>
          <p className=' text-sm mt-2'>Already have account? <Link to={'/login'} className='text-red-600 underline' >Login</Link></p>
      </div>
    </div>
  )
}

export default SignUp
