import * as React from 'react'

import ZLTitle from '@/components/Title'

import style from './style.module.less'
import industry11 from '@/assets/images/industry/industry11.jpg'

const ZLIndustryFour = () => {
  return (
    <div className={style.zlIndustryFourWrapper}>
      <ZLTitle title="跨境电商溯源" isHurt={false} />
      <div className={style.content}>
        <span className={style.desc}>
          通过区块链追溯境外电商产品的流通中的各个环节，为消费者提供真实透明的追溯信息，为商家提供更多的商机。
        </span>
        <div className={style.bg}>
          <img src={industry11} alt="" />
        </div>
      </div>
    </div>
  )
}

export default ZLIndustryFour
