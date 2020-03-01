import React from 'react'
import { Link } from 'gatsby'
import navStyles from '../components/navbar.module.scss'

const Navbar = () => {
    return (
        <nav>
            <ul className={navStyles.navList}>
                <li><Link to="/" className={navStyles.navItem} activeClassName={navStyles.activeNavItem}>Home</Link></li>
                <li><Link to="/landscapes" className={navStyles.navItem} activeClassName={navStyles.activeNavItem}>Landscapes</Link></li>
                <li><Link to="/portraits" className={navStyles.navItem} activeClassName={navStyles.activeNavItem}>Portraits</Link></li>
                <li><Link to="/contact" className={navStyles.navItem} activeClassName={navStyles.activeNavItem}>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar