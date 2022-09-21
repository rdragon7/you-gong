import ZLCard from '@/components/Card'
import * as React from 'react'

import style from './style.module.less'
import info9 from '@/assets/images/home/info9.jpg'
import info10 from '@/assets/images/home/info10.jpg'
import info11 from '@/assets/images/home/info11.png'

const ZLInfoFour = () => {
  // state & props
  const [infoFour] = React.useState([
    {
      id: 1,
      desc: '可酸入或附看在各种形态的产品上，且可为标签故据的读写设置密码保护，具有更高的安全性和防伪能力。',
      descTitle: 'RFID防伪',
      imgUrl: info9
    },
    {
      id: 2,
      desc: '一物一码：区块链系统和产品识别码相结合，从区块中通过共识产生识别码的初始信息并发行识别码，通过识别码标记产品身份，上传每个流通环节的产品信息到区块链，从源头到终端为消费者形成一个闭环。',
      descTitle: 'NFC芯片防伪',
      imgUrl: info10
    },
    {
      id: 3,
      desc: '从原材料、生产商、质检、物流、区域代理商、区域经销商、零售商、终端等每个环节，客户均都清晰可见。',
      descTitle: '二维码防伪',
      imgUrl: info11
    }
  ])

  return (
    <div className={style.zlInfoFourWrapper}>
      <h2 className={style.title}>一物一“码”：支持各种码，满足不同需求</h2>
      <div className={style.content}>
        {infoFour.map((item: any) => {
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

export default ZLInfoFour
