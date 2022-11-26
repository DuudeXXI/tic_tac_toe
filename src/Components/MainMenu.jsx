import "../style/MainMenu.scss"
// FONTAWESOME

// ROUTER
import { Link } from "react-router-dom";

const MainMenu = () => {
    return (
        <div className="PageMain">
            <h1>Main Menu</h1>
            <div className="main-menu">
                <Link to="/tic_tac_toe">Start game</Link>
                <Link to="/tic_tac_toe/options">Options</Link>
            </div>
        </div>
    );
}

export default MainMenu;