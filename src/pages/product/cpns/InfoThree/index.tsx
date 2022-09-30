import * as React from 'react'

import ZLTitle from '@/components/Title'
import ZLCardFive from '@/components/CardFive'

import style from './style.module.less'
import product25 from '@/assets/images/product/product25.jpg'
import product26 from '@/assets/images/product/product26.jpg'

const ZLProductInfoThree = () => {
  return (
    <div className={style.zlProductInfoThreeWrapper}>
      <ZLTitle title="平台架构" isHurt={false} />
      <div className={style.content}>
        <div className={style.col}>
          <div className={style.colOne}>
            <div style={{ backgroundImage: `url(${product25})` }}>
              <span>溯源防伪一体化识别标签（纹理式/RFID）</span>
            </div>
          </div>
          <div className={style.colTwo}>
            <div style={{ backgroundImage: `url(${product25})` }}>
              <span>微信公众号</span>
            </div>
            <div style={{ backgroundImage: `url(${product25})` }}>
              <span>手持式硬件+app</span>
            </div>
            <div style={{ backgroundImage: `url(${product25})` }}>
              <span>管理平台</span>
            </div>
          </div>
          <div className={style.colThree}>
            <div style={{ backgroundImage: `url(${product25})` }}>
              <span>物联网数据采集设备</span>
            </div>
            <div style={{ backgroundImage: `url(${product25})` }}>
              <span>后台服务框架</span>
            </div>
          </div>
          <div className={style.colFour}>
            <div style={{ backgroundImage: `url(${product25})` }}>
              <span>关系型数据库</span>
            </div>
            <div style={{ backgroundImage: `url(${product25})` }}>
              <span>分布式缓存服务</span>
            </div>
          </div>
          <div className={style.colFive}>
            <div style={{ backgroundImage: `url(${product25})` }}>
              <span>智能合约</span>
            </div>
          </div>
          <div className={style.colSix}>
            <div style={{ backgroundImage: `url(${product25})` }}>
              <span>联盟链</span>
            </div>
          </div>
        </div>
        <div className={style.principle}>
          <h2 className={style.title}>架构设计原则</h2>
          <div className={style.con}>
            <ZLCardFive
              imgUrl={product26}
              title={['ERP系统', '仓储物流系统', '营销体系管理']}
              imgTitle="考虑与企业现有IT系统集成"
            />
            <ZLCardFive
              imgUrl={product26}
              title={['私有化部署VS SAAS', '模块化部署与集成']}
              imgTitle="灵活的部署与集成方式"
            />
            <ZLCardFive
              imgUrl={product26}
              title={['输出IT能力', '输出运营能力']}
              imgTitle="多层次一体化的服务能力"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ZLProductInfoThree
