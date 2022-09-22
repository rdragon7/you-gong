import * as React from 'react'
import { NavLink } from 'react-router-dom'

import style from './style.module.less'

const ZLModel = (props: { info: any }) => {
  // state & props
  const { info } = props

  return (
    <div className={style.zlModelWrapper}>
      {info.map((item: any) => {
        return (
          <React.Fragment key={item.id}>
            <NavLink to={item.path}>
              <div key={item.id} className={style.item}>
                {item.title}
                <span className={style.more}>-&gt;</span>
              </div>
            </NavLink>
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default ZLModel
