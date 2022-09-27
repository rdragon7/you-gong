import * as React from 'react'

import { Outlet } from 'react-router-dom'
import ZLHeader from '@/components/Header'

import style from './style.module.less'
import ZLFooter from '@/components/Footer'
import ZLSlider from '@/components/Slider'

const ZLLayout = () => {
  return (
    <div className={style.zlLayoutWrapper}>
      <ZLHeader />
      <div className={style.content}>
        <Outlet />
      </div>
      <ZLSlider />
      <ZLFooter />
    </div>
  )
}

export default ZLLayout
