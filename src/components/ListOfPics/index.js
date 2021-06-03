import { useEffect, useState } from "react";
import getPics from "../../services/getPics";
import Pic from "../Pic";

const ListOfPics = ({ keyword }) => {
    const [pics, setPics] = useState([])

    useEffect(() => {
        getPics({ keyword }).then(pics => setPics(pics))
    }, [keyword])

    return (
        pics.map(photo => (
            <Pic key={photo.id} title={photo.description} alt={photo.alt_description} src={photo.small} />
        ))
    )
}

export default ListOfPics;