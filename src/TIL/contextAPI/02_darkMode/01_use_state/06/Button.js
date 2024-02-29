import React from 'react'

function Button({isDark, setIsDark}) {
    const toggleMode = () => {
        /* if(isDark === true){
            setIsDark(false)
        } else{
            setIsDark(true)
        } */
        setIsDark(!isDark)
    }

    return (
        <div
            className='btn'
            onClick={toggleMode}
        >Change Mode</div>
  )
}

export default Button