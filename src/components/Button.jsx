import React from 'react'

const Button = ({children, btnType="primary-cta", ...props}) => {
  return (
    <button className={`py-4 px-6 rounded-full transition-all duration-300 ease-in-out ${btnType==='primary-cta'?'bg-default-primary-cta hover:bg-hover-primary-cta text-white' : 'border border-default-secondary-cta-border bg-default-secondary-cta hover:bg-hover-secondary-cta'}`} {...props}>{children}</button>
  )
}

export default Button