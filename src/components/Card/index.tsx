import * as React from 'react'

import style from './style.module.less'

const ZLCard = (props: { info: any }) => {
  // state & props
  const { info } = props

  return (
    <div className={style.zlCardWrapper}>
      <div className={style.img}>
        <img src={info.imgUrl} />
      </div>
      <div className={style.desc}>{info.desc}</div>
    </div>
  )
}

export default ZLCard
