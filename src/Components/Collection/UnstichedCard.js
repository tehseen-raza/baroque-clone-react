import React from 'react'
import { Link } from 'react-router-dom'

const UnstichedCard = (props) => {
    return (
        <>
            <div className="col" >
                <div className="card h-100 border-0">
                    <Link to={props.url}>
                        <img src={props.imgSrc} className="card-img-top" alt="Category-Img" />
                    </Link>
                    <div className='card_content'>
                        <h3 className="title_h3">{props.title}</h3>
                        <Link to={props.url}>
                            <span className='category_link' to='/'>{props.itemPrice}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UnstichedCard


