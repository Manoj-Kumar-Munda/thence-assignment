import React from 'react'

const Button = ({children, btnType="primary-cta", ...props}) => {
  return (
    <button className={`py-3 px-6 rounded-full ${btnType==='primary-cta'?'bg-default-primary-cta hover:bg-hover-primary-cta text-white' : 'border border-default-secondary-cta-border bg-default-secondary-cta hover:bg-hover-secondary-cta'}`} {...props}>{children}</button>
  )
}

export default Button