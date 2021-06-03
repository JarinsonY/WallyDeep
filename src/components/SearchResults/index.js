import ListOfPics from "../ListOfPics"
import { useParams } from "react-router";

const SearchResults = () => {

    const { keyword } = useParams()

    return (
        <>
            <h1>Resultados de {keyword}</h1>
            <ListOfPics keyword={keyword} />
        </>
    );
}

export default SearchResults;