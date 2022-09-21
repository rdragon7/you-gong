import * as React from 'react'

import style from './style.module.less'

const ZLIcon = (props: { icon: any }) => {
  // state & props
  const { icon } = props

  return (
    <div className={style.zlIconWrapper}>
      <div className={style.content}>
        <img src={icon} alt="" />
      </div>
    </div>
  )
}

export default ZLIcon
