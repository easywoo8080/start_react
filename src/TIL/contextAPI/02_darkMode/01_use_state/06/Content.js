import React from 'react'

function Content({isDark}) {
  return (
    <div
        className='content'
        style={{
            backgroundColor : isDark? 'black' : 'white',
            color: isDark? 'white' : 'black'
        }}
    >Content</div>
  )
}

export default Content