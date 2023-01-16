import { Link, useHistory } from "react-router-dom"
import LuckButton from "../LuckButton";
import SearchBar from "../SearchBar"
import WallyButton from "../WallyButton";
import './HeaderApp.css'

const Header = ({ backButton = true }) => {
    let history = useHistory();

    const handleBack = () => {
        history.location.pathname === '/pic/wallyluck'
            ? history.push('/')
            : history.goBack()
    }

    return (
        <header className="header-content">
            <div className="header-logo">
                {backButton && <WallyButton className="header-back" onClick={handleBack}> ◀ </WallyButton>}
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