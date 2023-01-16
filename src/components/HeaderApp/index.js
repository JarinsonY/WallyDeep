import { Link } from "react-router-dom"
import LuckButton from "../LuckButton";
import SearchBar from "../SearchBar"
import WallyButton from "../WallyButton";
import './HeaderApp.css'

const Header = ({ backButton = true }) => {

    const hanndleBack = () => {
        window.location.href = '/'
    }

    return (
        <header className="header-content">
            <div className="header-logo">
                {backButton && <WallyButton className="header-back" onClick={hanndleBack}> ◀ </WallyButton>}
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
                <LuckButton />
            </div>
        </header>
    );
}

export default Header;