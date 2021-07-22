import { useEffect, useState } from "react"
import getPics from "../services/getPics";

export function usePics({ keyword, page } = { keyword: 'random' }) {
    const [loading, setLoading] = useState(false)
    const [pics, setPics] = useState([])

    useEffect(() => {
        setLoading(true)


        getPics({ keyword, page })
            .then(pics => {
                setPics(pics)
                setLoading(false)
            })
    }, [keyword, page])

    return { loading, pics }

}