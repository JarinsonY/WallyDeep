import { Link } from "react-router-dom"
import './style.css'

const Header = () => {
    return (
        <>
            <header>
                <h1 className="brand">
                    <Link to='/' className="brand-text">
                        WallyDeep
                    </Link>
                </h1>
                <p>Photo search in React</p>
            </header>
        </>
    );
}

export default Header;