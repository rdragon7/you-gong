import * as React from 'react'

import ZLIcon from '@/components/Icon'

import style from './style.module.less'
import info7 from '@/assets/images/home/info7.png'
import icon1 from '@/assets/images/home/icon1.png'
import icon2 from '@/assets/images/home/icon2.png'
import icon3 from '@/assets/images/home/icon3.png'

const ZLInfoTwo = () => {
  return (
    <div className={style.zlInfoTwoWrapper}>
      <h2 className={style.title}>开源链+商业链支持：真正为客户着想</h2>
      <div className={style.content}>
        <ul className={style.left}>
          <li>
            <div className={style.icon}>
              <ZLIcon icon={icon1} />
            </div>
            <div className={style.desc}>
              <span>
                我们在设计溯源系统的时候，充分考虑了多链的支持，以及无缝切换。目前开源链我们以HyperLedge，以太坊，EOS
                为底层链模块，商业链以HyperChain，比原链和Nervos为底层链模块。
              </span>
            </div>
          </li>
          <li>
            <div className={style.icon}>
              <ZLIcon icon={icon2} />
            </div>
            <div className={style.desc}>
              <span>
                趣链科技研发的中国自主产权的HyperChain,为我们提供了一整套的应用生态，在易用性以及性能加密体系和安全性方面均走在联盟链的前列。
              </span>
            </div>
          </li>
          <li>
            <div className={style.icon}>
              <ZLIcon icon={icon3} />
            </div>
            <div className={style.desc}>
              <span>
                HyperLedger V2.0
                在性能、安全性、功能方面均有质的飞跃，在开源联盟链的领域处于领先位置。
              </span>
            </div>
          </li>
        </ul>
        <div className={style.right}>
          <img src={info7} alt="" />
        </div>
      </div>
    </div>
  )
}

export default ZLInfoTwo
