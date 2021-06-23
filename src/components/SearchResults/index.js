import HeaderApp from '../HeaderApp';
import ListOfPics from "../ListOfPics"
import ArrowLeft from "../Icons/ArrowLeft"
import ArrowRight from "../Icons/ArrowRight"
import { useParams } from "react-router";
import { useState } from 'react';
import './SearchResults.css'

const SearchResults = () => {

    const { keyword } = useParams()

    const [page, setPage] = useState(1)

    const previousPage = () => {
        setPage(prev => prev - 1)
        window.scrollTo(0, 0);
    }
    const nextPage = () => {
        setPage(prev => prev + 1)
        window.scrollTo(0, 0);
    }

    return (
        <>
            <HeaderApp />
            <h1 className="results-title">Results of {keyword}</h1>
            <ListOfPics keyword={keyword} page={page} />

            <div className="buttons">
                {page === 1 ? '' :
                    <button className="btn-navegation" onClick={previousPage}>
                        <ArrowLeft width={35} height={35} />
                    </button>
                }

                <button className="btn-navegation" onClick={nextPage}>
                    <ArrowRight width={35} height={35} />
                </button>

            </div>
        </>
    );
}

export default SearchResults;