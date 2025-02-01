import React from 'react'
import Login from './Login'
import Home from './Home'
// import Details from './Details'
// import "../styles/Navbar.css";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
			<div className="navbar-left">
				<Link to="/" className="nav-link">
					Home
				</Link>
				<Link to="/quiz" className="nav-link">
					quiz
				</Link>
				<Link to="/result" className="nav-link">
					result
				</Link>
			</div>
			{/* <div className="navbar-login">
				{false ? (
					<button 
                    // onClick={handleLogout}
                    >Logout</button>
				) : (
					<button 
                    // onClick={() => navigate("/login")}
                    >Login</button>
				)}
			</div> */}
		</nav>
  )
}

export default Navbar