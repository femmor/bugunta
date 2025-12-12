import { FaTrashCan } from "react-icons/fa6"
import { Button } from "@/components/ui/button"
import { deleteTicket } from "../actions/delete-ticket"

const DeleteButton = ({ id }: { id: string }) => {
    return (
        <form action={deleteTicket.bind(null, id)}>
            <Button variant="ghost" className='self-start cursor-pointer' size='icon'>
                <FaTrashCan className="transition-all text-destructive" size={16} />
            </Button>
        </form>
    )
}
export default DeleteButton