import React from 'react'
import { ImStarFull, ImStarHalf } from "react-icons/im";
import { SlChemistry } from "react-icons/sl";
import {BsBag, BsGlobe2, BsStar} from "react-icons/bs";
import {Link} from 'react-router-dom'
const General = () => {
  return (
    <div className="  flex flex-col  justify-center  h-fit w-full  mt-0 sm:grid  sm:grid-cols-1 md:grid  lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-4 xl:w-full lg:w-full lg:mt-10     ">
    <div className="flex   w-full  justify-center  p-2 mr-3  border-b-2 sm:w-[44rem]  pb-6 lg:w-[18rem] lg:border-r-2 xl:w-[17rem] lg:border-b-0" >
    <div className=" w-32  flex flex-col">
    <BsGlobe2 className="w-full h-10 text-[purple]" />
    </div>
    
      <div className="ml-4">
        <p className="font-bold   text-lg text-[#444] mb-4">   Ghana Deliveries</p>
        <p>Free and fast shiping for orders above $123,000 via Ghana DHL express shipping 
          <Link className= "underline ml-2 font-medium">Know More</Link>
        </p>
      </div>
    </div>
    <div className="flex  w-full  justify-center p-2 mr-3 border-b-2 sm:w-[44rem] pb-4 lg:w-[18rem] lg:border-r-2 xl:w-[17rem] xl:ml-8 lg:border-b-0">
    <div className=" w-32  flex flex-col">
      <BsStar className="w-full h-10 text-[purple]"/>
      </div>
      <div className="ml-4">
        <p className="font-bold  text-lg text-[#444] mb-4">4.8/ Star Customer Reviews </p>
        <p>Free and fast shiping for orders above $123,000 via Ghana DHL express shipping 
          <Link className= "underline ml-2 font-medium">Know More</Link>
        </p>
      </div>
    </div>
    
    <div className="flex  w-full  justify-center p-2 mr-3 border-b-2 sm:w-[44rem] pb-4 lg:w-[18rem]  xl:w-[17rem] xl:ml-8 lg:border-r-2 lg:border-b-0">
    <div className=" w-32  flex flex-col">
      <SlChemistry className="w-full h-10 
      text-[purple]
      "/>
      </div>
      <div className="ml-4">
        <p className="font-bold  text-lg text-[#444] mb-4">Premium Customer Care</p>
        <p>Free and fast shiping for orders above $123,000 via Ghana DHL express shipping 
          <Link className= "underline ml-2 font-medium">Know More</Link>
        </p>
      </div>
    </div>
    <div className="flex w-full justify-center p-2 mr-3 border-b-2 sm:w-[44rem]   pb-4 lg:w-[18rem]   lg:border-r-2 xl:w-[17rem] xl:mt-0 xl:ml-8 lg:mt-10 lg:border-b-0">
    <div className=" w-32  flex flex-col">
      <BsBag className="w-full h-10 text-[purple]" />
      </div>
      <div className="ml-4">
        <p className="font-bold  text-lg text-[#444] mb-4">100% geniune product on stocks</p>
        <p>Free and fast shiping for orders above $123,000 via Ghana DHL express shipping 
          <Link className= "underline ml-2 font-medium">Know More</Link>
        </p>
      </div>
    </div>
   
  </div>
  )
}

export default General
