import React, { useContext } from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import { ThemeContext } from './context/themeContext'


function Sub() {
    const data = useContext(ThemeContext)
    console.log('Sub : ', data)
  return (
    <div>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
    </div>
  )
}

export default Sub