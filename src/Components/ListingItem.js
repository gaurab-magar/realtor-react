import React from 'react'

export const ListingItem = ({listing,id}) => {
  return (
    <div>
        <h3 className='text-white font-semibold '>
            {listing.name}
        </h3>
    </div>
  )
}
