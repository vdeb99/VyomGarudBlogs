import Header from "./Header";
import Footer from "./Footer";
import React from 'react'

function Layout({children}) {
  return (
    <div className="">
        <Header />
        <main>{children}</main>
        <Footer />

    </div>
  )
}

export default Layout