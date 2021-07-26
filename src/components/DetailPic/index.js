import Facebook from '../Icons/Facebook'
import Link from '../Icons/Link'
import Share from '../Icons/Share'
import Telegram from '../Icons/Telegram'
import Twitter from '../Icons/Twitter'
import './DetailPic.css'

const DetailPic = ({ id, title, nameAutor, location, download }) => {

    const CURRENT_URL = window.location.href;

    const share = () => {
        navigator.share({
            title: 'Look at WallyDeep',
            text: 'Visit WallyDepp and show this pic!... 🤍',
            url: CURRENT_URL
        })
    }

    const copyUrl = () => {
        var textField = document.createElement('textarea')
        textField.innerText = CURRENT_URL
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()

        var url = document.getElementById('url')
        url.innerHTML = 'Link Copied!'
    }

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
                <button className="btn">Download</button>
            </a>

            <p><b>Share on:</b></p>

            <div className="share">

                <div className="twitter">
                    <a
                        /* href={'https://twitter.com/intent/tweet?hashtags=WallyDeep&original_referer=https%3A%2F%2Fdeveloper.twitter.com%2F&ref_src=twsrc%5Etfw&related=twitterapi%2Ctwitter&text=Hello,%20look%20at%20this%20image%20that%20I%20liked&tw_p=tweetbutton&url=https%3A%2F%2Fwallydeep.vercel.app%2Fpic%2F' + id} */
                        href={'https://twitter.com/intent/tweet?hashtags=WallyDeep&original_referer=https%3A%2F%2Fdeveloper.twitter.com%2F&ref_src=twsrc%5Etfw&related=twitterapi%2Ctwitter&text=Visit WallyDepp and show this pic!... 🤍&tw_p=tweetbutton&url=' + CURRENT_URL}
                        target="_blank"
                        rel="noreferrer">
                        <button className="btn">
                            <Twitter />
                        </button>
                    </a>
                </div>

                <div className="facebook">
                    <a
                        href={'https://www.facebook.com/sharer/sharer.php?u=' + CURRENT_URL + '&quote=Visit WallyDepp and show this pic!... 🤍'}
                        target="_blank"
                        rel="noreferrer">
                        <button className="btn">
                            <Facebook />
                        </button>
                    </a>
                </div>

                <div className="telegram">
                    <a
                        /* href={'https://facebook.com/sharer.php?u=https%3A%2F%2Fwallydeep.vercel.app%2Fpic%2F' + id + '&t=PRUEBA'} */
                        href={'https://t.me/share/url?url=' + CURRENT_URL + '&text=Visit WallyDepp and show this pic!... 🤍'}
                        target="_blank"
                        rel="noreferrer">
                        <button className="btn">
                            <Telegram />
                        </button>
                    </a>
                </div>

            </div>

            {navigator.share
                ? <div className="t-area">
                    {/* <textarea name="url" id="url" cols="38" rows="1" defaultValue={CURRENT_URL} disabled></textarea> */}
                    <button className="btn" onClick={share}>
                        <Share />
                    </button>
                </div>
                : <button className="btn" id="url" onClick={copyUrl}>
                    <Link />
                </button>
            }

        </>
    );
}

export default DetailPic;