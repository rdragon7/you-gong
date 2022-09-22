import * as React from 'react'

import ZLCardThree from '@/components/CardThree'

import style from './style.module.less'
import lunbo1 from '@/assets/images/home/lunbo1.png'
import finance1 from '@/assets/images/finance/finance1.png'
import finance2 from '@/assets/images/finance/finance2.png'
import finance3 from '@/assets/images/finance/finance3.png'

const ZLFinance = () => {
  // state & props
  const [info] = React.useState([
    {
      id: 1,
      title: '券商报送系统',
      desc: '解决券商企业上报数据至交易所的数据处理过程并提供解决方案',
      imgUrl: finance1
    },
    {
      id: 2,
      title: '私钥管理工具',
      desc: '一整套针对数字虚拟钱包的软件+硬件私钥托管方案',
      imgUrl: finance2
    },
    {
      id: 3,
      title: '数据货币钱包',
      desc: '应用于数据虚拟货币的钱包工具，提供多种加密方式',
      imgUrl: finance3
    }
  ])
  const [info2] = React.useState([
    {
      id: 1,
      title: '外卖行业电瓶车改造',
      desc: '外卖行业电瓶车改造一体化解决方案：由上海市政府牵头，统一生产符合规范要求的电瓶车，外卖平台注册的外卖小哥，必须从指定店铺租赁使用，规范了电瓶车市场也满足了使用需要。',
      imgUrl: finance1
    },
    {
      id: 2,
      title: '再生资源回收',
      desc: '本项目服务于整条资源回收链条实现闭环，全过程涉及订单管理，电子合同，费用核销，电子发票实现商品流转+财务闭环。以APP作为载体实现了业务全路径管理。',
      imgUrl: finance2
    },
    {
      id: 3,
      title: '智慧社区运营',
      desc: '协助某房地产公司建设智慧社区，实现社区现代化治理，依托微信小程序平台，搭建社区便民服务站点，运用AI、IoT、大数据等相关技术，致力于为社区居民提供多种便捷服务。',
      imgUrl: finance3
    }
  ])

  return (
    <div className={style.zlFinanceWrapper}>
      <div className={style.lunbo}>
        <img src={lunbo1} alt="" />
        <div className={style.ld}>
          <span>杭州友恭科技有限公司</span>
          <br />
          <span>我们致力于为更多的客户提供了更专业的基于区块链的溯源系统</span>
        </div>
      </div>
      <div className={style.content}>
        <h2 className={style.title}>
          <span className={style.titleOne}>金融科技与运营&nbsp;/&nbsp;</span>
          <span className={style.titleTwo}>
            Financial technology and operation
          </span>
        </h2>
        <div className={style.card}>
          {info.map((item: any) => {
            return (
              <div className={style.item} key={item.id}>
                <ZLCardThree info={item} />
              </div>
            )
          })}
        </div>
        <h2 className={style.title}>
          <span className={style.titleOne}>数字化转型与运营&nbsp;/&nbsp;</span>
          <span className={style.titleTwo}>
            Financial technology and operation
          </span>
        </h2>
        <div className={style.card}>
          {info2.map((item: any) => {
            return (
              <div className={style.item} key={item.id}>
                <ZLCardThree info={item} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ZLFinance
