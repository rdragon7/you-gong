import * as React from 'react'

import style from './style.module.less'
import info8 from '@/assets/images/home/info8.png'
import back1 from '@/assets/images/home/back1.jpg'

const ZLInfoThree = () => {
  // handles
  const infoThreeStyle = {
    background: `url(${back1})`
  }

  return (
    <div className={style.zlInfoThreeWrapper} style={infoThreeStyle}>
      <h2 className={style.title}>
        物联网+区块链：从源头到终端为客户提供解决方案
      </h2>
      <div className={style.content}>
        <span className={style.desc}>
          公司基于树莓派平台，结合主流的传感器设备，从可移植性，最大程度兼容以及成本性能的综合测试实验，开发了适配自己溯源平台的物联网解决方案，从源头到每个流通环节均可接入物联网设备，从而使信息更加可视化。
        </span>
        <div className={style.img}>
          <img src={info8} alt="" />
        </div>
      </div>
    </div>
  )
}

export default ZLInfoThree
