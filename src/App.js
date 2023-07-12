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
import Login from "./auth/login/Login"
import Signup from "./auth/signup/Signup"
import Authentication , {action as authAction} from "./components/Authentication";
import {action as LogoutAction} from "./components/Logout"
import {checkAuthLoader, tokenLoader} from "./components/util/Auth"

function App() {
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
     setLoading(true);
     setTimeout(() => {
      setLoading(false);
     }, 3400);
  },[])

  
  const router = createBrowserRouter([
    { path: "/", element: <Home /> ,id:'root'},
    { path: "/viewallcustomers", element: <Viewallcustomers /> },
    { path: "/transactions", element: <Transactions /> },
    // { path: "/auth", element: <Authentication/>,action:authAction},
    { path:"/login",element: <Login/>},
    { path:"/signup",element: <Signup/>},
    { path: "/transfermoney", element: <TranferMoney /> },
    { path: "/about", element: <About /> },
    { path: "/logout", action:LogoutAction},
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
