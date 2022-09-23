import * as React from 'react'

import ZLTitle from '@/components/Title'

import style from './style.module.less'
import product30 from '@/assets/images/product/product30.png'
import product31 from '@/assets/images/product/product31.png'
import product32 from '@/assets/images/product/product32.png'

const ZLProductInfoFive = () => {
  return (
    <div className={style.zlProductInfoFiveWrapper}>
      <ZLTitle title="典型应用场景" isHurt={false} />
      <div className={style.content}>
        <div className={style.ls}>
          <h2 className={style.title}>生产管理-防伪溯源</h2>
          <div className={style.img}>
            <img src={product30} alt="" />
          </div>
        </div>
        <div className={style.ls}>
          <h2 className={style.title}>供应链管理</h2>
          <div className={style.img}>
            <img src={product31} alt="" />
          </div>
        </div>
        <div className={style.ls}>
          <h2 className={style.title}>企业营销管理</h2>
          <div className={style.img}>
            <img src={product32} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ZLProductInfoFive
