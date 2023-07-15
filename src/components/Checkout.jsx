import React, { useState,useEffect } from 'react'
// import {IoCheckmarkCircleSharp} from 'react-icons/io'
import {AiFillCheckCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';
import pay from './homeSliderImgs/pay.png'
import int from './homeSliderImgs/int.png'
import cripto from './homeSliderImgs/cripto.png'

const Checkout = ({
  products,
}) => {
    const [points,setPoints] = useState(true);
    const handlePoints =()=>{
        setPoints((prev) => !prev);    
    }
    const [total,setTotal] = useState();
        
        useEffect( ()=>{
            setTotal(products.reduce((acc,curr)=> acc + Number(curr.price), 0))
        },[products])
  return (
       <div className=' w-[95%] ml-auto  mr-auto'>
         <div className= {points? 'flex items-center transition-all justify-between mb-4 py-2 px-2  md:py-4 md:px-4 bg-[#a2b450] text-white text-base': 'hidden'}>
            <div className='flex    items-center'>
            <AiFillCheckCircle className=' text-3xl mr-2 md:text-xl md:mr-10'/>
            <p className='flex-2'>Complete your order and earn
            <strong className='ml-1'>30</strong> Points for a discount on a future purchase</p>
            </div>
           <p onClick={handlePoints} className='text-xl cursor-pointer font-extrabold'>x</p>
         </div>
         <p className='text-base mt-10'>Returning Customer? <Link className='text-[#a2b450]'>Click Here To Login.</Link></p>
         <p className='text-base'>Have a Coupon? <Link className='text-[#a2b450]'>Click Here To Enter Your Code.</Link></p>
       
        <div className="checkoutInfo  flex flex-col  md:flex md:flex-row items-start md:w-full mt-14 mb-14">
          <div className='formInfo w-full md:w-[60%] '>
            <p className=' flex flex-col w-full md:flex md:flex-row md:items-center md:justify-between'>
              <span className=' md:mr-2'>
               <p><label htmlFor="firstName">First name*</label></p> 
                <input className=' border-2 w-full  md:w-[34rem] py-3 px-3  outline-nonev mt-3 focus:outline-none' type="text" name='firstName' />
              </span>
              <span className='md:ml-2 mt-2'>
                <p><label htmlFor="lastName">Last name*</label></p>
             
                <input className=' border-2 w-full md:w-[34rem] py-3 px-3 outline-nonev mt-3 focus:outline-none' type="text" name='lastName'  />
              </span>
            </p>
            <p className='mt-10'>
             <p><label htmlFor="companyName">Company Name(Optinal)</label></p> 
              <input type="text" className='border-2 w-full py-3 px-3 outline-none mt-3 focus:outline-none' name='companyName' />
            </p>
            <p className='mt-10'>
            <label for="countries" class=" mb-2 text-sm font-medium  ">Country / Region*</label>
            <select id="countries" class=" border-2 outline-none mt-2  focus:outline-none   w-full py-3 px-3 ">
              <option selected></option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </p>

          <p className='mt-10'>
             <p><label htmlFor="companyName">Street Address*</label></p> 
              <input type="text" className='border-2 w-full py-3 px-3 outline-none mt-3 focus:outline-none' name='companyName' placeholder='House number and street name'/>
              <input type="text" className='border-2 w-full py-3 px-3 outline-none mt-5 focus:outline-none ' name='companyName' placeholder='Apartment,suite,unit etc. (Optional)'/>
            </p>
            <p className='mt-10'>
             <p><label htmlFor="companyName">Town/City*</label></p> 
              <input type="text" className='border-2 w-full py-3 px-3 outline-none mt-3 focus:outline-none' name='companyName' />
            </p>
            <p className='mt-10'>
             <p><label htmlFor="companyName">State / Country*</label></p> 
              <input type="text" className='border-2 w-full py-3 px-3 outline-none mt-3 focus:outline-none' name='companyName' placeholder='Select an option' />
            </p>

            <p className='mt-10'>
             <p><label htmlFor="companyName">Postcode / Zip*</label></p> 
              <input type="text" className='border-2 w-full py-3 px-3 outline-none mt-3 focus:outline-none' name='companyName' />
            </p>

            <p className='mt-10'>
             <p><label htmlFor="companyName">Phone*</label></p> 
              <input type="number" className='border-2 w-full py-3 px-3 outline-none mt-3 focus:outline-none' name='companyName' />
            </p>

            <p className='mt-10'>
             <p><label htmlFor="companyName">Email Address*</label></p> 
              <input type="email" className='border-2 w-full py-3 px-3 outline-none mt-3 focus:outline-none' name='companyName' />
            </p>

            <p className='mt-10'>
              <input type="checkbox" name='check' className='w-[1rem]' />
              <label className='ml-1' htmlFor="check">Sign me up to recieve email updates and news (optional)</label>
            </p>
            <p className='mt-10'>
              <input type="checkbox" name='check' className='w-[1rem]' />
              <label className='ml-1' htmlFor="check">Create an account?</label>
            </p>
            <p className='mt-10'>
              <input type="checkbox" name='check' className='w-[1rem]' />
              <label className='ml-1' htmlFor="check">Ship to a different address?</label>
            </p>

            <p className='mt-10'>
             <p><label htmlFor="orderNotes">Order notes (optional)</label></p> 
              <textarea name="orderNotes" className='border-2 w-full py-3 px-3 outline-none mt-3 focus:outline-none' placeholder='Notes about your order, e.g. special notes for delivery.' ></textarea>
              
            </p>
          </div>
          <div className='paymentInfo w-full h-fit md:w-[40%] mt-4  bg-gray-50 ml-0 md:ml-24 px-6 md:px-8 py-10 '>
            <p className='text-xl font-extrabold'>Your Order</p>
               
                {
                   products.map( (product)=>(
                    <div>
                      <div className="product-info  mt-5 border-b-2 pb-3 ">
                              <h3 className="font-[600] text-base">
                                {product.name}
                              </h3>
                               <p className='font-[600] text-base'>Include a dropper: No</p>
                              <span className="product-price font-[600] text-base ">
                                ${product.price * product.count}
                              </span>
                            </div>


                    </div>
                   )

                   ) 
              }
              <div className="subTotal border-b-2 pb-3 mt-2 font-[600] text-base">
                <p>Subtotal</p>
                <p className='font-[600] text-base'>${Number(total).toFixed(2)}</p>
              </div>
              <div className='border-b-2 pb-3 mt-2 font-[600] text-base'>
                <p>Shipping</p>
                <p>Enter your address to view shipping options.</p>
              </div>
              <div className='border-b-2 pb-3 mt-2 font-[600] text-base'>
                <p>Tax</p>
                <p>$0.00</p>
              </div>
              <div className='border-b-2 pb-3 mt-2 font-[600] text-base'>
                <p>TOTAL</p>
                <p className='text-xl font-[700] '>${Number(total).toFixed(2)}</p>
              </div>
               
               <div className="payments mt-8 ">
                <p className='flex items-center '>
                <p>
                  <input type="checkbox" className='w-[2rem]' />
                  <span className='text-base font-semibold'>Credit Card</span>
                </p>

                <img src={pay} alt="creditCard" className='md:ml-10 ml-8 w-[10rem] ' />
                </p>
                <p className='flex items-center '>
                <p>
                  <input type="checkbox" className='w-[2rem]' />
                  <span className='text-base font-semibold'>Interest Free Payments</span>
                </p>

                <img src={int} alt="creditCard" className='md:ml-10 ml-12 w-[4rem] ' />
                </p>
                <p className='flex items-center '>
                <p>
                  <input type="checkbox" className='w-[2rem]  rounded-full' />
                  <span className='text-base font-semibold'>Cripto</span>
                </p>

                <img src={cripto} alt="creditCard" className='ml-10 w-[12rem] md:ml-8 md:w-[22rem]' />
                </p>

                <p className='text-base ml-2 font-semibold'>Pay with Criptocurrency</p>
                <p className='ml-0'>
                  <input type="checkbox" className='w-[2rem] ' />
                  <span className='text-base font-semibold'>You agree to our <Link className='text-[#a2b450]'>privacy policy</Link> and <Link className='text-[#a2b450]'>terms and conditions</Link> </span>
                </p>


               
               <button className='bg-[#917e65] text-base text-white transition-all px-8 mt-8 w-[100%] hover:bg-[#a2b450]  py-3 font-[600]'>Proceed To Criptocurrency Payment</button>
               </div>

          </div>
        </div>
       </div>
  )
}

export default Checkout
