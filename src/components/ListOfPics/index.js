import Pic from "../Pic";
import './ListOfPics.css'

const ListOfPics = ({ pics }) => {
    return <div className="ListOfPics">
        {
            pics.map(({ id, alt_description, regular }) => (
                <Pic key={id} id={id} alt={alt_description} src={regular} />
            ))
        }
    </div>
}

export default ListOfPics;