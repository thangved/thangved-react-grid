import React from 'react'
import style from './app.css'

const Container = ({ children, wide }) => {
  return (
    <div className={`${style.container} ${wide && style.wide}`}>
      {children}
    </div>
  )
}

export default Container
