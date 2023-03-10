import "./App.css";
import React,{useState,useEffect} from "react"
import Home from "./components/Home";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

import Viewallcustomers from "./components/Viewallcustomers";
import Transactions from "./components/Transactions";
import TranferMoney from "./components/TranferMoney";
import About from "./components/About";
import PreLoader from "./components/PreLoader";

function App() {
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
     setLoading(true);
     setTimeout(() => {
      setLoading(false);
     }, 3400);
  },[])

  
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/viewallcustomers", element: <Viewallcustomers /> },
    { path: "/transactions", element: <Transactions /> },
    { path: "/transfermoney", element: <TranferMoney /> },
    { path: "/about", element: <About /> },
  ]);

  return (
    <div className="App">
      {
        loading?
      <PreLoader/>
        :
      
      
      <div>
        <RouterProvider router={router} />
      </div>
}
    </div>
  );
}


// function App() {
//   const obj={name:'om',lname:'lokhande'}
//   return(
//     <div className="App">
//    <p>{obj.lname}</p>
//    <p>hello</p>
//     </div>
//   )
// }

export default App;
