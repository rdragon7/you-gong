import * as React from 'react'

import style from './style.module.less'

const ZLCardFive = (props: {
  imgUrl: any
  title: string[]
  imgTitle?: string
}) => {
  // state & props
  const { imgUrl, title, imgTitle } = props

  return (
    <div className={style.zlCardFiveWrapper}>
      <div className={style.img} style={{ backgroundImage: `url(${imgUrl})` }}>
        {/* <img src={imgUrl} /> */}
        {imgTitle}
      </div>
      <ul className={style.desc}>
        {title.map((item: any) => {
          return <li key={item}>{item}</li>
        })}
      </ul>
    </div>
  )
}

export default ZLCardFive
