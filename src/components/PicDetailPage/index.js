import { useEffect, useState } from "react";
import { useParams } from "react-router";
import HeaderApp from '../HeaderApp';
import getSinglePic from "../../services/getSinglePic";
import Pic from "../Pic"
import './PicDetailPage.css'
import DetailPic from "../DetailPic";
import Spinner from "../Spinner";
import getRandomPic from "../../services/getRandomPic";

const PicDetailPage = () => {

    const [pic, setPic] = useState({})

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const { id } = useParams()
    const wallyLuck = id === 'wallyluck' ? true : false

    useEffect(function () {
        setLoading(true)
        wallyLuck
            ? getRandomPic()
                .then(img => {
                    setPic(img)
                    setLoading(false)
                })
                .catch(e => {
                    setLoading(false)
                    setError(true)
                    /* console.log(e) */
                })
            : getSinglePic({ id })
                .then(img => {
                    setPic(img)
                    setLoading(false)
                })
                .catch(e => {
                    setLoading(false)
                    setError(true)
                    /* console.log(e) */
                })
    }, [id, wallyLuck])

    return (
        <>
            <HeaderApp />
            <h3>{wallyLuck ? 'WallyLuck: You tried your luck and found this...' : `Image ${id}`}</h3>
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