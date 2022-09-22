import * as React from 'react'

import style from './style.module.less'

const ZLLittleCardTwo = (props: { info: any }) => {
  // state & props
  const { info } = props

  return (
    <div className={style.zlLittleCardWrapper}>
      <div className={style.img}>
        <span>{info.icon}</span>
      </div>
      <div className={style.content}>
        <span className={style.title}>{info.title}</span>
        <span className={style.desc}>{info.desc}</span>
      </div>
    </div>
  )
}

export default ZLLittleCardTwo
