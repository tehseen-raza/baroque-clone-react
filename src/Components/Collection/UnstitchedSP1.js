import React, { useState } from 'react'
import img from './Assets/chantalle.jpg'
import '../Collection/Style.css'

const UnstitchedSP1 = () => {

    const [value, setValue] = useState(0);

    const increment = () => {
        // if (value < 10)
        setValue(value + 1)
    }
    const decrement = () => {
        if (value > 0)
            setValue(value - 1)
    }
    const onChangeHandler = e => {
        setValue(e.target.value);
        console.log(setValue);
    };

    return (
        <>
            <div style={{ width: "70%", margin: "60px auto" }} className="singleProduct">
                <div style={{ columnGap: "100px" }} className="row g-0">
                    <div className="col">
                        <img src={img} alt="single product image" />
                    </div>

                    <div className="col">
                        <p className='mb-0'>PRINTED LAWN PR-648</p>
                        <h5 className='my-3'>PKR 4,490</h5>
                        <div className='qtyCounter__Wrapper'>
                            <p className='mb-0'>QUANTITY</p>
                            <div className="ms-5 qty__Counter">
                                <button type='button' id='incrementBTN' onClick={() => decrement()}>-</button>
                                <input id='counter__field' type="number" value={value} onChange={onChangeHandler} />
                                <button type='button' id='decrementBTN' onClick={() => increment()}>+</button>
                            </div>
                        </div>

                        <p className='mb-0 my-3'>SKU:BQU-PR-648-01</p>

                        <div className="accordion" id="accordion">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <strong>DESCRIPTION</strong>
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion">
                                    <div style={{ borderBottom: '1px solid #9a9a9a' }} className="accordion-body p-0 pb-3 mb-3">
                                        2 PIECE <br />
                                        <strong>SHIRT FABRIC</strong> : PRINTED LAWN <br />
                                        SHALWAR FABRIC : PRINTED LAWN <br />
                                        <strong>INCLUDES</strong> : SHIRT AND TROUSER WITH ACCESSORIES <br />
                                        <strong>STYLE GUIDE </strong>: PRINTED KHUSSAS BLUE SATCHEL BAG WILL COMPLETE THE LOOK<br />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="product__size d-flex align-items-center">
                            <p style={{ width: '20%' }} className='mb-0'><strong>SIZE</strong></p>
                            <div className="productSize__RadioBtn">
                                <input className='form-check-input me-1' type="radio" name="XS" id='xsSize' value='xs' />
                                <label className='me-4' htmlFor="xsSize">XS</label>
                                <input className='form-check-input me-1' type="radio" name="XS" id='xsSize' value='xs' />
                                <label className='me-4' htmlFor="xsSize">S</label>
                                <input className='form-check-input me-1' type="radio" name="XS" id='xsSize' value='xs' />
                                <label className='me-4' htmlFor="xsSize">M</label>
                                <input className='form-check-input me-1' type="radio" name="XS" id='xsSize' value='xs' />
                                <label className='me-4' htmlFor="xsSize">L</label>
                            </div>
                        </div>

                        <hr style={{ color: '#9a9a9a', opacity: '1' }} />

                        <div className='d-flex align-items-center justify-content-between'>
                            <button className='primaryBTN' type='button'>ADD TO WISHLIST</button>
                            <button className='cartBTN' type='button'>ADD TO CART</button>
                            <button className='primaryBTN' type='button'>BUY IT NOW</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UnstitchedSP1