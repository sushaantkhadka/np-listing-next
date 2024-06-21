import React from 'react'
import NavBarItem from "../components/NavBarItem";


export default function NavBar() {
  return (
    <div className='flex dark:bg-amber-600 bg-grey-600 p-4 lg:text-lg justify-center gap-6'>
        <NavBarItem title='Trending' param='Trending' />
        <NavBarItem  title='Top Rated' param='top_rated' />


    </div>
  )
}
