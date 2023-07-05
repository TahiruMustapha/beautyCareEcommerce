import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import shamp1 from "./selectImgs/shamp1.jpg";
import { IoMdArrowDropright } from "react-icons/io";
import { RiFilter3Fill } from "react-icons/ri";
import {FaArrowUp } from "react-icons/fa";
import {MdKeyboardArrowRight } from "react-icons/md";
import "rsuite/dist/rsuite.min.css";
import {selectData } from '../select/SelectData'
import { Dropdown } from "rsuite";
import General from "../components/General";
const Shampoo = () => {
  return (
    <div className="w-[95%]  mb-10 ml-auto mr-auto">
      <small className="text-[#8080809f] flex items-center  ">
        {" "}
        <Link className="text-[#000]" to={"/"}>
          Home{" "}
        </Link>{" "}
        <MdOutlineKeyboardDoubleArrowRight className="m-1" /> Features{" "}
        <MdOutlineKeyboardDoubleArrowRight className="m-1" /> Bar Shampoo &
        Waterless Skincare
      </small>
      <p className="text-xl font-bold mb-0 mt-1">
        Bar Shampoo & Waterless Skincare
      </p>
      <hr className="w-full mt-1 mb-1" />
      <p className=" mt-0">
        Solid skincare and beauty products may be all the rage right now, but
        don't let that trick you into thinking they're trendy and complicated.
        Not at all! If you're ever used bar soap, you won't have any trouble
        embracing other waterless solid formulations, like bar shampoo, or stick
        deodorant.
      </p>
      <p>
        Waterless and low-water cosmetics come with a number of advantages: they
        feature a higher concentration of active ingredients, they use up fewer
        resources during production, and they generate less waste (as you won't
        have to get rid of plastic packaging when you're done). Are you ready to
        make the switch?
      </p>
      <div className="flex flex-col items-center">
        <div className="mt-10 text-[#000]">
          <h3 className="mb-2">Waterless Beauty: What Is It & What To Buy.</h3>
          <p className="text-[#808080d6] font-medium text-base mb-5">
            Waterless beauty is here to stay! We let you know what waterless
            beauty is and also what are the best products.
          </p>
          <button className="flex items-center mb-8 bg-[gray] text-white py-3 px-3">
            READ MORE <MdOutlineKeyboardDoubleArrowRight className="ml-2" />
          </button>
        </div>
        <img src={shamp1} alt="img" />
      </div>
      <div className="filter mt-8 w-[95%] ml-auto mr-auto">
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
      <div className="flex items-center justify-center">
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

      <div  className="main mt-8 ">
        <div className="card w-[99%] ml-auto pr-8 mr-auto grid grid-cols-2 gap-x-9 gap-y-6">
            {
              selectData.map((data,index)=>{
                return(
                  <div className=" box cursor-pointer text-center    w-[11rem] h-[22rem] ">
                  <img src={data.image} alt="img" />
                  <p className=" font-medium mt-3">{data.name}</p>
                  <p className=" font-medium">{data.desc}</p>
                  <p className="font-semibold">Price: {data.price}</p>
                  <button className="bg-[#8080805a] py-3 px-4 mt-2">{data.button}</button>
              
                </div>
                )
              })
            }
        </div>
       </div>
        <div className="flex mt-8 items-center justify-center">
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
  );
};

export default Shampoo;
