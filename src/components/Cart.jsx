import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
const Cart = ({
  visibility,
  products,
  onProductRemove,
  onClosed,
  onQuantityChange,
  openCartV,
}) => {
  return (
    <div
      className="modal w-[95%] m-auto h-fit bg-[#00000055] z-[9999]"
      style={{
        display: openCartV ? "block" : "none",
      }}
    >
      <div className="shoppingCart w-full h-full my-[.7rem] mx-auto bg-[#eee] p-1 flex flex-col relative">
        <div className="header flex bg-[#ccc] py-5 px-10 justify-between">
          <h3>Shopping Cart</h3>
          {/* <button className="btn close-btn text-[#065a82]" onClick={onClosed}>
            <AiFillCloseCircle size={30} />
          </button> */}
        </div>
        <div className="cart-products flex flex-col items-start py-[1rem] overflow-y-scroll px-0">
          {products === 0 && (
            <span className="empty-text block text-center text-base  p-[2rem] m-auto">
              Your Cart is currently empty
            </span>
          )}
          {products.map((product) => (
            <div
              className="cart-product flex flex-col items-center w-full md:flex md:flex-row md:justify-between md:items-center md:w-full bg-white md:py-1 md:px-10 border "
              id={product.key}
            >
              <img
                src={product.image}
                alt={product.name}
                className= "w-[10rem]  md:w-[12rem]"
              />
              {/* <div className="  sm:hidden md:hidden">
              <div className="product-info basis-[50%]">
                <h3 className="font-[600] text-[1rem]">{product.name}</h3>

                <span className="product-price">${product.price * product.count}</span>
              </div>
              <select
                className="count w-[70px] text-[1rem] outline-none"
                value={product.count}
                onChange={(event) => {
                  onQuantityChange(product.id , event.target.value);
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
              </div> */}
              <div className=" text-center product-info basis-[50%]">
                <h3 className="font-[600] text-[1rem]">{product.name}</h3>

                <span className="product-price text-base">${product.price * product.count}</span>
              </div>
              <select 
                className=" hidden count w-[70px] text-[1rem] outline-none"
                value={product.count}
                onChange={(event) => {
                  onQuantityChange(product.id , event.target.value);
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
                className="btn hidden remove-btn"
                onClick={() => onProductRemove(product)}
              >
                {" "}
                <RiDeleteBin6Line size={20} />
              </button>
              <div className=" flex items-center mb-4 mt-2  sm:hidden md:hidden">
              <select 
                className=" count w-[70px] text-[1rem] outline-none"
                value={product.count}
                onChange={(event) => {
                  onQuantityChange(product.id , event.target.value);
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
                className="btn remove-btn ml-2"
                onClick={() => onProductRemove(product)}
              >
                {" "}
                <RiDeleteBin6Line size={20} />
              </button>
              </div>
            </div>
          ))}
          {products.length > 0 && (
            <button className="btn check-btn text-[1rem] py-5 px-20
             text-[#fff] self-center mt-4 mx-0 bg-[#065a82]">
              Proceed To Checkout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
