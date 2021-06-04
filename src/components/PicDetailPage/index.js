import { useEffect, useState } from "react";
import { useParams } from "react-router";
import getSinglePic from "../../services/getSinglePic";
import Pic from "../Pic"

const PicDetailPage = () => {

    const [pic, setPic] = useState({})

    const { id } = useParams()

    useEffect(function () {
        getSinglePic({ id })
            .then(img => setPic(img))
            .catch(e => {
                console.log(e)
            })
    }, [id])

    return (
        <>
            <h1>Image {id}</h1>
            <Pic key={pic.id} title={pic.description} alt={pic.alt_description} src={pic.regular} />
        </>
    );
}

export default PicDetailPage;