import React from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

function Sub({ isDark }) {
// console.log(isDark)
  return (
    <div>
        <Header isDark={isDark}></Header>
        <Content isDark={isDark}></Content>
        <Footer isDark={isDark}></Footer>
    </div>
  )
}

export default Sub