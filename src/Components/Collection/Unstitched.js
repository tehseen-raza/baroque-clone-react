import React from 'react'
import UnstitchData from './UnstitchData'
import Categories from '../Categories'

const Unstitched = () => {
  return (
    <>
      <div className='clothing-categories'>
        <div className="row row-cols-1 row-cols-md-3 gy-5">
          {
            UnstitchData.map((item) => {
              return <Categories 
              key={item.id}
              imgSrc={item.itemImg}
              title={item.itemTitle}
              url={item.itemURL}
              itemPrice={item.itemPrice}
              />
            })
          }
        </div>
      </div>
    </>
  )
}

export default Unstitched;