import * as React from 'react'

import ZLLittleCard from '@/components/LittleCard'

import style from './style.module.less'
import info12 from '@/assets/images/home/info12.png'
import icon4 from '@/assets/images/home/icon4.png'
import icon5 from '@/assets/images/home/icon5.png'
import icon6 from '@/assets/images/home/icon6.png'
import icon7 from '@/assets/images/home/icon7.png'
import back2 from '@/assets/images/home/back2.png'

const ZLInfoFive = () => {
  // state & props

  // handles
  const infoFiveStyle = {
    background: `url(${back2})`
  }

  return (
    <div className={style.zlInfoFiveWrapper} style={infoFiveStyle}>
      <h2 className={style.title}>“区块链技术”加持，让信息更透明</h2>
      <div className={style.content}>
        <div className={style.left}>
          <div className={style.card}>
            <ZLLittleCard
              icon={icon4}
              title="数据真正共享"
              desc="区块链去中心化的特点使每个参与方均可保存一份数据。"
            />
            <ZLLittleCard
              icon={icon5}
              title="多方共识"
              desc="每一笔数据的记录都需要每个节点的共识才能完成，如果没有达成共识，交易将自动失败。"
            />
          </div>
        </div>
        <div className={style.center}>
          <img src={info12} alt="" />
        </div>
        <div className={style.right}>
          <div className={style.card}>
            <ZLLittleCard
              icon={icon6}
              title="不可篡改"
              desc="没有其他参与方的同意，任何一方无法修改数据。"
            />
            <ZLLittleCard
              icon={icon7}
              title="数据零依赖"
              desc="若想要查看数据，从自己的节点直接获取即可。"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ZLInfoFive
