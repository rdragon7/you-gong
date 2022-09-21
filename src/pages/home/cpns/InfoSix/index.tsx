import * as React from 'react'

import style from './style.module.less'
import info13 from '@/assets/images/home/info13.png'
import info14 from '@/assets/images/home/info14.png'
import info15 from '@/assets/images/home/info15.png'
import info16 from '@/assets/images/home/info16.png'

const ZLInfoSix = () => {
  return (
    <div className={style.zlInfoSixWrapper}>
      <h2 className={style.title}>区块链+金融：解决方案多元化</h2>
      <div className={style.content}>
        <div className={style.info}>
          <h2 className={style.desc}>案例一：区块链农产品溯源系统</h2>
          <div className={style.img}>
            <img src={info13} alt="" />
          </div>
        </div>
        <div className={style.info}>
          <h2 className={style.desc}>案例二：供应链溯源</h2>
          <div className={style.img}>
            <img src={info14} alt="" />
          </div>
        </div>
        <div className={style.info}>
          <h2 className={style.desc}>案例三：供应链溯源</h2>
          <div className={style.img}>
            <img src={info15} alt="" />
          </div>
        </div>
        <div className={style.info}>
          <h2 className={style.desc}>案例四：跨境电商溯源</h2>
          <div className={style.img}>
            <img src={info16} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ZLInfoSix
