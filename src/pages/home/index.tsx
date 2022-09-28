import * as React from 'react'

import ZLCarousel from '@/components/Carousel'
import ZLInfoOne from './cpns/InfoOne'
import ZLInfoTwo from './cpns/InfoTwo'
import ZLInfoThree from './cpns/InfoThree'
import ZLInfoFour from './cpns/InfoFour'
import ZLInfoFive from './cpns/InfoFive'
import ZLInfoSix from './cpns/InfoSix'

import style from './style.module.less'

const ZLHome = () => {
  // state & props

  // handles

  return (
    <div className={style.zlHomeWrapper}>
      <div className={style.carousel}>
        <ZLCarousel />
      </div>
      <div className={style.container}>
        <ZLInfoOne />
        <ZLInfoTwo />
        <ZLInfoThree />
        <ZLInfoFour />
        <ZLInfoFive />
        <ZLInfoSix />
      </div>
    </div>
  )
}

export default ZLHome
