import '../css/Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {

    return (
        <div className="navbar">
            <Link to="/" className="navbar-brand">
                <h3>Terrence David</h3>
            </Link>
            <div className="navigate">
                <Link to="/projects" >Projects</Link>
            </div>
        </div>
    )
}

export default Navbar