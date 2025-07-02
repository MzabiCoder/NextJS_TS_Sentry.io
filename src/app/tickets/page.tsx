import { getTickets } from "@/action/ticket.actions";
import { logEvent } from "@/utils/sentery";
import Link from "next/link";
import { Ticket } from "../../../type/type";
import { getPriorityClass } from "@/utils/sentery";

const TicketsPage = async () => {
    const tickets = await getTickets();

    console.log(tickets)

    return <div className="min-h-scree bg-blue-50 p-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-8 text-center">Support Tickets</h1>
        {tickets.length === 0 ? (
            <p className="text-center text-gray-600">No Tickets !!</p>
        ) : (
            <div className="space-y-4 max-w-3xl mx-auto">
                {tickets && tickets.map(ticket => (
                    <div key={ticket.id} className="flex justify-between items-center bg-white rounded-lg border border-gray-200 p-6">
                        <div className="text-xl font-semibold text-blue-600">
                            {ticket.subject}
                        </div>
                        <div className="text-right space-y-2">
                            <div className="text-sm text-gray-500">
                                Priority: <span className={getPriorityClass(ticket.priority)}>
                                    {ticket.priority}
                                </span>
                            </div>
                            <Link className="inline-block mt-2 bg-blue-600 text-white text-sm px-3 py-1 rounded hover:bg:bg-blue-700 transition text-center" href={`/tickets/${ticket.id}`} >View Ticket</Link>
                        </div>
                    </div>
                ))}
            </div>
        )}
    </div>
}

export default TicketsPage;