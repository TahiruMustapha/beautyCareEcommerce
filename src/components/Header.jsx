import React, { useState } from 'react'
import bLogo from '../assets/bLogo.webp'
import {Link} from 'react-router-dom'
import {HiOutlineUserCircle} from 'react-icons/hi'
import {BsCartFill, BsFillAirplaneFill, BsFillBagHeartFill} from 'react-icons/bs'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
const Header = () => {
    const [showMenu,setShowMenu] = useState(false)
    const [showNav,setShowNav] = useState(false)
    const handleShowmenu = ()=>{
        setShowMenu(prev => !prev)
    }
    const handleNav = ()=>{
      setShowNav(prev => !prev)
    }
  return (
    <header className=' w-full h-[30vh] pb-2     z-50 bg-white'>
      {/* DESKTOP */}
             <div className=" hidden topHeader md:flex md:items-center md:px-0  bg-[#80808010] md:w-full md:h-8 ">
              <p className=' hidden md:flex md:w-full  md:text-center md:justify-center  lg:flex lg:w-full  lg:text-center lg:justify-center'> <span className=' m-1'>< BsFillAirplaneFill/></span> Ghana deliveries in 2 to 4 business days <BsFillBagHeartFill className='m-1'/> Free and Fast Shipping for orders above $142.39</p>
             </div>
            
            <div className=' relative'>
             <div className=' relative w-[90%] flex items-center justify-between  ml-auto mr-auto  lg:flex lg:items-center lg:h-full lg:justify-between lg:px-2 md:px-4'>
              <div className=' text-white fixed top-0 left-0 p-3  h-16 z-[9999] bg-[#444444]  w-full flex items-center justify-between  '>
              <Link to={'/'}>
              <div className='   w-full h-10 pt-2 '>
                <img src={bLogo} alt="img" className='h-full'/> 
              </div>
             
              </Link>
              <p className='flex items-center justify-center ' onClick={handleNav}>
                {
                  showNav ? <AiOutlineClose className=' text-xl lg:hidden md:hidden'/> :  < AiOutlineMenu className=' text-xl lg:hidden md:hidden'/> 
                }
                </p>
              </div>
              
                <div className={showNav ? 'mobile fixed left-0 z-[9999]  w-[90%] ease-in-out duration-500  top-20 h-[100vh] md:hidden lg:hidden xl:hidden bg-[black]' : 'fixed left-[-100%]'}>
                <nav className=' flex flex-col mt-5 text-white ml-5 leading-10 md:hidden lg:hidden xl:hidden gap-4 md:gap-6 text-base md:text-lg'>               
                  <Link to={''}  className=' cursor-pointer border-b-2 w-[90%] text-[#fff]'>Home</Link>
                  <Link to={'menu'} className='cursor-pointer border-b-2 w-[90%] text-[#fff]'>Menu</Link>
                  <Link to={'about'} className='cursor-pointer border-b-2 w-[90%] text-[#fff]'>About</Link>
                  <Link to={'contact' } className='cursor-pointer border-b-2 w-[90%] text-[#fff]'>Contact</Link> 
                </nav>
                </div>
              <div className=" hidden md:flex lg:flex lg:items-center lg:gap-4 md:gap-7">
                <nav className=' flex gap-4 md:gap-6 text-base md:text-lg'>
                  <Link to={''}>Home</Link>
                  <Link to={'menu'}>Menu</Link>
                  <Link to={'about'}>About</Link>
                  <Link to={'contact'}>Contact</Link> 
                </nav>
                
                
                <div className="text-2xl text-slate-600 relative cursor-pointer">
                  <BsCartFill/>
                  <div className=" absolute bg-[orangered] w-3 h-3 rounded-full text-xs flex items-center text-white justify-center font-bold -top-1 -right-1 m-0">0</div>
                </div>
                <div className=" text-slate-600" onClick={handleShowmenu}>
                  <div className="text-3xl cursor-pointer" >
                  <HiOutlineUserCircle/>
                  </div>
                  {
                    showMenu && (
                      <div className=" absolute right-2 bg-white py-2 px-2 shadow drop-shadow">
                           <p><Link to={'newProduct'} className=' whitespace-nowrap cursor-pointer'>New Product</Link></p> 
                           <p><Link to={'login'} className=' whitespace-nowrap cursor-pointer'>Login</Link></p> 
                       </div>
                    )
                  }
                 
                 
                </div>
              
              </div>
            
            </div>
             <div className='flex flex-col items-start  lg:grid lg:grid-cols-3   mb-4 mt-20 w-[90%] mr-auto ml-auto'>
                <p className='bg-[#80808010] p-2 font-bold cursor-pointer flex-[3] m-2 text-center'>BRAND OF THE MONTH - HELLIOCARE 25% 0FF</p>
                <p className='bg-[#80808010] p-2 font-bold cursor-pointer flex-[3] m-2  text-center'>HAPPY DAYS -Up to 50% OFF</p>
                <p className='bg-[#80808010] p-2 font-bold cursor-pointer flex-[3] m-2 text-center'>WEEKLY DEALS Up to 40% OFF</p>
             </div>
             <hr  className='w-[90%] m-auto'/>
             <div className=' flex flex-col justify-center  md:grid md:grid-cols-5 lg:grid lg:grid-cols-5 xl:grid xl:grid-cols-10    h-fit pb-2 lg:pb-0 lg:w-[90%] lg:ml-auto lg:mr-auto font-semibold '>
              <select className=' w-[90%] ml-auto mr-auto  py-2 pl-2 mt-3 lg:mt-0 lg:mr-2 lg:py-3 lg:pl-0 lg:pr-0 outline-none  hover:bg-[#0080802f]'>
                <option  className='option' >FEATURED</option>
              </select>
              <select className=' w-[90%] ml-auto mr-auto  py-2 pl-2 mt-3 lg:mt-0 lg:mr-2 lg:py-3 lg:pl-3 outline-none hover:bg-[#0080802f]'>
                <option>SKINCARE</option>
              </select>
              <select className='w-[90%] ml-auto mr-auto  py-2 pl-2 mt-3 lg:mt-0 lg:mr-2 lg:py-3 lg:pl-3 outline-none hover:bg-[#0080802f]'>
                <option>BODY</option>
              </select>
              <select className='w-[90%] ml-auto mr-auto  py-2 pl-2 mt-3 lg:mt-0 lg:mr-2 lg:py-3 lg:pl-3 outline-none hover:bg-[#0080802f]'>
                <option>SUNSCREEN</option>
              </select>
              <select className='w-[90%] ml-auto mr-auto  py-2 pl-2 mt-3 lg:mt-0 lg:mr-2 lg:py-3 lg:pl-3 outline-none hover:bg-[#0080802f]'>
                <option>HAIR</option>
              </select>
              <select className='w-[90%] ml-auto mr-auto  py-2 pl-2 mt-3 lg:mt-0 lg:mr-2 lg:py-3 lg:pl-3 outline-none hover:bg-[#0080802f]'>
                <option>MAKEUP</option>
              </select>
              <select className='w-[90%] ml-auto mr-auto  py-2 pl-2 mt-3 lg:mt-0 lg:mr-2 lg:py-3 lg:pl-3 outline-none hover:bg-[#0080802f]'>
                <option>ACCESSORIES</option>
              </select>
              <select className='w-[90%] ml-auto mr-auto  py-2 pl-2 mt-3 lg:mt-0 lg:mr-2 lg:py-3 lg:pl-3 outline-none hover:bg-[#0080802f]'>
                <option>MEN</option>
              </select>
              <select className='w-[90%] ml-auto mr-auto  py-2 pl-2 mt-3 lg:mt-0 lg:mr-2 lg:py-3 lg:pl-3 outline-none hover:bg-[#0080802f]'>
                <option>MOM & BABY</option>
              </select>
              <select className='w-[90%] ml-auto mr-auto  py-2 pl-2 mt-3 lg:mt-0 lg:mr-2 lg:py-3 lg:pl-3 outline-none hover:bg-[#0080802f]'>
                <option>OFFERS</option>
              </select>
             </div>
             <hr className='w-[90%] ml-auto mr-auto mb-0' />
            </div>

               {/* MOBILE */}
    </header>
  )
}

export default Header
