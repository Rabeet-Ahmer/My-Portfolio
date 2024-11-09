import React, { FC } from 'react'

const Wrappers:FC<{children:React.ReactNode}>= ({children}) => {
  return (
    <div className='max-w-screen-xl mx-auto px-2'>
        {children}
    </div>
  )
}

export default Wrappers