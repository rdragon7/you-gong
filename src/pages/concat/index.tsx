import * as React from 'react'

import { Map } from 'react-amap'
import ZLCarousel from '@/components/Carousel'

import style from './style.module.less'

const ZLConcat = () => {
  const mapKey = 'e33eadd4321c1e7a328abdaec0c28afd'
  const position = { longitude: 120.094675, latitude: 30.306749 }

  return (
    <div className={style.zlConcatWrapper}>
      <ZLCarousel />
      <div className={style.content}>
        <div className={style.info}>
          <h2 className={style.title}>杭州友恭科技有限公司</h2>
          <ul className={style.desc}>
            <li>联系电话：0571-86772312</li>
            <li>售后电话：0571-86778673</li>
            <li>微信公众号：gh_4a066d82e2fd</li>
            <li>联系邮箱：surport@yougong.com</li>
            <li>总部地址：杭州市西湖区西溪银泰南2楼7层703室</li>
          </ul>
        </div>
        <div className={style.map}>
          <Map amapkey={mapKey} zoom={15} center={position}></Map>
        </div>
      </div>
    </div>
  )
}

export default ZLConcat
