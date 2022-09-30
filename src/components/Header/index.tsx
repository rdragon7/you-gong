import * as React from 'react'

import { NavLink, useNavigate } from 'react-router-dom'
import { Drawer, Dropdown, Menu, Space } from 'antd'
import type { DrawerProps } from 'antd/es/drawer'
import { MenuOutlined } from '@ant-design/icons'

import style from './style.module.less'
import logo from '@/assets/images/common/logo.png'

const ZLHeader = () => {
  // state & props
  const [visible, setVisible] = React.useState(false)
  const [placement] = React.useState<DrawerProps['placement']>('left')

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
  const menuOne = (
    <Menu
      items={[
        {
          key: '1',
          label: <NavLink to="/finance">金融服务与数字化转型</NavLink>
        },
        {
          key: '2',
          label: <NavLink to="/solution">区块链技术与行业解决方案</NavLink>
        }
      ]}
    />
  )
  const menuTwo = (
    <Menu
      items={[
        {
          key: '1',
          label: <NavLink to="/intro">公司简介</NavLink>
        },
        {
          key: '2',
          label: <NavLink to="/staff">员工概况</NavLink>
        }
      ]}
    />
  )

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
              <NavLink to="/">首页</NavLink>
            </li>
            <li>
              <Dropdown overlay={menuOne} placement={'bottom'}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>产品与服务</Space>
                </a>
              </Dropdown>
            </li>
            <li>
              <Dropdown overlay={menuTwo} placement={'bottom'}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>关于我们</Space>
                </a>
              </Dropdown>
            </li>
            {/*  <li>
              <NavLink to="/dynamic">公司动态</NavLink>
            </li> */}
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
            <span>首页</span>
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
          {/* <li className="antd-li" onClick={() => toLocation('/dynamic')}>
            <span>公司动态</span>
            <span>&gt;</span>
          </li> */}
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
