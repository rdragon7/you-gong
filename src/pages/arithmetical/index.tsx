import * as React from 'react'

import ZLLittleCard from '@/components/LittleCard'

import style from './style.module.less'
import lunbo1 from '@/assets/images/home/lunbo1.png'
import air1 from '@/assets/images/air/air1.png'
import air2 from '@/assets/images/air/air2.png'
import air3 from '@/assets/images/air/air3.png'
import air4 from '@/assets/images/air/air4.png'
import air5 from '@/assets/images/air/air5.jpg'

const ZLArithmetical = () => {
  return (
    <div className={style.zlArithmeticalWrapper}>
      <div className={style.lunbo}>
        <img src={lunbo1} alt="" />
        <div className={style.ld}>
          <span>杭州友恭科技有限公司</span>
          <br />
          <span>我们致力于为更多的客户提供了更专业的基于区块链的溯源系统</span>
        </div>
      </div>
      <div className={style.content}>
        <div className={style.ls}>
          <h2 className={style.title}>算力管理与运营</h2>
          <div className={style.card}>
            <ZLLittleCard
              icon={air1}
              title="区块链算力客户端软件"
              desc="2014年开始研究区块链公链的算力软件，对设备的功耗和效率经过多年的实践积累了丰富的调优方案。"
            />
            <ZLLittleCard
              icon={air2}
              title="区块链算力管理服务器软件"
              desc="为多个客户提供了基于公链模式的算力服务器平台，使用微服务的架构，在多并发，稳定性以及可移植性方面有独特的优势。"
            />
            <ZLLittleCard
              icon={air3}
              title="区块链算力设备客户端管理系统"
              desc="基于Linux系统定制了基于区块链计算设备的系统，结合服务器管理系统。极大的提升了区块链计算设备的管理能力，节省人力成本，提升机器的利用率。"
            />
            <ZLLittleCard
              icon={air4}
              title="区块链算力管理服务器"
              desc="能够远程管理配置计算设备，提供完善的监控模式，对计算设备的运行设备及时预警及预处理，最大限度的通过自动化手段节省人力成本，提高机器科学稳定的运行率。"
            />
          </div>
        </div>
        <div className={style.ld}>
          <h2 className={style.title}>产品介绍</h2>
          <div className={style.product}>
            <div className={style.desc}>
              <span>
                2014
                年开始研究区块链计算软件，算力管理服务器，计算设备系统和计算设备服务器管理系统。通过长期的沉淀使自己具备了开发各种区块链计算软件的能力，并为多个客户提供了基于公链的整套计算方案。
              </span>
            </div>
            <div className={style.img}>
              <img src={air5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ZLArithmetical
