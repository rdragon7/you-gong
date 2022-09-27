import * as React from 'react'

import ZLTitle from '@/components/Title'
import ZLLittleCard from '@/components/LittleCard'
import ZLCardFour from '@/components/CardFour'
import ZLIcon from '@/components/Icon'

import style from './style.module.less'
import product1 from '@/assets/images/product/product1.png'
import product2 from '@/assets/images/product/product2.png'
import product3 from '@/assets/images/product/product3.png'
import product8 from '@/assets/images/product/product8.png'
import product33 from '@/assets/images/product/product33.png'
import product34 from '@/assets/images/product/product34.png'
import product35 from '@/assets/images/product/product35.png'
import product36 from '@/assets/images/product/product36.png'

const ZLProductInfoOne = () => {
  return (
    <div className={style.zlProductInfoOneWrapper}>
      <ZLTitle title="产品介绍" isHurt={false} />
      <div className={style.content}>
        <div className={style.intro}>
          <ZLLittleCard
            icon={product1}
            desc="以不同形态的防伪标签及二维码为入口，围绕特定产品的生产、加工、运转和终端消费全周期，将不同组织、不同角色于微信公众号联结在一起。"
          />
          <ZLLittleCard
            icon={product2}
            desc="依托于区块链底层设施，提供可信、完整的产品生命周期数据，并以灵活的方式在不同的力度上与企业现有IT能力集成，提升企业管理水平。"
          />
          <ZLLittleCard
            icon={product3}
            desc="模块化设计，提供灵活的部署方式 （云端与私有化）与服务方式（纯后端系统技术服务及公众号代运营服务）等。"
          />
        </div>
        <div className={style.target}>
          <h2 className={style.title}>建设目标</h2>
          <div className={style.targetContent}>
            <ul className={style.left}>
              <li>
                <div className={style.icon}>
                  <ZLIcon icon={product33} />
                </div>
                <div className={style.desc}>
                  <span>流通数据全程上链</span>
                  <br />
                  <span>
                    将生产流通数据上链后，各参与主体可以共享数据，降低各主体间的通讯协作成本。
                  </span>
                </div>
              </li>
              <li>
                <div className={style.icon}>
                  <ZLIcon icon={product34} />
                </div>
                <div className={style.desc}>
                  <span>溯源数据防篡改溯源链提供信用背书</span>
                  <br />
                  <span>
                    利用区块链的共识机制的特性，平台参与方共同对数据真实性做背书，并且平台提供交叉验证。充分保证数据的真实可信。
                  </span>
                </div>
              </li>
              <li>
                <div className={style.icon}>
                  <ZLIcon icon={product35} />
                </div>
                <div className={style.desc}>
                  <span>掌握终端销售数据为参与方提供参考</span>
                  <br />
                  <span>
                    利用终端用户防伪查询的机会，获取产品用户的消费行为。并对消费数据分析处理后提供给生产商和销售商，为生产和销售决策提供数据支撑。
                  </span>
                </div>
              </li>
              <li>
                <div className={style.icon}>
                  <ZLIcon icon={product36} />
                </div>
                <div className={style.desc}>
                  <span>平台数据统计分析</span>
                  <br />
                  <span>
                    对平台的湖源数据及消费者验证查询数据进行统计分析，将结果整理后握供给入驻商家。
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.new}>
          <h2 className={style.title}>新技术融合</h2>
          <div className={style.content}>
            <div className={style.newTop}>
              <ZLCardFour
                imgUrl={product8}
                title="可溯源"
                desc="为生产商、加工商、物流商、合被提供商、终端育费者等提供信用背书"
                imgTitle="不可篡改"
              />
              <ZLCardFour
                imgUrl={product8}
                title="数据共享"
                desc="每个坏节打通后，可以将产业链数据打通，同时还可以应用供应链金融"
                imgTitle="联盟链"
              />
              <ZLCardFour
                imgUrl={product8}
                title="共识机制"
                desc="传统采用类似物联网的二维码无线射频识别基础已然是中心化的。区块链可以用共识机制将数据去中心化存放"
                imgTitle="物联网"
              />
            </div>
            <div className={style.newBottom}>
              <ZLCardFour
                imgUrl={product8}
                desc="供应链本身就量链路的特性，现在结合区块锚，所以更多是联盟链的角色，将各个原来信息孤岛的数据打通，实现数据不被篡改和可溯源。但是由于内部流传的代币体系，可以使更多链路之外的人也可以实现提供信息，保证了供应链上的上链和传播过程的真实性。"
                imgTitle="供应链"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ZLProductInfoOne
