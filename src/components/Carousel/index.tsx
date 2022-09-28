import * as React from 'react'

import { Carousel } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

import style from './style.module.less'
import lunbo1 from '@/assets/images/home/lunbo1.png'
import lunbo2 from '@/assets/images/home/lunbo2.jpg'

const ZLCarousel = () => {
  // state & props

  // other hooks
  const carouselRef = React.useRef<any>(null)

  return (
    <div className={style.zlCarouselWrapper}>
      <div className={style.btn}>
        <div onClick={() => carouselRef.current.prev()}>
          <LeftOutlined />
        </div>
        <div onClick={() => carouselRef.current.next()}>
          <RightOutlined />
        </div>
      </div>
      <Carousel autoplay ref={carouselRef}>
        <div className={style.item}>
          <img src={lunbo1} alt="" />
          <div className={style.ld}>
            <span>杭州友恭科技有限公司</span>
            <br />
            <span>
              我们致力于为更多的客户提供了更专业的基于区块链的溯源系统
            </span>
          </div>
        </div>
        <div className={style.item}>
          <img src={lunbo2} alt="" />
          <div className={style.ld}>
            <span>杭州友恭科技有限公司</span>
            <br />
            <span>
              我们致力于为更多的客户提供了更专业的基于区块链的溯源系统
            </span>
          </div>
        </div>
      </Carousel>
    </div>
  )
}

export default ZLCarousel
