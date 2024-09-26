import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
function Layout({children}) {
    return (
    <div className='flex flex-col h-[100vh]'>
        <Navbar/>
        {children}
        <Footer/>
    </div>
    )
}

export default Layout
