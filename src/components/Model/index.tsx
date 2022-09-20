import * as React from 'react'

import style from './style.module.less'

const ZLModel = (props: { info: any }) => {
  // state & props
  const { info } = props

  return (
    <div className={style.zlModelWrapper}>
      {info.map((item: any) => {
        return (
          <div key={item.id} className={style.item}>
            {item.title}
            <span className={style.more}>-&gt;</span>
          </div>
        )
      })}
    </div>
  )
}

export default ZLModel
