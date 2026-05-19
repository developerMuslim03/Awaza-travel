import React, { Suspense } from 'react'
import Triplist from './_components/TripList'

const TripsPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Triplist/>
    </Suspense>
  )
}

export default TripsPage