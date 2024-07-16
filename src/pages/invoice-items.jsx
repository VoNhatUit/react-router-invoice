import { useParams } from "react-router-dom";
import { invoiceData } from "../mock_data/invoice_data";

 function InvoiceItems(){
    const { invoiceId} = useParams()
    const invoiceIndex = invoiceData.find(invoice => invoice.id === Number(invoiceId))

    return (
        <div>
            <h2 className="text-[20px] font-bold">Total due: {invoiceIndex.amount}</h2>
            <p>{invoiceIndex.name}: {invoiceIndex.number} </p>
            <p>Due date: {invoiceIndex.due} </p>
        </div>
    )
}
export default InvoiceItems