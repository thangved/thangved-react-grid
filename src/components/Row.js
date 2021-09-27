import React from 'react'
import style from './app.css'

const Row = ({ children }) => {
  return (
    <div className={style.row}>
      {children}
    </div>
  )
}

export default Row
