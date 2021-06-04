import { Link } from "react-router-dom"

export default function Pic({ id, title, alt_description, src }) {
    return (
        <div className="Pic">
            <Link to={`/pic/${id}`}>
                <img alt={alt_description} src={src} />
            </Link>
        </div>
    );
}