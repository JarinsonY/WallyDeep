import { useEffect, useState } from "react";
import getPics from "../../services/getPics";
import Pic from "../Pic";
import './ListOfPics.css'

const ListOfPics = ({ keyword, page }) => {
    const [pics, setPics] = useState([])


    useEffect(() => {
        getPics({ keyword, page }).then(pics => setPics(pics))
        /* console.log('Page: ', page) */
    }, [keyword, page])

    return <div className="ListOfPics">
        {
            pics.map(({ id, alt_description, small }) => (
                <Pic key={id} id={id} alt={alt_description} src={small} />
            ))
        }
    </div>
}

export default ListOfPics;