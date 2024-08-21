
import { useState } from "react"
import Navbar from "./companes/Navbar"
import "./index.css"
import HomeScreen from "./screen/HomeScreen"
import ProductsScreen from "./screen/ProductsScreen";
import AboutUsScreen from "./screen/AboutUsScreen";
import HooksScreen from "./screen/HooksScreen";

function App() {
  const [pageRout,setPage]=useState<string>("home");
  

  return (
    <main className="min-h-screen w-full flex flex-col ">
     <Navbar setPage={setPage}/>
     {pageRout=="home"&& <HomeScreen int={0} />}
     {pageRout=="product"&& <ProductsScreen  />}
     {pageRout=="about"&& <AboutUsScreen  />}
     {pageRout=="HooksScreen"&& <HooksScreen  />}
     
     </main>
  )
}

export default App
