

const Square = ({ value, chooseSquare}) => {

    return ( 
        <div className="square" onClick={chooseSquare}>
            <span>{value}</span>
        </div>
     );
}
 
export default Square;