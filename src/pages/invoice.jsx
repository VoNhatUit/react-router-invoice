import { NavLink, Outlet } from "react-router-dom";

// import { invoiceData } from "../mock_data/invoice_data";
function Invoice(){

    <div className="flex">
        show invoice

        {/* <nav className="border-black border-r border-solid	p-2">
            {
                invoiceData.map(invoice => (
                    <NavLink
                        key={invoice.number}
                        to={`/invoice/${invoice.number}`}>
                            {invoice.name}
                        </NavLink>
                ))
            }
        </nav>

        <div className="p-2">
            <Outlet />
        </div> */}
    </div>
}
export default Invoice;