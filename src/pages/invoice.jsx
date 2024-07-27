import { NavLink, Outlet } from "react-router-dom";

import { invoiceData } from "../mock_data/invoice_data";
function Invoice(){

    return (
        <div className="flex">

        <nav className="border-black border-r border-solid	p-2">
            {
                invoiceData.map(invoice => (
                    <NavLink
                        key={invoice.number}
                        className='hover:text-blue-600 className="mt-2"'                      
                        to={`/invoice/${invoice.number}`}
                        style={({ isActive }) => {
                            return {
                              display: "block",
                              margin: "10px",
                              color: isActive ? "red" : "",
                            };
                          }}>
                            {invoice.name}
                        </NavLink>
                ))
            }
        </nav>

        <div className="p-2">
            <Outlet />
        </div>
    </div>
    )
    
}
export default Invoice;