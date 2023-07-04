//import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import {  Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Shampoo from "./select/Shampoo";

function App() {
  return (
   
     <div>
      <Header/>
      <Routes>
        <Route  path="/" exact ={true} element={<Home/>}/> 
        <Route  path="/about" exact  element={<About/>}/>  
        <Route  path="/shampoo" exact  element={<Shampoo/>}/>  
      </Routes>
        <Footer/>  
        </div>
    
       
  );
}

export default App;
