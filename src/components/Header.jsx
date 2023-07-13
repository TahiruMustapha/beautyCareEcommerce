import React, { useState } from "react";
import bLogo from "../assets/bLogo.webp";
import { Link } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi";
import {
  BsCartFill,
  BsFillAirplaneFill,
  BsFillBagHeartFill,
} from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Dropdown } from "rsuite";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import "rsuite/dist/rsuite.min.css";
import { FaSearch } from "react-icons/fa";

const Header = ({
  cartVisible,
  productInCart,
  closeCart,
  visibility,
  openCart,
  openCartV,
  products,
  onProductRemove,
  onClosed,
  onQuantityChange,
}) => {

  const [showMenu, setShowMenu] = useState(false);
  const [showNav, setShowNav] = useState(false);
  // onClosed={() => setCartVisibility(false)}
  const handleShowmenu = () => {
    setShowMenu((prev) => !prev);
  };
  const [openNav, setOpenNav] = useState(false);
  const handleOpenNav = () => {
    setOpenNav((prev) => !prev);
  };
  const handleNav = () => {
    setShowNav((prev) => !prev);
  };
  return (
    <header className=" relative w-full h-fit  sm:h-[30vh] pb-2     z-50 bg-white">
      {/* DESKTOP */}
      <div className=" hidden topHeader md:flex md:items-center md:px-0  bg-[#80808010] md:w-full md:h-8 ">
        <p className=" hidden md:flex md:w-full  md:text-center md:justify-center  lg:flex lg:w-full  lg:text-center lg:justify-center">
          {" "}
          <span className=" m-1">
            <BsFillAirplaneFill />
          </span>{" "}
          Ghana deliveries in 2 to 4 business days{" "}
          <BsFillBagHeartFill className="m-1" /> Free and Fast Shipping for
          orders above $142.39
        </p>
      </div>

      <div className=" relative">
        <div className=" relative w-[90%] flex items-center justify-between  ml-auto mr-auto  lg:flex lg:items-center lg:h-full lg:justify-between lg:px-2 md:px-4">
          <div className=" text-white fixed md:relative top-0 left-0 p-3  h-16 z-[9999]  bg-[#444444] md:bg-[#fff] md:text-[#444]  md:w-full  md:ml-auto md:mr-auto md:mt-0 md:mb-0 w-full flex items-center justify-between  ">
            <Link to={"/"}>
              <div className="   w-full h-10 pt-2 ">
                <img src={bLogo} alt="img" className="h-full" />
              </div>
            </Link>
            <p
              className="flex items-center justify-center "
              onClick={handleNav}
            >
              {showNav ? (
                <AiOutlineClose className=" text-xl lg:hidden md:hidden" />
              ) : (
                <AiOutlineMenu className=" text-xl lg:hidden md:hidden" />
              )}
              <div className=" hidden md:flex lg:flex lg:items-center lg:gap-4 md:gap-7">
                <nav className=" md:flex  md:gap-6 text-base md:text-lg">
                  <Link to={""}>Home</Link>
                  <Link to={"menu"}>Menu</Link>
                  <Link to={"about"}>About</Link>
                  <Link to={"contact"}>Contact</Link>
                </nav>

                <div
                  onClick={() => openCartV(true)}
                  className="text-2xl text-slate-600 relative cursor-pointer"
                >
                  <Link to={""} className="text-[gray]">
                    <BsCartFill />
                  </Link>

                  {productInCart.length > 0 && (
                    <div className=" absolute bg-[orangered] w-3 h-3 rounded-full text-xs flex items-center text-white justify-center font-bold -top-1 -right-1 m-0">
                      {productInCart.length}
                    </div>
                  )}
                </div>
                <div className="cartInfo">
                  <div
                    className="modal fixed top-20 mt-2 left-[70%] right-0 bottom-0 w-[20%] h-fit bg-[#00000055] z-[9999]"
                    style={{
                      display: openCart ? "block" : "none",
                    }}
                  >
                    <div className="shoppingCart w-full h-full my-[2rem] mx-auto bg-[#eee] p-1 flex flex-col relative">
                      <div className="header flex bg-[#ccc] py-1 px-1 justify-between">
                        <h3>Shopping Cart</h3>
                        <button
                        
                          className="btn close-btn text-[#065a82]"
                          onClick={closeCart}
                        >
                          <AiFillCloseCircle size={20} />
                        </button>
                      </div>
                      <div className="  cart-products flex flex-col items-start py-[1rem] overflow-y-scroll px-0">
                        {products === 0 && (
                          <span className=" empty-text block text-center text-base  p-[1rem] m-auto">
                            Your Cart is currently empty
                          </span>
                        )}
                        {products.map((product) => (
                          <div
                            className="cart-product  flex flex-row justify-between items-center w-full bg-white py-1 px-1 border "
                            id={product.key}
                          >
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-[5rem]"
                            />
                            <div className="product-info  ">
                              <h3 className="font-[600] text-base">
                                {product.name}
                              </h3>

                              <span className="product-price">
                                ${product.price * product.count}
                              </span>
                            </div>
                            <select
                              className="count w-[70px] text-base outline-none"
                              value={product.count}
                              onChange={(event) => {
                                onQuantityChange(
                                  product.id,
                                  event.target.value
                                );
                              }}
                            >
                              {[...Array(10).keys()].map((number) => {
                                const num = number + 1;
                                return (
                                  <option value={num} key={num}>
                                    {num}
                                  </option>
                                );
                              })}
                            </select>
                            <button
                              className="btn remove-btn"
                              onClick={() => onProductRemove(product)}
                            >
                              {" "}
                              <RiDeleteBin6Line size={20} />
                            </button>
                          </div>
                        ))}
                        {products.length > 0 && (
                          <button 
                          onClick={() => openCartV(false)}
                            className="btn check-btn text-[1rem] py-2 px-10
             text-[#fff] self-center my-[1rem] mx-0 bg-[#065a82] hover:bg-[#065b82b8]"
                          >
                            <Link
                              to={"cart"}
                              className="text-white  py-2 px-10 no-underline hover:text-white hover:no-underline"
                            >
                              Go To Cart
                            </Link>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" text-slate-600" onClick={handleShowmenu}>
                  <div className="text-3xl cursor-pointer">
                    <HiOutlineUserCircle />
                  </div>
                  {showMenu && (
                    <div className=" absolute right-2 bg-white py-2 px-2 shadow drop-shadow">
                      <p>
                        <Link
                          to={"newProduct"}
                          className=" whitespace-nowrap cursor-pointer"
                        >
                          New Product
                        </Link>
                      </p>
                      <p>
                        <Link
                          to={"login"}
                          className=" whitespace-nowrap cursor-pointer"
                        >
                          Login
                        </Link>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </p>
          </div>

          <div
            className={
              showNav
                ? " mobile fixed left-0 z-[9999]  w-[90%] ease-in-out duration-500  top-20 h-[100vh] md:hidden lg:hidden xl:hidden bg-[black]"
                : "fixed left-[-100%]"
            }
          >
            <nav className=" flex flex-col mt-5 text-white ml-5 leading-10 md:hidden lg:hidden xl:hidden gap-4 md:gap-6 text-base md:text-lg">
              <Link
                to={"/"}
                className=" cursor-pointer border-b-2 w-[90%] text-[#fff]"
              >
                Home
              </Link>
              <Link
                to={"menu"}
                className="cursor-pointer border-b-2 w-[90%] text-[#fff]"
              >
                Menu
              </Link>
              <Link
                to={"about"}
                className="cursor-pointer border-b-2 w-[90%] text-[#fff]"
              >
                About
              </Link>
              <Link
                to={"contact"}
                className="cursor-pointer border-b-2 w-[90%] text-[#fff]"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
        <div className=" ease-in-out duration-500 sm:hidden flex  absolute top-[3.8rem] left-2.5 text-[#444] w-[95%] m-auto items-center justify-between p-3 bg-[#80808071] h-10">
          <AiOutlineMenu
            onClick={handleOpenNav}
            className="  text-base  cursor-pointer  h-10 "
          />
          <div className="cartInfo">
                  <div
                    className="modal fixed top-60 mt-2 ml-auto mr-auto left-0 right-0 bottom-0 w-[80%] h-[100vh] bg-[#00000055] z-[9999]"
                    style={{
                      display: openCart ? "block" : "none",
                    }}
                  >
                    <div className="shoppingCart w-full h-full my-[2rem] mx-auto bg-[#eee] p-1 flex flex-col relative">
                      <div className="header flex bg-[#ccc] py-1 px-1 justify-between">
                        <h3 className="text-sm">Shopping Cart</h3>
                        <button
                        
                          className="btn close-btn text-[#065a82]"
                          onClick={closeCart}
                        >
                          <AiFillCloseCircle size={20} />
                        </button>
                      </div>
                      <div className="  cart-products flex flex-col items-start py-[1rem] overflow-y-scroll px-0">
                        {products === 0 && (
                          <span className=" empty-text block text-center text-base  p-[1rem] m-auto">
                            Your Cart is currently empty
                          </span>
                        )}
                        {products.map((product) => (
                          <div
                            className="cart-product  flex flex-row justify-between items-center w-full bg-white py-1 px-1 border "
                            id={product.key}
                          >
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-[3rem]"
                            />
                            <div className="product-info  ">
                              <h3 className="font-[600] text-sm">
                                {product.name}
                              </h3>

                              <span className="product-price">
                                ${product.price * product.count}
                              </span>
                            </div>
                            <select
                              className="count w-[70px] text-base outline-none"
                              value={product.count}
                              onChange={(event) => {
                                onQuantityChange(
                                  product.id,
                                  event.target.value
                                );
                              }}
                            >
                              {[...Array(10).keys()].map((number) => {
                                const num = number + 1;
                                return (
                                  <option value={num} key={num}>
                                    {num}
                                  </option>
                                );
                              })}
                            </select>
                            <button
                              className="btn remove-btn"
                              onClick={() => onProductRemove(product)}
                            >
                              {" "}
                              <RiDeleteBin6Line size={15} />
                            </button>
                          </div>
                        ))}
                        {products.length > 0 && (
                          <button 
                          onClick={() => openCartV(false)}
                            className="btn check-btn text-[.6rem] py-1 px-5
             text-[#fff] self-center my-[.7rem] mx-0 bg-[#065a82] hover:bg-[#065b82b8]"
                          >
                            <Link
                              to={"cart"}
                              className="text-white   py-1 px-5 no-underline hover:text-white hover:no-underline"
                            >
                              Go To Cart
                            </Link>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

          <BsCartFill  onClick={() => openCartV(true)} className=" text-base cursor-pointer" />
          {productInCart.length > 0 && (
                    <div className=" absolute bg-[orangered] w-3 h-3 rounded-full text-xs flex items-center text-white justify-center font-bold top-2 right-[11.8rem] m-0">
                      {productInCart.length}
                    </div>
                  )}
          <HiOutlineUserCircle className=" text-base cursor-pointer" />
          <FaSearch className=" text-base cursor-pointer" />
        </div>
        <div className=" hidden     lg:grid lg:grid-cols-3   mb-4 mt-10 md:mt-2 w-[90%] mr-auto ml-auto">
          <p className="bg-[#80808010] p-1 font-medium md:p-2 md:font-bold cursor-pointer md:flex-[3] md:m-2 md:text-center">
            BRAND OF THE MONTH - HELLIOCARE 25% 0FF
          </p>
          <p className="bg-[#80808010] p-1 font-medium md:p-2 md:font-bold cursor-pointer md:flex-[3] md:m-2 md:text-center">
            HAPPY DAYS -Up to 50% OFF
          </p>
          <p className="bg-[#80808010] p-1 font-medium md:p-2 md:font-bold cursor-pointer md:flex-[3] md:m-2 md:text-center">
            WEEKLY DEALS Up to 40% OFF
          </p>
        </div>
        <div className=" sm:hidden lg:hidden  flex items-center justify-between   mb-4 mt-32 md:mt-2 w-[95%] mr-auto ml-auto">
          <p className="bg-[#80808010] p-1 text-xs m-1   font-semibold md:p-2  md:font-bold cursor-pointer md:flex-[3] md:m-2 md:text-center">
            BRAND OF THE MONTH
          </p>
          <p className="bg-[#80808010] p-1 text-xs  m-1  font-semibold md:p-2 md:font-bold cursor-pointer md:flex-[3] md:m-2 md:text-center">
            HAPPY DAYS -Up <br /> to 50% OFF
          </p>
          <p className="bg-[#80808010] p-1 text-xs   m-1  font-semibold md:p-2 md:font-bold cursor-pointer md:flex-[3] md:m-2 md:text-center">
            WEEKLY DEALS
          </p>
        </div>
        <hr className="w-[95%] ml-auto mr-auto mt-16 lg:w-[95%]    sm:w-[90%] sm:m-auto" />
        <div className="hidden  md:w-[90%] md:m-auto lg:w-[95%]  md:justify-center   md:grid md:grid-cols-5 lg:grid lg:grid-cols-10  xl:grid xl:grid-cols-10  xl:mt-0    h-fit pb-2 lg:pb-0  lg:ml-auto lg:mr-auto font-extrabold ">
          <Dropdown
            title="FEATURES"
            className=" w-[10rem]   py-3 pl-2 mt-3 lg:mt-0 lg:mr-2 lg:py-3 lg:pl-0 lg:pr-0 "
          >
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] o-underline ml-0">
                Shampoo & Waterless <br /> Skincare
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] no-underline ml-0">
                Best Sellers
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] no-underline ml-0">
                Brands
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] no-underline ml-0">
                Curated Collections
              </Link>
            </Dropdown.Item>
          </Dropdown>

          <Dropdown
            title="SKINCARE"
            className="w-[10rem]  py-3 pl-2 mt-3 lg:mt-0 lg:mr-2 lg:py-3 lg:pl-0 lg:pr-0 "
          >
            <Dropdown.Item>
              <Link
                to={"skincare/acne"}
                className="text-[#444] o-underline ml-0"
              >
                Acne
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] no-underline ml-0">
                Ampolis
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] no-underline ml-0">
                Anti-Aging
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] no-underline ml-0">
                Cleansers
              </Link>
            </Dropdown.Item>
          </Dropdown>

          <Dropdown
            title="BODY"
            className=" w-[10rem]   py-3 pl-2 mt-3 lg:mt-0 lg:mr-2 lg:py-3 lg:pl-0 lg:pr-0 "
          >
            <Dropdown.Item>
              <Link
                to={"body/bodyHair"}
                className="text-[#444] no-underline ml-0"
              >
                Body Hair
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link
                to={"body/body-lotion"}
                className="text-[#444] no-underline ml-0"
              >
                Body Lotion
              </Link>
            </Dropdown.Item>
          </Dropdown>

          <Dropdown
            title="SUNSCREEN"
            className=" w-[10rem]   py-3 pl-2 mt-3 lg:mt-0 lg:mr-2 lg:py-3 lg:pl-0 lg:pr-0 "
          >
            <Dropdown.Item>
              <Link
                to={"suncreen/darkspot"}
                className="text-[#444] o-underline ml-0"
              >
                Darkspot Suncreen
              </Link>
            </Dropdown.Item>
            <Dropdown.Item></Dropdown.Item>
            <Dropdown.Item>
              <Link
                to={"suncreen/face Suncreen"}
                className="text-[#444] no-underline ml-0"
              >
                Face Suncreen
              </Link>
            </Dropdown.Item>
          </Dropdown>

          <Dropdown
            title="HAIR"
            className=" w-[10rem]   py-3 pl-2 mt-3 lg:mt-0 lg:mr-2 lg:py-3 lg:pl-0 lg:pr-0 "
          >
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] o-underline ml-0">
                Ache
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] no-underline ml-0">
                Ampolis
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] no-underline ml-0">
                Anti-Aging
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] no-underline ml-0">
                Cleansers
              </Link>
            </Dropdown.Item>
          </Dropdown>

          <Dropdown
            title="MAKEUP"
            className=" w-[10rem]   py-3 pl-2 mt-3 lg:mt-0 lg:mr-2 lg:py-3 lg:pl-0 lg:pr-0 "
          >
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] o-underline ml-0">
                Ache
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] no-underline ml-0">
                Ampolis
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] no-underline ml-0">
                Anti-Aging
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] no-underline ml-0">
                Cleansers
              </Link>
            </Dropdown.Item>
          </Dropdown>

          <Dropdown
            title="ACCESSORIES"
            className=" w-[10rem]   py-3 pl-2 mt-3 lg:mt-0 lg:mr-2 lg:py-3 lg:pl-0 lg:pr-0 "
          >
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] o-underline ml-0">
                Ache
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] no-underline ml-0">
                Ampolis
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] no-underline ml-0">
                Anti-Aging
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] no-underline ml-0">
                Cleansers
              </Link>
            </Dropdown.Item>
          </Dropdown>

          <Dropdown
            title="MEN"
            className=" w-[10rem]   py-3 pl-2 mt-3 lg:mt-0 lg:mr-2 lg:py-3 lg:pl-0 lg:pr-0 "
          >
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] o-underline ml-0">
                Ache
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] no-underline ml-0">
                Ampolis
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] no-underline ml-0">
                Anti-Aging
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] no-underline ml-0">
                Cleansers
              </Link>
            </Dropdown.Item>
          </Dropdown>

          <Dropdown
            title="MOM & BABY"
            className=" w-[10rem]   py-3 pl-2 mt-3 lg:mt-0 lg:mr-2 lg:py-3 lg:pl-0 lg:pr-0 "
          >
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] o-underline ml-0">
                Ache
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] no-underline ml-0">
                Ampolis
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] no-underline ml-0">
                Anti-Aging
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] no-underline ml-0">
                Cleansers
              </Link>
            </Dropdown.Item>
          </Dropdown>

          <Dropdown
            title="OFFERS"
            className=" w-[10rem]   py-3 pl-2 mt-3 lg:mt-0 lg:mr-2 lg:py-3 lg:pl-0 lg:pr-0 "
          >
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] o-underline ml-0">
                Ache
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] no-underline ml-0">
                Ampolis
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] no-underline ml-0">
                Anti-Aging
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] no-underline ml-0">
                Cleansers
              </Link>
            </Dropdown.Item>
          </Dropdown>
        </div>
        <div
          className={
            openNav
              ? "shadow border-b-2 mt-2 mb-0 border-t-2 ease-in-out duration-500   sm:hidden lg:hidden  bg-[#8080804b]  grid grid-cols-2  w-[95%] ml-auto mr-auto  justify-center    h-fit pb-2  font-extrabold "
              : " hidden "
          }
        >
          <Dropdown
            title="FEATURES"
            className=" w-[10rem]   py-3 pl-2 mt-3 lg:mt-0 lg:mr-2 lg:py-3 lg:pl-0 lg:pr-0 "
          >
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] o-underline ml-0">
                Shampoo & Waterless <br /> Skincare
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] no-underline ml-0">
                Best Sellers
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] no-underline ml-0">
                Brands
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] no-underline ml-0">
                Curated Collections
              </Link>
            </Dropdown.Item>
          </Dropdown>

          <Dropdown
            title="SKINCARE"
            className="w-[10rem]  py-3 pl-2 mt-3 lg:mt-0 lg:mr-2 lg:py-3 lg:pl-0 lg:pr-0 "
          >
            <Dropdown.Item>
              <Link
                to={"skincare/acne"}
                className="text-[#444] o-underline ml-0"
              >
                Ache
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] no-underline ml-0">
                Ampolis
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] no-underline ml-0">
                Anti-Aging
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] no-underline ml-0">
                Cleansers
              </Link>
            </Dropdown.Item>
          </Dropdown>

          <Dropdown
            title="BODY"
            className=" w-[10rem]   py-3 pl-2 mt-3 lg:mt-0 lg:mr-2 lg:py-3 lg:pl-0 lg:pr-0 "
          >
            <Dropdown.Item>
              <Link
                to={"/body/bodyHair"}
                className="text-[#444] o-underline ml-0"
              >
                Body Hair
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link
                to={"body/body-lotion"}
                className="text-[#444] no-underline ml-0"
              >
                Body Lotion{" "}
              </Link>
            </Dropdown.Item>
          </Dropdown>

          <Dropdown
            title="SUNSCREEN"
            className=" w-[10rem]   py-3 pl-2 mt-3 lg:mt-0 lg:mr-2 lg:py-3 lg:pl-0 lg:pr-0 "
          >
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] o-underline ml-0">
                Darkspot Suncreen
              </Link>
            </Dropdown.Item>
            <Dropdown.Item></Dropdown.Item>
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] no-underline ml-0">
                Face Suncreen
              </Link>
            </Dropdown.Item>
          </Dropdown>

          <Dropdown
            title="HAIR"
            className=" w-[10rem]   py-3 pl-2 mt-3 lg:mt-0 lg:mr-2 lg:py-3 lg:pl-0 lg:pr-0 "
          >
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] o-underline ml-0">
                Ache
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] no-underline ml-0">
                Ampolis
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] no-underline ml-0">
                Anti-Aging
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] no-underline ml-0">
                Cleansers
              </Link>
            </Dropdown.Item>
          </Dropdown>

          <Dropdown
            title="MAKEUP"
            className=" w-[10rem]   py-3 pl-2 mt-3 lg:mt-0 lg:mr-2 lg:py-3 lg:pl-0 lg:pr-0 "
          >
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] o-underline ml-0">
                Ache
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] no-underline ml-0">
                Ampolis
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] no-underline ml-0">
                Anti-Aging
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] no-underline ml-0">
                Cleansers
              </Link>
            </Dropdown.Item>
          </Dropdown>

          <Dropdown
            title="ACCESSORIES"
            className=" w-[10rem]   py-3 pl-2 mt-3 lg:mt-0 lg:mr-2 lg:py-3 lg:pl-0 lg:pr-0 "
          >
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] o-underline ml-0">
                Ache
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] no-underline ml-0">
                Ampolis
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] no-underline ml-0">
                Anti-Aging
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] no-underline ml-0">
                Cleansers
              </Link>
            </Dropdown.Item>
          </Dropdown>

          <Dropdown
            title="MEN"
            className=" w-[10rem]   py-3 pl-2 mt-3 lg:mt-0 lg:mr-2 lg:py-3 lg:pl-0 lg:pr-0 "
          >
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] o-underline ml-0">
                Ache
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] no-underline ml-0">
                Ampolis
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] no-underline ml-0">
                Anti-Aging
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] no-underline ml-0">
                Cleansers
              </Link>
            </Dropdown.Item>
          </Dropdown>

          <Dropdown
            title="MOM & BABY"
            className=" w-[10rem]   py-3 pl-2 mt-3 lg:mt-0 lg:mr-2 lg:py-3 lg:pl-0 lg:pr-0 "
          >
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] o-underline ml-0">
                Ache
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] no-underline ml-0">
                Ampolis
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] no-underline ml-0">
                Anti-Aging
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] no-underline ml-0">
                Cleansers
              </Link>
            </Dropdown.Item>
          </Dropdown>

          <Dropdown
            title="OFFERS"
            className=" w-[10rem]   py-3 pl-2 mt-3 lg:mt-0 lg:mr-2 lg:py-3 lg:pl-0 lg:pr-0 "
          >
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] o-underline ml-0">
                Ache
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] no-underline ml-0">
                Ampolis
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] no-underline ml-0">
                Anti-Aging
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"shampoo"} className="text-[#444] no-underline ml-0">
                Cleansers
              </Link>
            </Dropdown.Item>
          </Dropdown>
        </div>

        <hr className="w-[95%] mt-2 ml-auto mr-auto xl:mt-0 mb-0" />
      </div>

      {/* MOBILE */}
    </header>
  );
};

export default Header;
