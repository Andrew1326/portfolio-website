import { Dispatch, SetStateAction, useEffect, useState } from "react"

const useWindow = (): Dispatch<SetStateAction<string | undefined>> => {
    const [url, setUrl] = useState<string>()

    useEffect(() => {
        url && window.open(`https://google.com/search?q=${url}`, 'target=_blank')
    }, [url])

    return setUrl
}

export default useWindow