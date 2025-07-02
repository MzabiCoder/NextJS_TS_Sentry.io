
import NewTicketForm2 from './ticket-form';
import { redirect } from 'next/navigation';
import { getCurrentUser } from '../../../../lib/current-user';
import { toast } from 'sonner';

const user = await getCurrentUser();

if (!user) {
    toast.success('Ticket done !!')
    redirect('/login')
}

const NewTicketForm = () => <div className='min-h-screen bg-blue-50 flex items-center justify-center px-4'>
    <NewTicketForm2 />
</div>

export default NewTicketForm;