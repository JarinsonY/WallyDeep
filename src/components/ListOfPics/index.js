import { useEffect, useState } from "react";
import getPics from "../../services/getPics";
import Pic from "../Pic";
import './ListOfPics.css'

const ListOfPics = ({ keyword }) => {
    const [pics, setPics] = useState([])

    useEffect(() => {
        getPics({ keyword }).then(pics => setPics(pics))
    }, [keyword])



    return <div className="ListOfPics">
        {
            pics.map(({ id, alt_description, small }) => (
                <Pic key={id} id={id} alt={alt_description} src={small} />
            ))
        }
    </div>
}

export default ListOfPics;