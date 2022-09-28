import * as React from 'react'

import { NavLink } from 'react-router-dom'

import style from './style.module.less'

const ZLCardTwo = (props: { info: any }) => {
  // state & props
  const { info } = props

  return (
    <div className={style.zlCardTwoWrapper}>
      <div className={style.icon}>
        <info.icon />
      </div>
      <div className={style.desc}>
        <span>{info.title}</span>
      </div>
      <div className={style.go}>
        <NavLink to={info.path}>
          <span className={style.ic}>-&gt;</span>
        </NavLink>
      </div>
    </div>
  )
}

export default ZLCardTwo
