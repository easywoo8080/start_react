import React from 'react'

function Footer({isDark}) {
  return (
    <div
        className='footer'
        style={{
            backgroundColor : isDark? 'black' : 'lightgray',
            color: isDark? 'white' : 'black'
        }}
    >Footer</div>
  )
}

export default Footer