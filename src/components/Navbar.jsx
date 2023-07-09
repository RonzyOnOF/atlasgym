import { useState } from 'react';

export const Navbar = () => {


    const [isBurgerOpen, setIsBurgerOpen] = useState(false);


    const toggleHamburgerMenu = () => {
        setIsBurgerOpen(!isBurgerOpen);
    }

    return (
        <>
            <header>
                <nav className='navbar'>
                    <a href='#' className='nav-branding'>Atlas</a>
                    <ul className={isBurgerOpen ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item' onClick={toggleHamburgerMenu}><a href='#' className='nav-link'>Home</a></li>
                        <li className='nav-item' onClick={toggleHamburgerMenu}><a href='#about' className='nav-link'>About</a></li>
                        <li className='nav-item' onClick={toggleHamburgerMenu}><a href='#plans' className='nav-link'>Plans</a></li>
                        <li className='nav-item' onClick={toggleHamburgerMenu}><a href='#reviews' className='nav-link'>Reviews</a></li>
                    </ul>
                    <div className={isBurgerOpen ? 'hamburger active' : 'hamburger' } onClick={toggleHamburgerMenu}>
                        <span className='bar'></span>
                        <span className='bar'></span>
                        <span className='bar'></span>
                    </div>
                </nav>
            </header>
        </>
    )
}