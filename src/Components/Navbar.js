import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import Logo from '../Images/baroque.png'

const Navbar = () => {
    return (
        <>
            <nav className="navbar main-navbar-header">
                <div>
                    <button type='button' className='border-0 bg-transparent d-flex align-items-center'>
                        <svg width="29" height="19" viewBox="0 0 29 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="29" height="3" fill="#474747"></rect>
                            <rect y="8" width="29" height="3" fill="#474747"></rect>
                            <rect y="16" width="29" height="3" fill="#474747"></rect>
                        </svg>
                        <span className='menu-txt ms-2'>MENU</span>
                    </button>
                </div>
                <div>
                    <Link exact='true' to="/" className="navbar-brand">
                        <img src={Logo} />
                    </Link>
                </div>
                <div className='header-icons d-flex align-items-center gap-1'>
                    <div className='search-field'>
                        <button type='button' className='bg-transparent border-0'>
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8.69183" cy="8.69183" r="7.94183" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
                                <line x1="14.5865" y1="15.0811" x2="18.8274" y2="19.9418" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></line>
                            </svg>
                        </button>
                    </div>
                    <div className='wishlist-icon'>
                        <button type='button' className='bg-transparent border-0'>
                            <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                        </button>
                    </div>
                    <div className='cart-icon'>
                        <button type='button' className='bg-transparent border-0 d-flex align-items-center'>
                            <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.32813 6.98651C2.37027 6.60663 2.69135 6.31921 3.07355 6.31921H14.6095C14.9855 6.31921 15.3034 6.59757 15.353 6.97023L16.0964 6.87126L15.353 6.97024L17.0305 19.5702C17.0904 20.0198 16.7406 20.4192 16.2871 20.4192H1.67562C1.22866 20.4192 0.880911 20.0307 0.930198 19.5865L2.32813 6.98651Z" stroke="black" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M6.23096 6.19231V3.76923C6.23096 2.23983 7.47078 1 9.00019 1C10.5296 1 11.7694 2.23983 11.7694 3.76923V6.19231" stroke="black" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                            <span className='cart-item-count ms-1'>(0)</span>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar