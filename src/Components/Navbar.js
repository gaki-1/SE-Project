import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div class="nav-wrapper valign-wrapper blue lighten-2">
                <div className="container">
                    <Link to="/" class="brand-logo">Exam-Help</Link>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><Link to="sass.html">Schedule</Link></li>
                        <li><Link to="badges.html">Results</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;