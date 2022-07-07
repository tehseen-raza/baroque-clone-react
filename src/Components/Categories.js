import React from 'react'
import "../App.css"
import Category_img from "../Images/unstiched-cloth.jpg"

const Categories = (props) => {
    return (
        <>
            <a href='#'>
                <div className="col">
                    <div className="card h-100 border-0">
                        <img src={props.imgSrc} className="card-img-top" alt={Category_img} />
                        <div className='card_content'>
                            <h3 className="title_h3">{props.title}</h3>
                            <a className='category_link' href='#'>SHOP NOW</a>
                        </div>
                    </div>
                </div>
            </a>
        </>
    )
}

export default Categories