import * as React from 'react'

import ZLTitle from '@/components/Title'

import style from './style.module.less'
import industry6 from '@/assets/images/industry/industry6.png'
import industry7 from '@/assets/images/industry/industry7.png'
import industry8 from '@/assets/images/industry/industry8.png'
import industry9 from '@/assets/images/industry/industry9.png'
import industry10 from '@/assets/images/industry/industry10.png'

const ZLIndustryThree = () => {
  return (
    <div className={style.zlIndustryThreeWrapper}>
      <ZLTitle title="保健品溯源" isHurt={false} />
      <div className={style.content}>
        <ul className={style.left}>
          <li>
            <img src={industry6} alt="" />
            <div>
              <span>
                通过将溯源码关联生产过程中产生的批次号，提高全产业链信息透明度
              </span>
            </div>
          </li>
          <li>
            <img src={industry7} alt="" />
            <div>
              <span>消费者扫描溯源码查看溯源全流程信息，保障其权益</span>
            </div>
          </li>
          <li>
            <img src={industry8} alt="" />
            <div>
              <span>利用电子签名技术保证信息录入主体的真实性</span>
            </div>
          </li>
          <li>
            <img src={industry9} alt="" />
            <div>
              <span>防伪验证保证品牌权益</span>
            </div>
          </li>
        </ul>
        <div className={style.right}>
          <img src={industry10} alt="" />
        </div>
      </div>
    </div>
  )
}

export default ZLIndustryThree
