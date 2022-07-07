import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Categories = (props) => {
    return (
        <>
            <div className="col">
                <div className="card h-100 border-0">
                    <Link to={props.url}>
                        <img src={props.imgSrc} className="card-img-top" alt="Category-Img" />
                    </Link>
                    <div className='card_content'>
                        <h3 className="title_h3">{props.title}</h3>
                        <Link to={props.url}>
                            <span className='category_link' to='/'>SHOP NOW</span>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Categories;