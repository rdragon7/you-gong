import * as React from 'react'

import {
  PhoneOutlined,
  ClockCircleOutlined,
  WechatOutlined,
  ArrowUpOutlined
} from '@ant-design/icons'

import style from './style.module.less'
import code from '@/assets/images/common/code.png'

const ZLSlider = () => {
  // state & props
  const [show, setShow] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShow(true)
      } else {
        setShow(false)
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => document.removeEventListener('scroll', handleScroll)
  }, [show])

  // handles
  // 这一步是为了防止，点击事件的过度发生。
  let myTimer: any = -1
  const backUp = () => {
    // 1、获取当前滚动了多少距离
    // 2、启动定时器，以一定时间减少响应的滚动距离
    let scrollTo = document.documentElement.scrollTop || document.body.scrollTop
    if (myTimer === -1) {
      myTimer = setInterval(() => {
        scrollTo -= 60
        if (scrollTo <= 0) {
          scrollTo = 0
          window.clearInterval(myTimer)
          myTimer = -1
        }

        window.scrollTo(0, scrollTo) // 这是值  是指离开网页顶部的距离
      }, 10)
    }
  }

  return show ? (
    <div className={style.zlSliderWrapper}>
      <ul className={style.box}>
        <li className={style.list + ' ' + style.phone}>
          <a href="/#" onClick={(e) => e.preventDefault()} rel="noreferrer">
            <PhoneOutlined />
          </a>
          <ul className={style.menu}>
            <li>联系电话</li>
            <li className={style.menuList}>售前：400-180-0776</li>
            <li className={style.menuList}>售后：0571-86778673</li>
          </ul>
        </li>
        <li className={style.list + ' ' + style.clock}>
          <a href="/#" onClick={(e) => e.preventDefault()} rel="noreferrer">
            <ClockCircleOutlined />
          </a>
          <ul className={style.menu}>
            <li>服务时间</li>
            <li>周一至周五 9:00-18:00</li>
          </ul>
        </li>
        <li className={style.list + ' ' + style.code}>
          <a href="/#" onClick={(e) => e.preventDefault()} rel="noreferrer">
            <WechatOutlined />
          </a>
          <ul className={style.menu}>
            <li>微信二维码</li>
            <li className={style.code}>
              <img src={code} alt="code" />
            </li>
          </ul>
        </li>
        <li className={style.list + ' ' + style.up} onClick={backUp}>
          <a href="/#" onClick={(e) => e.preventDefault()} rel="noreferrer">
            <ArrowUpOutlined />
          </a>
        </li>
      </ul>
    </div>
  ) : null
}

export default ZLSlider
