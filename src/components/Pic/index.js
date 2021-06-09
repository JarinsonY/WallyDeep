import { Link } from "react-router-dom"
import './Pic.css'

export default function Pic({ id, title, alt_description, src }) {
    return (
        <div className="Pic">
            <Link to={`/pic/${id}`} className='Pic-link'>
                <img alt={alt_description} src={src} />
            </Link>
        </div>
    );
}