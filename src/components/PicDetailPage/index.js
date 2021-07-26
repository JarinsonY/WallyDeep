import { useEffect, useState } from "react";
import { useParams } from "react-router";
import HeaderApp from '../HeaderApp';
import getSinglePic from "../../services/getSinglePic";
import Pic from "../Pic"
import './PicDetailPage.css'
import DetailPic from "../DetailPic";
import Spinner from "../Spinner";

const PicDetailPage = () => {

    const [pic, setPic] = useState({})

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const { id } = useParams()

    useEffect(function () {
        setLoading(true)
        getSinglePic({ id })
            .then(img => {
                setPic(img)
                setLoading(false)
            })
            .catch(e => {
                setLoading(false)
                setError(true)
                /* console.log(e) */
            })
    }, [id])

    return (
        <>
            <HeaderApp />
            <h3>Image {id}</h3>
            <div className="detail">
                {loading
                    ? <div className="spinner"> <Spinner /> </div>
                    : <>
                        {error
                            ? <h3 style={{ color: "black" }}>404: Pic not found</h3>
                            : <>
                                <div className="detail-pic">
                                    <Pic key={pic.id} id={pic.id} alt={pic.alt_description} src={pic.full} />
                                </div>
                                <div className="detail-pic-info">
                                    <DetailPic id={pic.id} title={pic.description} nameAutor={pic.name} location={pic.title} download={pic.download} />
                                </div>
                            </>
                        }
                    </>
                }
            </div>

        </>
    );
}

export default PicDetailPage;