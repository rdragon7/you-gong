import * as React from 'react'

import { NavLink, useNavigate } from 'react-router-dom'
import ZLModel from '../Model'
import { Drawer } from 'antd'
import type { DrawerProps } from 'antd/es/drawer'
import { MenuOutlined } from '@ant-design/icons'

import style from './style.module.less'
import logo from '@/assets/images/common/logo.png'

const ZLHeader = () => {
  // state & props
  const [product] = React.useState([
    {
      id: 1,
      title: '金融服务与数字化转型'
    },
    {
      id: 2,
      title: '区块链技术与行业解决方案'
    }
  ])
  const [about] = React.useState([
    {
      id: 1,
      title: '公司简介'
    },
    {
      id: 2,
      title: '员工概况'
    },
    {
      id: 3,
      title: '资质荣誉'
    },
    {
      id: 4,
      title: '未知'
    }
  ])
  const [visible, setVisible] = React.useState(false)
  const [placement, setPlacement] =
    React.useState<DrawerProps['placement']>('left')

  // other hooks
  const navigate = useNavigate()

  // handles
  const showMenu = () => {
    setVisible(true)
  }
  const closeMenu = () => {
    setVisible(false)
  }
  const toLocation = (location: string) => {
    setVisible(false)
    navigate(location)
  }

  return (
    <header className={style.zlHeaderWrapper}>
      <div className={style.container}>
        <div className={style.logo}>
          <NavLink to="/">
            <img src={logo} alt="yougong logo" />
            <span>友恭科技</span>
          </NavLink>
        </div>
        <div className={style.bar}>
          <ul className={style.list}>
            <li>
              <NavLink to="/">网站首页</NavLink>
            </li>
            <li>
              <NavLink to="/product">产品与服务</NavLink>
              <ZLModel info={product} />
            </li>
            <li>
              <NavLink to="/about">关于我们</NavLink>
              <ZLModel info={about} />
            </li>
            <li>
              <NavLink to="/dynamic">公司动态</NavLink>
            </li>
            <li>
              <NavLink to="/concat">联系我们</NavLink>
            </li>
          </ul>
        </div>
        <div className={style.menu} onClick={showMenu}>
          <MenuOutlined />
        </div>
      </div>
      <Drawer
        title="友恭科技"
        open={visible}
        placement={placement}
        onClose={closeMenu}
        width="85%"
        getContainer="#root"
      >
        <ul className="antd-ul">
          <li className="antd-li" onClick={() => toLocation('/')}>
            <span>网站首页</span>
            <span>&gt;</span>
          </li>
          <li className="antd-li" onClick={() => toLocation('/product')}>
            <span>产品与服务</span>
            <span>&gt;</span>
          </li>
          <li className="antd-li" onClick={() => toLocation('/about')}>
            <span>关于我们</span>
            <span>&gt;</span>
          </li>
          <li className="antd-li" onClick={() => toLocation('/dynamic')}>
            <span>公司动态</span>
            <span>&gt;</span>
          </li>
          <li className="antd-li" onClick={() => toLocation('/concat')}>
            <span>联系我们</span>
            <span>&gt;</span>
          </li>
        </ul>
      </Drawer>
    </header>
  )
}

export default ZLHeader
