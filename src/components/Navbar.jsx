import '../css/Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {

    return (
        <div className="navbar">
            <h3>Terrence David</h3>
            <div className="navigate">
                <Link to="/" >About</Link>
                <Link to="/projects" >Projects</Link>
            </div>
        </div>
    )
}

export default Navbar