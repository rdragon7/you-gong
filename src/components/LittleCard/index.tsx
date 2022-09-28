import * as React from 'react'

import style from './style.module.less'

const ZLLittleCard = (props: {
  icon: any
  title?: string
  desc: string
  imgTitle?: string
}) => {
  // state & props
  const { icon, title, desc } = props

  return (
    <div className={style.zlLittleCardWrapper}>
      <div className={style.img}>
        <img src={icon} alt="" />
      </div>
      <div className={style.content}>
        {title ? <span className={style.title}>{title}</span> : null}

        <span className={style.desc}>{desc}</span>
      </div>
    </div>
  )
}

export default ZLLittleCard
