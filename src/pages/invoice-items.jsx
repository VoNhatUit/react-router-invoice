import { useParams } from "react-router-dom";
import { invoiceData } from "../mock_data/invoice_data";
 function InvoiceItems(){
    const { invoiceId } = useParams()
    const invoice = invoiceData.find(
        (invoice) => invoice.number === Number(invoiceId))
    if (!invoice) {
            return <div>Invoice not found</div>; // or some other fallback behavior
    }
        
    return (
        <div className="className=mt-2">
           
                        <h2 className="text-[20px] font-bold">Total due: {invoice.amount}</h2>
                        <p>{invoice.name} - ID:{invoice.number} </p>
                        <p>Due date: {invoice.due} </p>
                  
           

           
        </div>
    )
}
export default InvoiceItems