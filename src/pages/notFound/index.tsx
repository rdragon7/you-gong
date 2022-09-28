import * as React from 'react'

import style from './style.module.less'

const ZLNotFound = () => {
  return (
    <div className={style.zlNotFontWrapper}>
      <div className={style.container}>
        <span>404</span>
        <span>不好意思，页面丢失了</span>
      </div>
    </div>
  )
}

export default ZLNotFound
