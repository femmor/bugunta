import { Spinner } from "@/components/ui/spinner"

const LoadingSpinner = () => {
    return (
        <div className="flex-1 flex items-center justify-center">
            <Spinner className="size-10" />
        </div>
    )
}
export default LoadingSpinner