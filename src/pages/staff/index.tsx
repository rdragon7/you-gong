import * as React from 'react'

import style from './style.module.less'
import intro1 from '@/assets/images/intro/intro1.png'
import staff1 from '@/assets/images/staff/staff1.png'

const ZLStaff = () => {
  return (
    <div className={style.zlStaffWrapper}>
      <div className={style.header}>
        <img src={intro1} alt="" />
        <div className={style.desc}>
          <span className={style.itemOne}>
            致力于提供更专业的基于区块链的溯源系统
          </span>
        </div>
      </div>
      <div className={style.content}>
        <h2 className={style.title}>团队</h2>
        <div className={style.desc}>
          <div className={style.info}>
            <div className={style.img}>
              <img src={staff1} alt="" />
            </div>
            <div className={style.if}>
              <h2 className={style.user}>李博士</h2>
              <span className={style.ls}>首席科学家</span>
              <br />
              <span className={style.ld}>
                CCF区块链专委会委员，科技部在库专家。
                <br />
                研究方向：软件工程、多方计算、智能合约、联盟链共识
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ZLStaff
