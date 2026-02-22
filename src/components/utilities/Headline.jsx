import React from 'react'

const Headline = ({ children, className }) => {
  return (
    <h2 className={`headline-lg max-w-150 ${className}`}>{children}</h2>
  )
}

export default Headline