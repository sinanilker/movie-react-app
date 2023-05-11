import React from 'react'

const Button = ({variant, type, onClick, children}) => {


  return (
    <button className={"button " + variant} type={type}
    onClick={onClick}>{children}</button>
  )
}

export default Button