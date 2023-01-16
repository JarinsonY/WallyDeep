import { useHistory } from "react-router-dom";
import WallyButton from "../WallyButton"


const LuckButton = () => {
    let history = useHistory();

    const handleClick = () => {
        history.location.pathname === '/pic/wallyluck'
            ? window.location.reload()
            : history.push('/pic/wallyluck')
    }

    return (
        <WallyButton onClick={handleClick}>
            Try your luck
        </WallyButton>
    )
}

export default LuckButton