import React, { Suspense } from 'react'
import RentacarList from './_components/RentacarList'

const Rentacar = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RentacarList />
    </Suspense>
  )
}

export default Rentacar