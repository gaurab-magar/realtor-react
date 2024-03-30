import React from 'react'
import spinnerImg from '../Assets/SVG/spinner.svg';
export const Spinner = () => {
  return (
    <div className='bg-opacity-50 flex items-center justify-center h-screen'>
        <div>
            <img src={spinnerImg} alt='loading' className='md:h-18'></img>
        </div>
    </div>
  )
}
