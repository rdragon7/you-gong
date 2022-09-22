import * as React from 'react'

import ZLTitle from '@/components/Title'
import ZLCard from '@/components/Card'

import style from './style.module.less'
import industry12 from '@/assets/images/industry/industry12.jpg'
import info13 from '@/assets/images/industry/industry13.png'
import info14 from '@/assets/images/industry/industry14.png'
import info15 from '@/assets/images/industry/industry15.png'
import info16 from '@/assets/images/industry/industry16.png'
import info17 from '@/assets/images/industry/industry17.png'
import info18 from '@/assets/images/industry/industry18.png'

const ZLIndustryFive = () => {
  // state & props
  const [info] = React.useState([
    {
      id: 1,
      desc: '区块链摇号抽奖平台，通过区块链技术实现摇号抽奖过程可信、透明，流程可追溯。',
      imgUrl: info13
    },
    {
      id: 2,
      desc: 'xxx',
      imgUrl: info14
    },
    {
      id: 3,
      desc: '基于ADM/NVID 开发平台，经过长期的算法优化，提供基于各种加密算法下面的区块链验证客户端软件。',
      imgUrl: info15
    },
    {
      id: 4,
      desc: '为计算客户端设备提供统一的调度管理，提高计算的效率以及算力提供方的收益。',
      imgUrl: info16
    },
    {
      id: 5,
      desc: '管理系统与Linux操作系统集成基于U盘启动，极大的方便了计算设备的安装更新。',
      imgUrl: info17
    },
    {
      id: 6,
      desc: '.对计算设备进行统一管理，极大地减少了人工成本，提高了维护的效率，科学管理每台计算设备的负载，实现各种计算加密算法的无缝切换。',
      imgUrl: info18
    }
  ])

  return (
    <div className={style.zlIndustryFiveWrapper}>
      <ZLTitle title="茶叶溯源" isHurt={false} />
      <div className={style.content}>
        <span className={style.desc}>
          以茶叶质量溯源为切入点，提供以区块链技术为基础的解决方案，配合建立标准质量保障体系。为茶叶消费者提供真实可信的信息查询渠道，帮助其验证茶叶的生产信息，保障茶叶公信力，并为企业营造公平竞争、良性健康的法制化经商环境，为茶企业和合作方提供生产溯源一站式服务平台和供应链金融服务平台，优化企业生产供应链，完善茶叶种植生产、检测标准，推动茶叶质量升级。
        </span>
        <div className={style.bg}>
          <img src={industry12} alt="" />
        </div>
        <div className={style.card}>
          {info.map((item: any) => {
            return (
              <React.Fragment key={item.id}>
                <ZLCard info={item} />
              </React.Fragment>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ZLIndustryFive
