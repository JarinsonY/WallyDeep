import { ACCESS_KEY, API_URL_PHOTO } from "./settings";

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

export default function getSinglePic({ id }) {

    const apiURL = `${API_URL_PHOTO}/${id}?client_id=${ACCESS_KEY}`

    return (
        fetch(apiURL)
            .then(res => res.json())
            .then(apiResponse => {
                const data = apiResponse
                /* console.log(data) */

                const { id, description, alt_description } = data
                const { name } = data.user
                const { full } = data.urls
                const { title } = data.location
                /* const { urls } = urls.small */
                return { id, description, alt_description, full, name, title }
                /*  return pics; 
                console.log(pic)
                return pic*/
            })
    )
}