import './WallyButton.css'

const WallyButton = ({children, onClick}) => {

    return (
        <button type="button" className="luck-btn" onClick={onClick}>
            {children}
        </button>
    )
}

export default WallyButton