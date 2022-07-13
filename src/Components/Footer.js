import React from 'react';
import Home from './Home';
import '../App.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className="Footer">
                <div className="Footer__content">
                    <ul className='Foooter__menuList d-flex flex-wrap align-items-center justify-content-center list-unstyled'>
                        <li><Link className='Footer__menuLink' to={Home}>WHO WE ARE</Link></li>
                        <li><Link className='Footer__menuLink' to={Home}>CONTACT US</Link></li>
                        <li><Link className='Footer__menuLink' to={Home}>OUR RESPONSIBLITY</Link></li>
                        <li><Link className='Footer__menuLink' to={Home}>EXCHANGE & REFUND</Link></li>
                        <li><Link className='Footer__menuLink' to={Home}>EXCHANGE FORM</Link></li>
                        <li><Link className='Footer__menuLink' to={Home}>SHIPPING</Link></li>
                        <li><Link className='Footer__menuLink' to={Home}>LOOK BOOK</Link></li>
                        <li><Link className='Footer__menuLink' to={Home}>TRACK YOUR ORDER</Link></li>
                        <li><Link className='Footer__menuLink' to={Home}>ORDER CANCELLATION FORM</Link></li>
                        <li><Link className='Footer__menuLink' to={Home}>CUSTOMIZED STITCHING</Link></li>
                        <li><Link className='Footer__menuLink' to={Home}>CAREERS</Link></li>
                        <li><Link className='Footer__menuLink' to={Home}>LEGAL</Link></li>
                        <li><Link className='Footer__menuLink' to={Home}>FAQ's</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer;