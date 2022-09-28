import * as React from 'react'

import ZLCard from '@/components/Card'

import style from './style.module.less'
import info1 from '@/assets/images/home/info1.png'
import info2 from '@/assets/images/home/info2.png'
import info3 from '@/assets/images/home/info3.jpg'
import info4 from '@/assets/images/home/info4.png'
import info5 from '@/assets/images/home/info5.png'
import info6 from '@/assets/images/home/info6.png'

const ZLInfoOne = () => {
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
      id: 3,
      desc: '从原材料、生产商、质检、物流、区域代理商、区域经销商、零售商、终端等每个环节，客户均都清晰可见。',
      imgUrl: info3
    },
    {
      id: 4,
      desc: '物联网设备的接入及数据上链，为用户对原材料生产、加工有更直观、更清晰的了解和监督。',
      imgUrl: info4
    },
    {
      id: 5,
      desc: '物联网设备+区块链技术+溯源管理Baas平台，与已有的系统无缝集成。',
      imgUrl: info5
    },
    {
      id: 6,
      desc: '.区块链溯源让防串货的问题彻底得到解决，代理商可以通过追溯码清楚地知道每个产品的销售区域。',
      imgUrl: info6
    }
  ])

  return (
    <div className={style.zlInfoOneWrapper}>
      <h2 className={style.title}>区块链技术加持“防伪、溯源、验真”彻底颠覆</h2>
      <div className={style.content}>
        {infoOne.map((item: any) => {
          return (
            <React.Fragment key={item.id}>
              <ZLCard info={item} />
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default ZLInfoOne
