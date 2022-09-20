import * as React from 'react'

import { Carousel } from 'antd'

import style from './style.module.less'
import lunbo1 from '@/assets/images/home/lunbo1.png'
import lunbo2 from '@/assets/images/home/lunbo2.jpg'
import lunbo3 from '@/assets/images/home/lunbo3.jpg'
import lunbo4 from '@/assets/images/home/lunbo4.jpg'

const ZLCarousel = () => {
  // state & props
  const [lunbo] = React.useState([
    {
      id: 1,
      src: lunbo1
    },
    {
      id: 2,
      src: lunbo2
    },
    {
      id: 3,
      src: lunbo3
    },
    {
      id: 4,
      src: lunbo4
    }
  ])

  return (
    <div className={style.zlCarouselWrapper}>
      <Carousel autoplay>
        {lunbo.map((item: any) => {
          return (
            <div className={style.item} key={item.id}>
              <img src={item.src} />
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

export default ZLCarousel
