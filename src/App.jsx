import {
  Link,
  NavLink,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

import Home from "./pages/home";
import Contact from "./pages/contact";
import Invoice from "./pages/invoice";
import InvoiceItems from "./pages/invoice-items";

function App() {
  
    const navigate = useNavigate();

    function handleNavigate(){
        navigate("/home", { replace: true });
    }

    return (
        <div className="w-8/12 mx-auto">
            <h1 className='text-[30px] font-bold text-center'> Book keeper </h1>
            <div className="border-b-2 border-black border-solid	pb-2">
            <nav className="m-1">
                <NavLink
                    to='/home'
                    className={value =>
                        "nav-link-" + (!value.isActive ? "unselected" : "selected")
                      }
                >
                    Home
                </NavLink>

                <NavLink to="/contact"
                        className={value =>
                            "nav-link-" + (!value.isActive ? "unselected" : "selected")
                        }>
                            Contact</NavLink> |
                <NavLink to="/invoice"className={value =>
                        "nav-link-" + (!value.isActive ? "unselected" : "selected")
                      }
                      >Invoice</NavLink>
            </nav>
            <br/>

            <button className='bg-slate-300 rounded border-solid p-1' 
                    type="button" 
                    onClick={handleNavigate}>
                Test navigate home
            </button>
            </div>

            <Routes>
                <Route path="home" element={<Home/>}/>
                <Route path="contact" element={<Contact/>}/>

                <Route path="/invoice" element={<Invoice/>}>
                    <Route index element={<div>Select an invoice</div>} />
                    <Route path="" element={<InvoiceItems />} />
                </Route>
            </Routes>
        </div>
  
    )
  
}

export default App
