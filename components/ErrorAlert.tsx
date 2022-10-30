import { Alert } from "@mantine/core"
import { AlertCircle } from "tabler-icons-react"

type TProps = { error: Error }

const ErrorAlert = ({ error }: TProps): JSX.Element => {
    return (
        <Alert icon={<AlertCircle size={16} />} color='red' radius='md' title={error.name}>{error.message}</Alert>
    )
}

export default ErrorAlert