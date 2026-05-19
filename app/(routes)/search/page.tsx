'use client'
import React, { Suspense } from 'react'
import Search from './_components/Search'

const SearchPage = () => {
  return (
     <Suspense fallback={<div>Loading...</div>}>
      <Search />
    </Suspense>
  )
}

export default SearchPage