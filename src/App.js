import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import {
  createBrowserRouter,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import Viewallcustomers from "./components/Viewallcustomers";
import Navbar from "./components/Navbar";
import Transactions from "./components/Transactions";
import TranferMoney from "./components/TranferMoney";
import About from "./components/About";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/viewallcustomers", element: <Viewallcustomers /> },
    { path: "/transactions", element: <Transactions /> },
    { path: "/transfermoney", element: <TranferMoney /> },
    { path: "/about", element: <About /> },
  ]);

  return (
    <div className="App">
      <div>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
