import * as React from 'react'
import { NavLink } from 'react-router-dom'

import style from './style.module.less'

const ZLFooter = () => {
  return (
    <div className={style.zlFooterWrapper}>
      <div className={style.content}>
        <p>版权所有&copy;杭州友恭科技有限公司</p>
        <p className={style.shou}>
          售后：0571-86772312&nbsp;&nbsp;&nbsp;&nbsp;邮箱：surport@yougong.com
          &nbsp;&nbsp;&nbsp;&nbsp;微信公众号：xxxxx
        </p>
        <p className={style.concat}>
          <NavLink to="/concat">联系我们</NavLink>
        </p>
        <p>总部地址：杭州市西湖区西溪银泰南2号楼7层703室</p>
      </div>
    </div>
  )
}

export default ZLFooter
