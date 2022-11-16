import "../style/ErrorPage.scss"
// FONTAWESOME
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
// ROUTER
import { Link } from "react-router-dom";

library.add(faHouse)

const ErrorPage = () => {

    return (
        <div className="PageError">
            <div className="matrix">
                <div className="matrix">
                    <div className="matrix">
                        <div className="matrix">
                            <div className="matrix">
                                <div className="matrix">
                                    <div className="matrix">
                                        <div className="matrix">
                                            <div className="matrix">
                                                <h1>404</h1>
                                            </div>
                                            <h2>You fell into matrix</h2>
                                        </div>
                                        <h2 className="h2h2">You need to leave now!</h2>
                                    </div>
                                    <div className="error-link">
                                            <Link to="/tic_tac_toe/menu"><FontAwesomeIcon icon="fa-solid fa-house" className='icon' /></Link>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default ErrorPage;