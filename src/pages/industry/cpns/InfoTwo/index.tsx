import * as React from 'react'

import ZLTitle from '@/components/Title'

import style from './style.module.less'
import industry1 from '@/assets/images/industry/industry1.png'
import industry2 from '@/assets/images/industry/industry2.png'
import industry3 from '@/assets/images/industry/industry3.png'
import industry4 from '@/assets/images/industry/industry4.png'
import industry5 from '@/assets/images/industry/industry5.jpg'

const ZLIndustryTwo = () => {
  return (
    <div className={style.zlIndustryTwoWrapper}>
      <ZLTitle title="供应链溯源" isHurt={true} />
      <div className={style.content}>
        <ul className={style.left}>
          <li>
            <img src={industry1} alt="" />
            <div>
              <span>构建全产业链分布式信息溯源体系</span>
            </div>
          </li>
          <li>
            <img src={industry2} alt="" />
            <div>
              <span>实现跨国、跨地域供应链数据共享</span>
            </div>
          </li>
          <li>
            <img src={industry3} alt="" />
            <div>
              <span>利用电子签名技术保证信息录入主体的真实性</span>
            </div>
          </li>
          <li>
            <img src={industry4} alt="" />
            <div>
              <span>提高供应链溯源透明度，保证消费者权益</span>
            </div>
          </li>
        </ul>
        <div className={style.right}>
          <img src={industry5} alt="" />
        </div>
      </div>
    </div>
  )
}

export default ZLIndustryTwo
