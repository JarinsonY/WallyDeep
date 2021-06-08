import SearchBar from '../SearchBar'
import './HomePage.css'

const HomePage = () => {
    return (
        <>
            <div className="home">
                <h1 className="logo">WallyDeep</h1>
                <p className="brand">Photo searcher with React and Unsplash</p>
                <SearchBar />
                <p className="credits">Made with 🤍 by <a href="http://github.com/JarinsonY" target="_blank" rel="noopener noreferrer">Jarinson Palacios</a>.</p>
            </div>
        </>
    );
}

export default HomePage;