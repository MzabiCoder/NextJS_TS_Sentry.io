import { Ticket } from "@/generated/prisma";
import { getPriorityClass } from "@/utils/sentery";
import Link from "next/link";

interface TicketProps {
    ticket: Ticket
}
const TicketItem = ({ ticket }: TicketProps) => {

    const isClosed = ticket.status === 'Closed'

    return <>  <div key={ticket.id} className={`${isClosed ? 'opacity-50' : ''} flex justify-between items-center bg-white rounded-lg border border-gray-200 p-6`}>
        <div className="text-xl font-semibold text-blue-600">
            {ticket.subject}
        </div>
        <div className="text-right space-y-2">
            <div className="text-sm text-gray-500">
                Priority: <span className={getPriorityClass(ticket.priority)}>
                    {ticket.priority}
                </span>
            </div>
            <Link className={`${isClosed ? 'pointer-events-none bg-gray-600' : 'bg-blue-600'} inline-block mt-2  text-white text-sm px-3 py-1 rounded hover:bg:bg-blue-700 transition text-center`} href={`/tickets/${ticket.id}`} >View Ticket</Link>
        </div>
    </div></>
}

export default TicketItem;