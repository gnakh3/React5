import React from 'react'
import backImg from '../assets/backImg.svg'
import detailback from '../assets/detailback.svg'

const backSide = ({cvc}) => {

  return (
    <div className='backCard'>
        <div className='backHeader'></div>
        <div className='cvc'>{cvc}</div>
        <div><img src={detailback} alt="" /></div>
    </div>
  )
}

export default backSide