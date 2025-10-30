import Banner from '@/components/public/home/Banner'
import Footer from '@/components/public/UI/Footer'
import Navbar from '@/components/public/UI/Navbar'
import React from 'react'

export const metadata = {
  title: "electraZone",
  description: "electraZone",
  icons: {
    icon: "/favicon.ico", // ✅ ঠিক এই path
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};


const layout = ({children}) => {
  return (
    <>
    <Banner/>
    <Navbar/>
    {children}
    <Footer/>
    </>
  )
}

export default layout