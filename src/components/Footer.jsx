import React from "react";
import { Link } from "react-router-dom";
//import gh from "../country/gh.png";
import pay from "../country/pay.png";
import {BsFacebook, BsGoogle, BsInstagram, BsTwitter, BsYoutube} from 'react-icons/bs'
const Footer = () => {
  return (
    <div className="mt-2 xl:mt-0 w-full lg:mt-[48rem]   bg-gray-200 h-fit pb-5 pl-5 pt-5">
      <div className=" flex-col w-full  sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 xl:grid grid-cols-4    ">
        <div className=" w-[16rem] md:mt-4">
          <h3 className=" text-2xl font-semibold mb-4">Newsletter</h3>
          <p className=" text-lg hover:text-gray-400">
            Inspiring newletter is one click away! <Link>Click here</Link> to
            signup and enjoy!{" "}
          </p>

          <h3 className=" text-2xl font-semibold mb-4 mt-3">Direct Contact</h3>

          <p className=" text-lg  w-full hover:text-gray-400">
            Any issue? <Link>Click here</Link> to contact us. We always reply to
            every email as fast as we can. :)
          </p>
        </div>
        <div className="mt-4 lg:ml-5 mb-10">
          <h3 className=" text-2xl font-semibold mb-4   ">Country</h3>

          <select className=" outline-none shadow-md pl-2 pt-2 pb-2 rounded-lg" >
            <option>Ghana (USD - US$)</option>
            <option>Ghana (USD - US$)</option>
            <option>Ghana (USD - US$)</option>
            <option>Ghana (USD - US$)</option>
            <option>Ghana (USD - US$)</option>
            <option>Ghana (USD - US$)</option>
            <option>Ghana (USD - US$)</option>
          </select>
          <p>
            {" "}
            <small>Location Preferences</small>
          </p>
          <h3 className=" text-2xl font-semibold mb-2 mt-2 ">Payment Methods</h3>
          <img src={pay} alt="img"  className="mt-4 mb-5"/>
          <h3 className=" text-2xl font-semibold mb-2 mt-2 ">Security</h3>
          <img
            src="https://static.beautytocare.com/media/wysiwyg/selo-google-safe-browsing.png"
            alt="img"
            className="mt-5"
          />
        </div >
        <div className="mb-12 md:ml-4">
          <h3 className=" text-2xl font-semibold mb-2 mt-4  ">Customer Service</h3>
          <ul className=" leading-10 text-lg cursor-pointer">
            <li className="hover:text-gray-400">How to Buy Online</li>
            <li className="hover:text-gray-400">All About My Order</li> 
            <li className="hover:text-gray-400">Returns and Refunds</li>
            <li className="hover:text-gray-400">My Accounts</li>
            <li className="hover:text-gray-400">Terms & Conditions</li>
          </ul>
        </div>
        <div className="mt-12 md:mt-2">
          <h3 className=" text-2xl font-semibold mb-2 mt-3  ">Oxford Company</h3>
          <ul className=" leading-8 text-lg cursor-pointer ">
            <li className="hover:text-gray-400">Meet Oxford Company</li>
            <li className="hover:text-gray-400">BLOG</li>
            <li className="hover:text-gray-400">Press</li>
            <li className="hover:text-gray-400">Reviews</li>
            <li className="hover:text-gray-400">Genuine Products in Stock</li>
            <li className="hover:text-gray-400">Partnership && Suppliers</li>
            <li className="hover:text-400gray-">Careers</li>
            <li className="hover:text-gray-400">Social</li>
          </ul>
          <div className="socials flex items-center cursor-pointer">
            <BsFacebook className=" mr-5 mt-5 mb-5 text-2xl hover:text-gray-400"/>
            <BsInstagram className=" m-5 text-2xl hover:text-gray-400"/>
            <BsTwitter className=" m-5 text-2xl hover:text-gray-400"/>
            <BsYoutube className=" m-5 text-2xl hover:text-gray-400"/>
            <BsGoogle className=" m-5 text-2xl hover:text-gray-400"/>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Footer;
