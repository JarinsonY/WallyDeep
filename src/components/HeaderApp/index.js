import { Link } from "react-router-dom"
import SearchBar from "../SearchBar"
import './HeaderApp.css'

const Header = () => {
    return (
        <>
            <header>
                <div className="header-content">
                    <div className="header-logo">
                        <h1 className="brand">
                            <Link to='/' className="logo">
                                WallyDeep
                            </Link>
                        </h1>
                    </div>
                    {/* <div className="header-brand">
                        <p className="brand">Photo searcher with React and Unsplash</p>
                    </div> */}
                    <div className="header-search">
                        <SearchBar />
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;