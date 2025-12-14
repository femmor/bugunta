import Link from "next/link"
import { FaRegEdit } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { ticketEditPath } from "@/paths"

const EditButton = ({ id }: { id: string }) => {
    return (
        <Link href={ticketEditPath(id)}>
            <Button variant="ghost" className='self-start cursor-pointer' size='icon'>
                <FaRegEdit className="transition-all text-foreground" size={16} />
            </Button>
        </Link>
    )
}
export default EditButton