import React from 'react'
import UnstitchData from './UnstitchData'
import Categories from '../Categories'
import UnstichedCard from './UnstichedCard'

const Unstitched = () => {

  // const handleClick = (e) => {
  //   console.log(e);
  // }

  return (
    <>
      <div className='clothing-categories'>
        <div className="row row-cols-1 row-cols-md-3 gy-5">
          {
            UnstitchData.map((item) => {
              return <UnstichedCard
                key={item.id}
                imgSrc={item.itemImg}
                title={item.itemTitle}
                url={item.itemURL}
                itemPrice={item.itemPrice}
              // handleCart={handleClick}
              />
            })
          }
        </div>
      </div>
    </>
  )
}

export default Unstitched;