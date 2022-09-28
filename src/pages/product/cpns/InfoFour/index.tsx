import * as React from 'react'

import ZLTitle from '@/components/Title'

import style from './style.module.less'
import product27 from '@/assets/images/product/product27.jpg'
import product28 from '@/assets/images/product/product28.png'
import product29 from '@/assets/images/product/product29.jpg'

const ZLProductInfoFour = () => {
  return (
    <div className={style.zlProductInfoFourWrapper}>
      <ZLTitle title="平台运营模式" isHurt={false} />
      <div className={style.content}>
        <div className={style.top}>
          <div className={style.left}>
            <img src={product27} alt="" />
          </div>
          <div className={style.right}>
            <h2 className={style.title}>系统实施与维护</h2>
            <div className={style.info}>
              <span>基础版</span>
              <br />
              <span>
                免费入驻，按基础溯源标签个数收取费用。共享平台湖源链及节点。
              </span>
            </div>
            <div className={style.info}>
              <span>专业版</span>
              <br />
              <span>
                支持溯源标签和查询页面定制化制作。共享平台溯源链，支持自主拥有节点。按基础服务费+标签费用。
              </span>
            </div>
            <div className={style.info}>
              <span>基础版</span>
              <br />
              <span>
                提供完全定制化的溯源系统，拥有独立的溯源链和节点。开发费+维护费的模式收取费用。
              </span>
            </div>
          </div>
        </div>
        <div className={style.bottom}>
          <h2 className={style.bottomTitle}>企业营销代运营</h2>
          <div className={style.bottomContent}>
            <div
              className={style.l}
              style={{ backgroundImage: `url(${product28})` }}
            >
              <div className={style.info}>
                <h3 className={style.infoTitle}>公众号开发与代运营</h3>
                <ul className={style.infoDesc}>
                  <li>企业形象</li>
                  <li>新品推荐</li>
                  <li>渠道管理</li>
                  <li>用户支持</li>
                  <li>公众号管理</li>
                </ul>
              </div>
            </div>
            <div
              className={style.r}
              style={{ backgroundImage: `url(${product29})` }}
            >
              <div className={style.info}>
                <h3 className={style.infoTitle}>智能营销代运营</h3>
                <ul className={style.infoDesc}>
                  <li>会员积分管理</li>
                  <li>在线商城管理</li>
                  <li>渠道管理</li>
                  <li>营销活动管理</li>
                  <li>用户反馈</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ZLProductInfoFour
