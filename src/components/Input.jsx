import React from 'react'

const Input = (props) => {
    const{type,reference,placeholder}=props
  return (
    <div>
      <input type={type} ref={reference} placeholder={placeholder} />
    </div>
  )
}

export default Input
