import { FaRegEdit } from "react-icons/fa"
import { Button } from "@/components/ui/button"

const EditButton = ({ id }: { id: string }) => {
    return (
        <Button variant="ghost" className='self-start cursor-pointer' size='icon'>
            <FaRegEdit className="transition-all text-foreground" size={16} />
        </Button>
    )
}
export default EditButton