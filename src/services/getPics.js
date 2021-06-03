import { ACCESS_KEY, API_URL } from "./settings";

/* export default function getPics(keyword) {

    const fromApiResponseToGifs = apiResponse => {
        const { results = [] } = apiResponse
        if (Array.isArray(results)) {
            const pics = results.map(image => {
                const { id, urls } = image
                return { id, urls }
            })
            return pics
        }
        return []
    }

    const apiURL = `${API_URL}?page=1&query="${keyword}"&client_id=${ACCESS_KEY}`

    return fetch(apiURL)
        .then((response) => response.json())
        .then(fromApiResponseToGifs);
} */

export default function getPics({ keyword = 'ferrari' } = {}) {

    const apiURL = `${API_URL}?page=1&query="${keyword}"&client_id=${ACCESS_KEY}`

    return (
        fetch(apiURL)
            .then(res => res.json())
            .then(apiResponse => {
                const { results } = apiResponse
                const pics = results.map(image => {
                    const { id, description, alt_description } = image
                    const { name } = image.user
                    const { small } = image.urls
                    /* const { urls } = urls.small */
                    return { id, description, alt_description, small, name }
                })
                return pics;
            })
    )
}