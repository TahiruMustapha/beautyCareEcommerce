//import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Shampoo from "./select/Shampoo";
import Acne from "./select/Acne";
import Body from "./select/Body";
import Lotion from "./select/Lotion";
import Darkspot from "./select/Darkspot";
import FaceSuncreen from "./select/FaceSuncreen";
import { useState, useEffect } from "react";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
function App() {
  const [cartVisibility, setCartVisibility] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const [productInCart, setproductInCart] = useState(
    JSON.parse(localStorage.getItem("shopping-cart")) || []
  );
  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(productInCart));
  }, [productInCart]);
  const addProductToCart = (product) => {
    const newProduct = {
      ...product,
      count: 1,
    };
    setproductInCart([...productInCart, newProduct]);
  };
  const onQuantityChange = (productId, count) => {
    setproductInCart((oldState) => {
      const productIndex = oldState.findIndex((item) => item.id === productId);
      if (productIndex !== -1) {
        oldState[productIndex].count = count;
      }
      return [...oldState];
    });
  };
  const onProductRemove = (product) => {
    setproductInCart((oldState) => {
      const productIndex = oldState.findIndex((item) => item.id === product.id);
      if (productIndex !== -1) {
        oldState.splice(productIndex, 1);
      }
      return [...oldState];
    });
  };
  return (
    <div>
      <Header cartVisible={setCartVisibility} productInCart={productInCart} 
      visibility={cartVisibility}
      products={productInCart}
      onClosed={() => setCartVisibility(false)}
      closeCart = {()=>setOpenCart(false)}
      openCartV = {setOpenCart}
      openCart={openCart}
      onQuantityChange={onQuantityChange}
      onProductRemove={onProductRemove}
      
      />
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route
          path="/cart"
          exact
          element={
            <Cart
              visibility={cartVisibility}
              products={productInCart}
              onClosed={() => setCartVisibility(false)}
              onQuantityChange={onQuantityChange}
              onProductRemove={onProductRemove}
              openCartV = {setOpenCart}
            />
          }
        />
        <Route path="/cart" exact element={<Cart />} />
        <Route
          path="/shampoo"
          exact
          element={<Shampoo addToCart={addProductToCart} />}
        />
        <Route
          path="/skincare/acne"
          exact
          element={<Acne addToCart={addProductToCart} />}
        />
        <Route
          path="/body/bodyHair"
          exact
          element={<Body addToCart={addProductToCart} />}
        />
        <Route
          path="/body/body-lotion"
          exact
          element={<Lotion addToCart={addProductToCart} />}
        />
        <Route
          path="/suncreen/darkspot"
          exact
          element={<Darkspot addToCart={addProductToCart} />}
        />
        <Route
          path="/suncreen/face Suncreen"
          exact
          element={<FaceSuncreen addToCart={addProductToCart} />}
        />
        <Route
          path="/cart/checkout"
          exact
          element={<Checkout   products={productInCart}/>}
        />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
