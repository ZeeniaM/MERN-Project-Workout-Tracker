import { NavLink } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout()
    }

    return (
        <header>
            <div className="container">
                <NavLink to="/">
                    <h2>FitUp</h2>
                </NavLink>
                <nav>
                    <NavLink 
                        to="/home" 
                        className={({ isActive }) => isActive ? "active" : ""}>
                        My Workouts
                    </NavLink>
                    <NavLink 
                        to="/about" 
                        className={({ isActive }) => isActive ? "active" : ""}>
                        About Us
                    </NavLink>
                    {user && (
                        <div>
                            <span>{user.email}</span>
                            <button onClick={handleClick}>Log out</button>
                        </div>
                    )}
                    {!user && (
                        <div>
                            <NavLink 
                                to="/login" 
                                className={({ isActive }) => isActive ? "active" : ""}>
                                Login
                            </NavLink>
                            <NavLink 
                                to="/signup" 
                                className={({ isActive }) => isActive ? "active" : ""}>
                                Signup
                            </NavLink>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    )
}

export default Navbar
