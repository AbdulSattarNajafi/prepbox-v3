import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import Button from '../components/button/Button';
import Logo from './../assets/icons/logo.png';
import { ReactComponent as Instagram } from './../assets/icons/instagram.svg';
import { ReactComponent as Facebook } from './../assets/icons/faceboook.svg';
import classes from './Header.module.css';

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const menuToggleHandler = () => {
        setOpenMenu((isOpen) => !isOpen);
    };

    return (
        <header className={`${classes.header} ${openMenu ? classes.headerWhite : ''}`}>
            <div className='container'>
                <nav className={classes.nav}>
                    <button
                        className={`${classes.navToggler} ${
                            openMenu ? classes.navTogglerOpen : ''
                        }`}
                        onClick={menuToggleHandler}
                    >
                        <span className={classes.navTogglerTop}></span>
                        <span className={classes.navTogglerBottom}></span>
                    </button>

                    <div className={classes.navLogo}>
                        <Link to='/'>
                            <img src={Logo} className={classes.navLogoImage} alt='PrepBox' />
                        </Link>
                    </div>

                    <div className={`${classes.navMenu} ${openMenu ? classes.navMenuOpen : ''}`}>
                        <ul className={classes.navList}>
                            <li className={classes.navListItem} onClick={menuToggleHandler}>
                                <NavLink to='/'>Home</NavLink>
                            </li>
                            <li className={classes.navListItem} onClick={menuToggleHandler}>
                                <NavLink to='tutoring'>Tutoring</NavLink>
                            </li>
                            <li className={classes.navListItem} onClick={menuToggleHandler}>
                                <NavLink to='worksheets'>Worksheets</NavLink>
                            </li>
                            <li className={classes.navListItem} onClick={menuToggleHandler}>
                                <NavLink to='about'>About</NavLink>
                            </li>
                            <li className={classes.navListItem} onClick={menuToggleHandler}>
                                <NavLink to='blog'>Blog</NavLink>
                            </li>

                            <li className={classes.navListSocialItem}>
                                <a
                                    rel='noreferrer'
                                    aria-label='PrepBox Instagram'
                                    href='https://www.instagram.com/prepboxmath/'
                                    target='_blank'
                                >
                                    <Instagram />
                                </a>

                                <a
                                    rel='noreferrer'
                                    aria-label='PrepBox Facebook'
                                    href='https://www.facebook.com/prepboxmath'
                                    target='_blank'
                                >
                                    <Facebook />
                                </a>
                            </li>

                            <li>
                                <Button
                                    type='external-link'
                                    url='https://prepboxconsultation.paperform.co/'
                                >
                                    Book Consultation
                                </Button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
