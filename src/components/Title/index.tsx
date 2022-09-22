import * as React from 'react'

import style from './style.module.less'

const ZLTitle = (props: { title: string; isHurt: boolean }) => {
  // state & props
  const { title, isHurt } = props
  return (
    <div className={style.zlTitleWrapper}>
      <div className={style.box}></div>
      <div className={style.content}>
        <span>{title}</span>
        <span className={isHurt ? style.hurt : style.noHurt}>
          &nbsp;-&nbsp;解决痛点
        </span>
      </div>
    </div>
  )
}

export default ZLTitle
