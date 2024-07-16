import {
    Link,
    NavLink,
    Route,
    Routes,
    useNavigate,
  } from "react-router-dom";

  import Home from "./home";
  import Contact from "./contact";
  import Invoice from "./invoice";
  import InvoiceItems from "./invoice-items";

function Dashboard(){
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
                >
                    Home
                </NavLink>
                <Link to="/contact">Contact</Link> |
                <Link to="/invoice">Invoice</Link>
            </nav>
            <br/>
            <button className='bg-slate-300 rounded border-solid p-1' 
                    type="button" 
                    onClick={handleNavigate}>
                Test navigate home
            </button>
            </div>

            <Routes>
                <Route path='home' element={<Home/>}/>
                <Route path='contact' element={<Contact/>}/>
                <Route path="invoice" element={<Invoice/>}>
                    <Route index element={<div>Select an invoice</div>} />
                    <Route path=":invoiceId" element={<InvoiceItems />} />
                </Route>

            </Routes>
        </div>
  
    )
  }
  export default Dashboard