import * as React from 'react'

import ZLProductInfoOne from './cpns/InfoOne'
import ZLProductInfoTwo from './cpns/InfoTwo'
import ZLProductInfoThree from './cpns/InfoThree'
import ZLProductInfoFour from './cpns/InfoFour'
import ZLProductInfoFive from './cpns/InfoFive'

import style from './style.module.less'
import lunbo1 from '@/assets/images/home/lunbo1.png'

const ZLProduct = () => {
  return (
    <div className={style.zlProductWrapper}>
      <div className={style.lunbo}>
        <img src={lunbo1} alt="" />
        <div className={style.ld}>
          <span>杭州友恭科技有限公司</span>
          <br />
          <span>我们致力于为更多的客户提供了更专业的基于区块链的溯源系统</span>
        </div>
      </div>
      <div className={style.container}>
        <h2 className={style.title}>
          <span className={style.titleOne}>产品溯源&nbsp;/&nbsp;</span>
          <span className={style.titleTwo}>product traceability</span>
        </h2>
        <ZLProductInfoOne />
        <ZLProductInfoTwo />
        <ZLProductInfoThree />
        <ZLProductInfoFour />
        <ZLProductInfoFive />
      </div>
    </div>
  )
}

export default ZLProduct
