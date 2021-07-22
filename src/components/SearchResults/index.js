import HeaderApp from '../HeaderApp';
import ListOfPics from "../ListOfPics"
import ArrowLeft from "../Icons/ArrowLeft"
import ArrowRight from "../Icons/ArrowRight"
import { useParams } from "react-router";
import { useState } from 'react';
import './SearchResults.css'
import { usePics } from '../../hooks/usePics';
import Spinner from "../Spinner";

const SearchResults = () => {

    const { keyword } = useParams()

    const [page, setPage] = useState(1)

    const { loading, pics } = usePics({ keyword, page })

    const previousPage = () => {
        setPage(prev => prev - 1)
        window.scrollTo(0, 0);
    }
    const nextPage = () => {
        setPage(prev => prev + 1)
        window.scrollTo(0, 0);
    }

    return <>
        <HeaderApp />
        <h1 className="results-title">Results of {keyword}</h1>
        {loading
            ? <Spinner />
            : <>
                {pics.length === 0
                    ? <h3>No results found</h3>
                    : <ListOfPics pics={pics} />}


                <div className="buttons">
                    {page === 1
                        ? ''
                        :
                        <button className="btn-navegation" onClick={previousPage}>
                            <ArrowLeft width={35} height={35} />
                        </button>
                    }

                    {pics.length < 13
                        ? <h3 style={{ color: "black" }}>No more results found</h3>
                        :
                        <button className="btn-navegation" onClick={nextPage}>
                            <ArrowRight width={35} height={35} />
                        </button>
                    }

                </div>
            </>
        }
    </>

}

export default SearchResults;