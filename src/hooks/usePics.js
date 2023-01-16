import { useEffect, useState } from "react"
import getPics from "../services/getPics";

const INITIAL_PAGE = 1;

export function usePics({ keyword } = { keyword: 'random' }) {
    const [loading, setLoading] = useState(false)
    const [pics, setPics] = useState([])
    const [page, setPage] = useState(INITIAL_PAGE)

    useEffect(() => {
        setLoading(true)

        getPics({ keyword, page })
            .then(pics => {
                setPics(pics)
                setLoading(false)
            })
    }, [keyword, page])

    return { loading, pics, page, setPage }

}