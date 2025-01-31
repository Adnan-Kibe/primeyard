import React from 'react'

const PropertiesLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='min-h-screen'>
        {children}
    </div>
  )
}

export default PropertiesLayout