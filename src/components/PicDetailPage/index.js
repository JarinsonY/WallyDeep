import { useEffect, useState } from "react";
import { useParams } from "react-router";
import HeaderApp from '../HeaderApp';
import getSinglePic from "../../services/getSinglePic";
import Pic from "../Pic"
import './PicDetailPage.css'
import DetailPic from "../DetailPic";

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
            <div className="detail">
                <div className="detail-pic">
                    <Pic key={pic.id} id={pic.id} alt={pic.alt_description} src={pic.full} />
                </div>
                <div className="detail-pic-info">
                    <DetailPic title={pic.description} nameAutor={pic.name} location={pic.title} download={pic.download} />
                </div>
            </div>

        </>
    );
}

export default PicDetailPage;