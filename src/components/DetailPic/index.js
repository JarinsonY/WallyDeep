import './DetailPic.css'

const DetailPic = ({ title, nameAutor, location, download }) => {

    return (
        <>
            <p><b>Title: </b>{title ? title : 'No Title'}</p>
            <p><b>Autor: </b>{nameAutor ? nameAutor : 'No Autor'}</p>
            <p><b>Location: </b>{location ? location : 'No Location'}</p>
            <p className="copyright">
                Photo by {nameAutor} on <a href="https://unsplash.com/?utm_source=wallydeep&utm_medium=referral"
                    target="_blank"
                    rel="noopener noreferrer">Unsplash
                </a>.
            </p>
            <a href={download + '?force=true'} download target="_blank" rel="noreferrer">
                <button className="download-btn">Download</button>
            </a>
        </>
    );
}

export default DetailPic;