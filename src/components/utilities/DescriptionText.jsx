import React from 'react'

const DescriptionText = ({ children, className }) => {
  return (
    <p className={`paragraph w-full lg:max-w-130 ${className}`}>{children}</p>
  )
}

export default DescriptionText