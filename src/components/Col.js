import React from 'react'
import style from './app.css'

const Col = ({ children, sm, md, lg }) => {
  return (
    <div
      className={`${style.col} ${sm && style[`sm-${sm}`] || ''} ${md && style[`md-${md}`] || ''} ${lg && style[`lg-${lg}`] || ''}`}>
      {children}
    </div>
  )
}

export default Col
