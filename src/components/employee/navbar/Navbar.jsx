import React from 'react'

export const Navbar = () => {
  return (
    <>
        <nav className='fixed top-0 right-0 left-0 w-full flex justify-between items-center h-16 bg-primary text-secondary px-10'>
            <div className="logo">
                <h3>CMCGI HRIS</h3>
            </div>
            <div id="info">
                <div id="search">

                </div>
                <span>Novel Chavez</span>
            </div>
        </nav>
    </>
  )
}
