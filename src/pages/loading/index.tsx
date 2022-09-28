import * as React from 'react'

import { Spin } from 'antd'

import style from './style.module.less'

const ZLLoading = () => {
  return (
    <div className={style.zlLoadingWrapper}>
      <Spin tip="Loading..." />
    </div>
  )
}

export default ZLLoading
