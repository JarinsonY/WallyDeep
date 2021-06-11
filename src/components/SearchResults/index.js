import HeaderApp from '../HeaderApp';
import ListOfPics from "../ListOfPics"
import { useParams } from "react-router";

const SearchResults = () => {

    const { keyword } = useParams()

    return (
        <>
            <HeaderApp />
            <h1 style={{marginTop: 0}}>Resultados de {keyword}</h1>
            <ListOfPics keyword={keyword} />
        </>
    );
}

export default SearchResults;