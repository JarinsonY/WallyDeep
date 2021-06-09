import { useEffect, useState } from "react";
import { useParams } from "react-router";
import HeaderApp from '../HeaderApp';
import getSinglePic from "../../services/getSinglePic";
import Pic from "../Pic"
import './PicDetailPage.css'

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
            <HeaderApp />
            <h3>Image {id}</h3>
            <div className="detail-pic">
                <Pic key={pic.id} title={pic.description} alt={pic.alt_description} src={pic.regular} />
            </div>
        </>
    );
}

export default PicDetailPage;