'use client'

import { useSearchParams } from 'next/navigation'
import React from 'react'

const Search = () => {
  const searchParams = useSearchParams()

  const location = searchParams.get("location")
  const status = searchParams.get("status")
  const time = searchParams.get("time")
  const price = searchParams.get("price")

  return (
    <div>
      <p><strong>Ýerleşýän ýeri:</strong> {location || 'Saýlanmadyk'}</p>
      <p><strong>Statusy:</strong> {status || 'Saýlanmadyk'}</p>
      <p><strong>Wagty:</strong> {time || 'Saýlanmadyk'}</p>
      <p><strong>TMT:</strong> {price || 'Saýlanmadyk'}</p>
    </div>
  )
}

export default Search