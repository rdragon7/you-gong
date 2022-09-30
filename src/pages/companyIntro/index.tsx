import * as React from 'react'

import style from './style.module.less'
import intro1 from '@/assets/images/intro/intro1.png'
import intro2 from '@/assets/images/intro/intro2.png'
import intro3 from '@/assets/images/intro/intro3.png'
import intro4 from '@/assets/images/intro/intro4.png'
import intro5 from '@/assets/images/intro/intro5.jpg'

const ZLCompanyIntro = () => {
  return (
    <div className={style.zlCompanyIntroWrapper}>
      <div className={style.header}>
        <img src={intro1} alt="" />
        <div className={style.descOne}>
          <span className={style.itemOne}>
            致力于提供更专业的基于区块链的溯源系统
          </span>
        </div>
      </div>
      <div className={style.info}>
        <h2 className={style.title}>简介</h2>
        <div className={style.descOne}>
          <p className={style.origin}>
            友恭的名字源于《史记》 -
            “兄友弟恭，内平外成”，形容兄弟间互爱互敬。团队从2014年相聚开始就秉承着兄弟齐心，其利断金的信念，共同渡过挑战起伏，在数字化转型、金融科技和区块链技术上都积累了丰富经验。
          </p>
        </div>
        <div className={style.descTwo}>
          <img src={intro5} alt="" />
          <div className={style.right}>
            <h3 className={style.ll}>积累沉淀</h3>
            <p className={style.origin}>
              公司成立的时间虽短，但创始团队在金融科技领域有长期的实践，在中后台业务系统上有丰富经验。从2014年开始就在区块链和数字化技术上也开展了研究和项目实践，有溯源系统、矿池系统和密钥管理系统的开发维护经验，有数字社区与生产管理系统的开发维护经验。
            </p>
          </div>
        </div>
      </div>
      <div className={style.cooperation}>
        <h2 className={style.title}>合作对象</h2>
        <div className={style.content}>
          <div className={style.desc}>
            <span>
              公司与多个开源组织和商业机构开展合作，推动金融科技和区块链技术落地，实现技术共享，合作共赢，建立了综合的业务生态。
            </span>
          </div>
          <div className={style.info2}>
            <h3>金融科技</h3>
            <div className={style.img}>
              <img src={intro2} alt="" />
            </div>
          </div>
          <div className={style.info2}>
            <h3>数字化转型</h3>
            <div className={style.img}>
              <img src={intro2} alt="" />
            </div>
          </div>
          <div className={style.info2}>
            <h3>区块链技术</h3>
            <div className={style.img}>
              <img src={intro3} alt="" />
              <img src={intro4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ZLCompanyIntro
