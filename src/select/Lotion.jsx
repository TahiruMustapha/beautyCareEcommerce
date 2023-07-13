import React from 'react'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import { RiFilter3Fill } from "react-icons/ri";
import {FaArrowDown, FaArrowUp } from "react-icons/fa";
import {MdKeyboardArrowRight } from "react-icons/md";
import {BsMicrosoft} from 'react-icons/bs'
import "rsuite/dist/rsuite.min.css";
import {selectData } from '../select/SelectData'
import { Dropdown } from "rsuite";
import General from "../components/General";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import lotion1 from './selectImgs/lotion1.jpg'
import lotion2 from './selectImgs/lotion2.png'
import body1 from './selectImgs/body1.webp'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
const Lotion = ({addToCart}) => {
  return (
    <div>
       <div className="w-[95%] md:w-[90%] md:mt-0 lg:mt-[0rem]   xl:mt-4  mb-10 ml-auto mr-auto">
    <small className="text-[#8080809f] flex items-center  ">
      {" "}
      <Link className="text-[#000]" to={"/"}>
        Home{" "}
      </Link>{" "}
      <MdOutlineKeyboardDoubleArrowRight className="m-1" /> Body{" "}
      <MdOutlineKeyboardDoubleArrowRight className="m-1" /> Body Hair
     
    </small>
     <div className='mt-5 mb-5'>
        <img src={body1} alt="img" className=' object-cover' />
     </div>
   
    <p className="text-xl font-bold mb-0 mt-1">
      Body Lotion
    </p>
    <hr className="w-full mt-1 mb-1" />
    <p className=" mt-0 md:text-lg">
      Keep the body skin healthy and give it some needed love. Chose from our selection of various lotions,norishing creame and rich oils.
    </p>
    
   
    <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper  h-fit  lg:h-full xl:mt-10  lg:mt-40 md:h-full md:mt-20  w-full mt-0 mb-10"
      >
        <SwiperSlide className="h-full ">
        <div className="flex flex-col items-center  md:flex md:flex-row md:justify-between md:mt-10 md:items-start  md:w-full ">
      <div className="mt-10 text-[#000]">
        <h3 className=" md:hidden mb-2 capitalize">Your newly full body skincare routine, simplified.</h3>
        <h3 className="hidden md:block lg:block xl:hidden md:text-3xl">Your newly full body skincare routine, simplified.</h3>
        <h3 className="hidden md:hidden lg:hidden xl:block  lg:text-4xl lg:mb-3  xl:text-6xl xl:mb-4">Your newly full body skincare <br /> routine, simplified </h3>
        <p className="text-[#808080d6] md:hidden font-medium text-base mb-5">
          Waterless beauty is here to stay! We let you know  what waterless
          beauty is and also what are the best products.
        </p>
        <p className="hidden md:block md:text-xl text-[#808080d6] font-medium text-base mb-5">
          Shaving ,waxing ,dermaplanning and epilation. <br /> Do you know how to pick the best method <br /> of at home? 
          hair removal for you?
        </p>
        <button className="flex items-center mb-8 bg-[gray] text-white lg:text-xl md:hover:bg-black lg:py-7 md:py-5 md:px-10 lg:px-14 py-3 px-3">
          READ MORE <MdOutlineKeyboardDoubleArrowRight className="ml-2" />
        </button>
      </div>
      <img src={lotion1} alt="img" className=" md:w-[25rem] md:h-[17] lg:ml-1 lg:w-[32rem] lg:h-[20rem] xl:w-[50rem] xl:h-[28rem]" />
    </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex flex-col items-center  md:flex md:flex-row md:justify-between md:mt-10 md:items-start  md:w-full ">
      <div className="mt-10 text-[#000]">
        <h3 className=" md:hidden mb-2">Hair Removal At Home: 6 Methods To Try Now.</h3>
        <h3 className="hidden md:block lg:block xl:hidden md:text-3xl">Hair Removal At Home: 6 Methods To Try Now.</h3>
        <h3 className="hidden md:hidden lg:hidden xl:block  lg:text-4xl lg:mb-3  xl:text-6xl xl:mb-4">Hair Removal At Home: 6 Methods <br /> To Try Now.</h3>
        <p className="text-[#808080d6] md:hidden font-medium text-base mb-5">
          Waterless beauty is here to stay! We let you know  what waterless
          beauty is and also what are the best products.
        </p>
        <p className="hidden md:block md:text-xl text-[#808080d6] font-medium text-base mb-5">
          Shaving ,waxing ,dermaplanning and epilation. <br /> Do you know how to pick the best method <br /> of at home? 
          hair removal for you?
        </p>
        <button className="flex items-center mb-8 bg-[gray] text-white lg:text-xl md:hover:bg-black lg:py-7 md:py-5 md:px-10 lg:px-14 py-3 px-3">
          READ MORE <MdOutlineKeyboardDoubleArrowRight className="ml-2" />
        </button>
      </div>
      <img src={lotion2} alt="img" className=" md:w-[25rem] md:h-[17] lg:ml-1 lg:w-[32rem] lg:h-[20rem] xl:w-[50rem] xl:h-[28rem]" />
    </div>
        </SwiperSlide>
        
      </Swiper>
    <div className="filter mt-8 w-[95%] ml-auto mr-auto sm:hidden">
      <hr className="w-full  mb-4" />
        <p className="flex items-center justify-between w-[50%]">
        <IoMdArrowDropright className=" text-base text-[gray]" />
      <p className="flex items-center text-base font-medium">
        <RiFilter3Fill className="mr-1"/>
        Filter
      </p>
        </p>
      
      <hr className="w-full  mt-4" />
    </div>
    <div className="flex items-center justify-center sm:hidden">
    <p>Sort By</p>
       <Dropdown title='Position'    className=' w-[6rem] ml-1 mr-1'>
            <Dropdown.Item>
            <Link className='text-[#444] focus:text-[#444] focus:no-underline no-underline ml-0'>Name</Link>
              </Dropdown.Item>
            <Dropdown.Item className="hover:bg-[teal]">
            <Link  className='text-[#444] focus:text-[#444] focus:no-underline no-underline ml-0'>Price</Link>
              </Dropdown.Item>
              </Dropdown>
              <FaArrowUp/>
    </div>
       
    <hr className="w-full " />
     <div className="hidden md:flex md:items-center md:justify-between md:w-full">
      <div className="flex items-center">
      <p className="lg:text-base lg:block md:hidden  lg:mr-1 lg:font-semibold">Items 1 to 10 of 95 total | Sort By</p>
      <p className="md:text-base lg:hidden md:block md:mr-1 md:font-semibold"> Sort By</p>
       <Dropdown title='Position'    className=' w-[6rem] ml-1 mr-1'>
            <Dropdown.Item>
            <Link className='text-[#444] focus:text-[#444] focus:no-underline no-underline ml-0'>Name</Link>
              </Dropdown.Item>
            <Dropdown.Item className="hover:bg-[teal]">
            <Link  className='text-[#444] focus:text-[#444] focus:no-underline no-underline ml-0'>Price</Link>
              </Dropdown.Item>
              </Dropdown>
              <FaArrowDown className=" mr-2 ml-2"/>
              <p className="text-base font-semibold mr-2">| Show</p>
              <Dropdown title='1'    className=' w-[3rem] ml-1 mr-1'>
            <Dropdown.Item>
            <Link className='text-[#444] focus:text-[#444] focus:no-underline no-underline ml-0'>12</Link>
              </Dropdown.Item>
            <Dropdown.Item className="hover:bg-[teal]">
            <Link  className='text-[#444] focus:text-[#444] focus:no-underline no-underline ml-0'>30</Link>
              </Dropdown.Item>
            <Dropdown.Item className="hover:bg-[teal]">
            <Link  className='text-[#444] focus:text-[#444] focus:no-underline no-underline ml-0'>56</Link>
              </Dropdown.Item>
            <Dropdown.Item className="hover:bg-[teal]">
            <Link  className='text-[#444] focus:text-[#444] focus:no-underline no-underline ml-0'>128</Link>
              </Dropdown.Item>
              </Dropdown>
              <p className="text-base font-semibold ml-2">per page</p>
      </div>
       <div className="flex items-center">
        <p className="mr-3 text-base font-semibold">View as:</p>
        <p className="mr-3 w-10 h-10 bg-[#8080804c] flex items-center justify-center"> <BsMicrosoft className="text-base"/> </p>
         <AiOutlineMenuUnfold className="text-xl "/>
       </div>
       
     </div>
     <hr className="hidden md:block md:w-full" />
     <div className=" hidden  md:flex md:mt-4 md:items-center md:justify-center">
        <p className="mr-3 text-base font-semibold">Page:</p>
        <span className=" cursor-pointer ml-1 mr-0.2 w-10 h-10 flex items-center justify-center bg-[#8080808b]">1</span>
        <span className=" cursor-pointer ml-1 mr-0.2 w-10 h-10 flex items-center justify-center bg-[#8080802b]">2</span>
        <span className=" cursor-pointer ml-1 mr-0.2 w-10 h-10 flex items-center justify-center bg-[#8080802b]">3</span>
        <span className=" cursor-pointer ml-1 mr-0.2 w-10 h-10 flex items-center justify-center bg-[#8080802b]">4</span>
        <span className=" cursor-pointer ml-1 mr-0.2 w-10 h-10 flex items-center justify-center bg-[#8080802b]">5</span>
        <span className=" cursor-pointer ml-1 mr-0.2 w-10 h-10 flex items-center justify-center bg-[#8080802b]"><MdKeyboardArrowRight/></span>
        
      </div>
      <hr className="hidden md:block md:w-full" />
    <div  className="main mt-8 ">
      <div className="card w-[99%] ml-auto pr-1   xl:pl-14 lg:pl-11 md:pl-6 md:pr-auto   mr-auto xl:grid xl:grid-cols-5  md:grid md:grid-cols-3 grid grid-cols-2  gap-x-9 gap-y-6">
          {
            selectData.map((data,index)=>{
              return(
                <div className=" box cursor-pointer text-center md:w-[13rem] md:h-[24rem] lg:w-[15rem] lg:h-[27rem]   xl:w-[16rem] xl:h-[32rem]  w-[11rem] h-[22rem] ">
                <img src={data.image} alt="img" className="md:w-full lg:w-full xl:w-full"/>
                <p className=" font-medium mt-3 xl:text-base lg:text-base">{data.name}</p>
                <p className=" font-medium xl:text-base lg:text-base">{data.desc}</p>
                <p className="font-semibold xl:text-base lg:text-base">Price: {data.price}</p>
                <button onClick={()=> addToCart(data)} className="bg-[#8080805a] py-3 px-4 mt-2 lg:text-base">{data.button}</button>
            
              </div>
              )
            })
          }
      </div>
     </div>
      <div className=" sm:hidden flex mt-8 items-center justify-center">
        <p>Page:</p>
        <span className=" ml-1 mr-0.2 w-8 h-8 flex items-center justify-center bg-[#8080808b]">1</span>
        <span className=" ml-1 mr-0.2 w-8 h-8 flex items-center justify-center bg-[#8080802b]">2</span>
        <span className=" ml-1 mr-0.2 w-8 h-8 flex items-center justify-center bg-[#8080802b]">3</span>
        <span className=" ml-1 mr-0.2 w-8 h-8 flex items-center justify-center bg-[#8080802b]">4</span>
        <span className=" ml-1 mr-0.2 w-8 h-8 flex items-center justify-center bg-[#8080802b]">5</span>
        <span className=" ml-1 mr-0.2 w-8 h-8 flex items-center justify-center bg-[#8080802b]"><MdKeyboardArrowRight/></span>
        
      </div>
    <hr className="w-full mb-2 mt-16 " />
     <General/>
  </div>
    </div>
  )
}

export default Lotion
