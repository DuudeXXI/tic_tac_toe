

const Square = ({ value, chooseSquare}) => {

    return ( 
        <div className={`square ${value ? 'bg-salmon text-white' : ''}`} onClick={chooseSquare}>
            <span>{value}</span>
        </div>
     );
}
 
export default Square;