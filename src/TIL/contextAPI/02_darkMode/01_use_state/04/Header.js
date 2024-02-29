import React from 'react'

function Header( {isDark} ) {
    // console.log('Header isDark : ', isDark)
  return (
    <div
        className='header'
        style={{
            backgroundColor : isDark? 'black' : 'lightgray',
            color: isDark? 'white' : 'black'
        }}
    >
        Header
    </div>
  )
}

export default Header