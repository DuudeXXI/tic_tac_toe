import { useContext } from "react";
import MainContext from "../Contexts/MainContext";

const Square = ({ value, chooseSquare}) => {

    const { xPlayer, oPlayer } = useContext(MainContext)

    return ( 
        <div className="square" onClick={chooseSquare}>
            <span className={`players-default ${value === "X" ? xPlayer : oPlayer}`}>{value}</span>
        </div>
     );
}
 
export default Square;