import { Link, NavLink } from "react-router-dom"
import styles from "./Header.module.css"
import clsx from "clsx"
import logo from '../../../assets/logos/AA_logo_final.svg'

function Header() {
    return <nav className={styles["navbar-container"]}>
        <div className={styles["navbar"]}>
            {/* Logo */}
            <NavLink to="/amaravathi" className={styles["navbar-logo"]}>
                <div className={styles["logo-icon"]} >
                    {/* <i className={"fas fa-utensils"}></i> */}
                    <img src={logo} alt="amaravathi-logo" />
                </div>
                <span>Amaravathi Authentics</span>
            </NavLink>

            {/* Navigation Menu */}
            <ul className={styles["navbar-menu"]}>
                <li className={styles["nav-item"]}>
                    <NavLink to="/amaravathi" end className={(isActive) => clsx(styles["nav-link"], isActive.isActive && styles['active'])}>{/*${activePage === 'home' ? 'active' : ''}"*/}
                        <i className="fas fa-home"></i>
                        Home
                    </NavLink>
                </li>

                <li className={styles["nav-item"]}>
                    <NavLink to="about" className={(isActive) => clsx(styles["nav-link"], isActive.isActive && styles['active'])}>
                        <i className="fas fa-info-circle"></i>
                        About Us
                    </NavLink>
                </li>

                <li className={styles["nav-item"]}>
                    <NavLink to="menu" className={(isActive) => clsx(styles["nav-link"], isActive.isActive && styles['active'])}>
                        <i className="fas fa-book-open"></i>
                        Menu
                    </NavLink>
                </li>

                <li className={styles["nav-item"]}>
                    <NavLink to="order" className={(isActive) => clsx(styles["nav-link"], isActive.isActive && styles['active'])}>
                        <i className="fas fa-shopping-bag"></i>
                        Ordering
                    </NavLink>
                </li>

                <li className={styles["nav-item"]}>
                    <NavLink to="reserve" className={(isActive) => clsx(styles["nav-link"], isActive.isActive && styles['active'])}>
                        <i className="fas fa-calendar-check"></i>
                        Reserve Table
                    </NavLink>
                </li>

                <li className={styles["nav-item"]}>
                    <NavLink to="contact" className={(isActive) => clsx(styles["nav-link"], isActive.isActive && styles['active'])}>
                        <i className="fas fa-envelope"></i>
                        Contact Us
                    </NavLink>
                </li>

                <li className={styles["nav-item"]}>
                    <Link to="#" className={styles["nav-link"]}>
                        <i className="fas fa-ellipsis-h"></i>
                        More
                        <i className={`fas fa-chevron-down ${styles["dropdown-arrow"]}`}></i>
                    </Link>
                    <div className={styles["dropdown-menu"]}>
                        <NavLink to="catering" className={styles["dropdown-item"]}>
                            <i className="fas fa-concierge-bell"></i>
                            Catering
                        </NavLink>
                        <NavLink to="events" className={styles["dropdown-item"]}>
                            <i className="fas fa-calendar-alt"></i>
                            Events
                        </NavLink>
                        {/* <Link to="/gift-cards" className={styles["dropdown-item"]}>
                            <i className="fas fa-gift"></i>
                            Gift Cards
                        </Link> */}
                        <Link to="/faqs" className={styles["dropdown-item"]}>
                            <i className="fas fa-question-circle"></i>
                            FAQs
                        </Link>
                    </div>
                </li>
            </ul>
        </div>
    </nav >
}

export default Header