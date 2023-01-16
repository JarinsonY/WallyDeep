import './LuckButton.css'

const LuckButton = () => {

    const handleClick = () => {
        window.location.href = '/pic/wallyluck'
    }

    return (
        <button type="button" className="luck-btn" onClick={handleClick}>
            Try your luck
        </button>
    )
}

export default LuckButton