const DetailPic = ({ title, nameAutor, location }) => {
    return (
        <>
            <p><b>Title: </b>{title ? title : 'No Title'}</p>
            <p><b>Autor: </b>{nameAutor ? nameAutor : 'No Autor'}</p>
            <p><b>Location: </b>{location ? location : 'No Location'}</p>
        </>
    );
}

export default DetailPic;