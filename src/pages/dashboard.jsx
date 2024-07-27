import {
    NavLink,
    Route,
    Routes,
    useNavigate,
  } from "react-router-dom";
  
  import Home from "./home";
  import Contact from "./contact";
  import Invoice from "./invoice";
  import InvoiceItems from "./invoice-items";
  
  function Dashboard() {
    
      const navigate = useNavigate();
  
      function handleNavigate(){
          navigate("/home", { replace: true });
      }
  
      return (
          <div className="w-8/12 mx-auto">
              <h1 className='text-[30px] font-bold text-center text-blue-600'> Book keeper </h1>
              <div className="border-b-2 border-black border-solid	pb-2">
              <nav className="m-1">
                  <NavLink
                          to='/home'
                          className={value => `
                              nav-link-${!value.isActive ? "unselected" : "selected"}                        
                              hover:text-red-500
                            `}>              
                              Home
                  </NavLink> |
  
                  <NavLink 
                          to="/contact"
                          className={value => `
                              nav-link-${!value.isActive ? "unselected" : "selected"}                        
                              hover:text-red-500
                            `}>              
                              Contact
                  </NavLink> |
                  
                  <NavLink 
                          to="/invoice"
                          className={value => `
                              nav-link-${!value.isActive ? "unselected" : "selected"}                        
                              hover:text-red-500
                            `}>              
                              Invoice
                  </NavLink>
              </nav>
              <br/>
  
              <button className='mx-4 mb-1 bg-slate-200 rounded border-solid p-1 hover:text-white hover:bg-purple-900' 
                      type="button" 
                      onClick={handleNavigate}>
                  Test navigate home
              </button>
              </div>
  
              <Routes>
                  <Route path="home" element={<Home/>}/>
                  <Route path="contact" element={<Contact/>}/>
  
                  <Route path="invoice" element={<Invoice/>}>
                      <Route index element={<div className="mt-2 mx-4">Select an invoice</div>} />
                      <Route path=":invoiceId" element={<InvoiceItems />} />
                  </Route>
              </Routes>
          </div>
    
      )
    
  }
  
  export default Dashboard