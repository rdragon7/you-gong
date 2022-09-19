import * as React from 'react'

import { Outlet } from 'react-router-dom'
import ZLHeader from '@/components/Header'

import style from './style.module.less'
import ZLFooter from '@/components/Footer'

const ZLLayout = () => {
  return (
    <div className={style.zlLayoutWrapper}>
      <ZLHeader />
      <div className={style.content}>
        <Outlet />
      </div>
      <ZLFooter />
    </div>
  )
}

export default ZLLayout
