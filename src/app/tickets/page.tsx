import { getTickets } from "@/action/ticket.actions";
import { logEvent } from "@/utils/sentery";
import Link from "next/link";
import { getPriorityClass } from "@/utils/sentery";
import { getCurrentUser } from "../../../lib/current-user";
import { redirect } from "next/navigation";
import TicketItem from "@/compoemnts/TicketItem";
import { Ticket } from "@/generated/prisma";

const TicketsPage = async () => {
    const user = await getCurrentUser();

    if (!user) {
        redirect('/login')
    }
    const tickets: Ticket[] = await getTickets();

    return <div className="min-h-scree bg-blue-50 p-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-8 text-center">Support Tickets</h1>
        {tickets.length === 0 ? (
            <p className="text-center text-gray-600">No Tickets !!</p>
        ) : (
            <div className="space-y-4 max-w-3xl mx-auto">
                {tickets && tickets.map(ticket => (
                    <TicketItem key={ticket.id} ticket={ticket} />
                ))}
            </div>
        )}
    </div>
}

export default TicketsPage;