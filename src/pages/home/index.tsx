import * as React from 'react'

import ZLCarousel from './cpns/Carousel'
import ZLCard from '@/components/Card'

import style from './style.module.less'
import info1 from '@/assets/images/home/info1.png'
import info2 from '@/assets/images/home/info2.png'
import info3 from '@/assets/images/home/info3.jpg'
import info4 from '@/assets/images/home/info4.png'
import info5 from '@/assets/images/home/info5.png'
import info6 from '@/assets/images/home/info6.png'
import info7 from '@/assets/images/home/info7.png'
import info8 from '@/assets/images/home/info8.png'

const ZLHome = () => {
  // state & props
  const [infoOne] = React.useState([
    {
      id: 1,
      desc: '区块链不可篡改，去中心化的特性被业界一致认为是防伪、溯源、验真的最佳解决方案，并逐渐被应用到各个行业中。',
      imgUrl: info1
    },
    {
      id: 2,
      desc: '一物一码：区块链系统和产品识别码相结合，从区块中通过共识产生识别码的初始信息并发行识别码，通过识别码标记产品身份，上传每个流通环节的产品信息到区块链，从源头到终端为消费者形成一个闭环。',
      imgUrl: info2
    },
    {
      id: 1,
      desc: '从原材料、生产商、质检、物流、区域代理商、区域经销商、零售商、终端等每个环节，客户均都清晰可见。',
      imgUrl: info3
    },
    {
      id: 1,
      desc: '物联网设备的接入及数据上链，为用户对原材料生产、加工有更直观、更清晰的了解和监督。',
      imgUrl: info4
    },
    {
      id: 1,
      desc: '物联网设备+区块链技术+溯源管理Baas平台，与已有的系统无缝集成。',
      imgUrl: info5
    },
    {
      id: 1,
      desc: '.区块链溯源让防串货的问题彻底得到解决，代理商可以通过追溯码清楚地知道每个产品的销售区域。',
      imgUrl: info6
    }
  ])

  // handles

  return (
    <div className={style.zlHomeWrapper}>
      <ZLCarousel />
      <div className={style.info}>
        <div className={style.item1 + ' wrap-v1'}>
          <h2 className={style.title}>
            区块链技术加特“防伪、溯源、验真”彻底颠覆
          </h2>
          <div className={style.card}>
            {infoOne.map((item: any) => {
              return (
                <React.Fragment key={item.id}>
                  <ZLCard info={item} />
                </React.Fragment>
              )
            })}
          </div>
        </div>
        <div className={style.item2 + ' wrap-v2'}>
          <h2 className={style.title}>开源链+商业链支持：真正为客户着想</h2>
          <div className={style.content}>
            <div className={style.left}>
              <ul>
                <li>
                  <span>
                    我们在设计溯源系统的时候，充分考虑了多链的支持，以及无缝切换。目前开源链我们以HyperLedge，以太坊，EOS
                    为底层链模块，商业链以HyperChain，比原链和Nervos为底层链模块。
                  </span>
                </li>
                <li>
                  <span>
                    趣链科技研发的中国自主产权的HyperChain,为我们提供了一整套的应用生态，在易用性以及性能加密体系和安全性方面均走在联盟链的前列。
                  </span>
                </li>
                <li>
                  <span>
                    HyperLedger V2.0
                    在性能、安全性、功能方面均有质的飞跃，在开源联盟链的领域处于领先位置。
                  </span>
                </li>
              </ul>
            </div>
            <div className={style.right}>
              <img src={info7} alt="" />
            </div>
          </div>
        </div>
        <div className={style.item3 + ' wrap-v1'}>
          <h2 className={style.title}>
            物联网+区块链：从源头到终端为客户提供解决方案
          </h2>
          <div className={style.content}>
            <span>
              公司基于树莓派平台，结合主流的传感器设备，从可移植性，最大程度兼容以及成本性能的综合测试实验，开发了适配自己溯源平台的物联网解决方案，从源头到每个流通环节均可接入物联网设备，从而使信息更加可视化。
            </span>
            <div className={style.img}></div>
          </div>
        </div>
        <div>
          <h2>一物一“码”：支持各种码，满足不同需求</h2>
        </div>
        <div>
          <h2>“区块链技术”加特，让信息更透明</h2>
        </div>
        <div>
          <h2>区块链+金融：解决方案多元化</h2>
        </div>
      </div>
    </div>
  )
}

export default ZLHome
