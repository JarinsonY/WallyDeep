import HeaderApp from '../HeaderApp';
import ListOfPics from "../ListOfPics"
import ArrowLeft from "../Icons/ArrowLeft"
import ArrowRight from "../Icons/ArrowRight"
import { useHistory, useLocation, useParams } from "react-router";
import './SearchResults.css'
import { usePics } from '../../hooks/usePics';
import Spinner from "../Spinner";
import { useEffect } from 'react';

const SearchResults = () => {

    const { keyword } = useParams()
    let history = useHistory();
    /* let { search } = useLocation();
    const query = new URLSearchParams(search);
    const queryPage = query.get('page');

    const pageQuery = queryPage ? parseInt(queryPage) : 1; */

    const { loading, pics, page, setPage } = usePics({ keyword /* , pageQuery */ })
    localStorage.setItem("lastPage", JSON.stringify(page));

    const previousPage = () => {
        setPage(prev => prev - 1)
        history.replace(`/results/${keyword}?page=${page - 1}`)
        //query.set('page', page - 1)
        window.scrollTo(0, 0);
    }
    const nextPage = () => {
        setPage(prev => prev + 1)
        history.replace(`/results/${keyword}?page=${page + 1}`)
        //query.set('page', page + 1)
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        console.log('Page: ' + page)
    }, [page, setPage])

    return <>
        <HeaderApp />
        <h1 className="results-title">Results of {keyword}</h1>
        {loading
            ? <Spinner />
            : <>
                {pics.length === 0
                    ? <h3>No results found</h3>
                    : <ListOfPics pics={pics} />
                }


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