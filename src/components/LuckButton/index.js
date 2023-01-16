import WallyButton from "../WallyButton"


const LuckButton = () => {

    const handleClick = () => {
        window.location.href = '/pic/wallyluck'
    }

    return (
        <WallyButton onClick={handleClick}>
            Try your luck
        </WallyButton>
    )
}

export default LuckButton