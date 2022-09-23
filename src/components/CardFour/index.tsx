import * as React from 'react'

import style from './style.module.less'

const ZLCardFour = (props: {
  imgUrl: any
  title?: string
  desc: string
  imgTitle?: string
}) => {
  // state & props
  const { imgUrl, title, desc, imgTitle } = props

  return (
    <div className={style.zlCardFourWrapper}>
      <div className={style.img} style={{ backgroundImage: `url(${imgUrl})` }}>
        {/* <img src={imgUrl} /> */}
        {imgTitle}
      </div>
      <div className={style.desc}>
        <span className={style.title}>{title}</span>
        <br />
        <span>{desc}</span>
      </div>
    </div>
  )
}

export default ZLCardFour
