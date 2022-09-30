import * as React from 'react'

import { NavLink, useNavigate } from 'react-router-dom'
import { Drawer, Dropdown, Menu, Space } from 'antd'
import type { DrawerProps } from 'antd/es/drawer'
import { MenuOutlined, DownOutlined, UpOutlined } from '@ant-design/icons'

import style from './style.module.less'
import logo from '@/assets/images/common/logo.png'

const ZLHeader = () => {
  // state & props
  const [visible, setVisible] = React.useState(false)
  const [productVisible, setProductVisible] = React.useState(false)
  const [aboutVisible, setAboutVisible] = React.useState(false)
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
  const showProductMenu = () => {
    setProductVisible(!productVisible)
  }
  const showAboutMenu = () => {
    setAboutVisible(!aboutVisible)
  }
  const toProductPath = (path: string) => {
    setProductVisible(false)
    setVisible(false)
    navigate(path)
  }
  const toAboutPath = (path: string) => {
    setAboutVisible(false)
    setVisible(false)
    navigate(path)
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
        destroyOnClose={true}
      >
        <div className="antd-ul">
          <dl className="antd-li" onClick={() => toLocation('/')}>
            <dt className="antd-dt">
              <span>首页</span>
            </dt>
          </dl>
          <dl className="antd-li">
            <dt className="antd-dt" onClick={showProductMenu}>
              <span>产品与服务</span>
              <span>{productVisible ? <UpOutlined /> : <DownOutlined />}</span>
            </dt>
            <dd className={productVisible ? 'open' : 'close'}>
              <ul>
                <li onClick={() => toProductPath('/finance')}>
                  <p>金融服务与数字化转型</p>
                </li>
                <li onClick={() => toProductPath('/solution')}>
                  <p>区块链技术与行业解决方案</p>
                </li>
              </ul>
            </dd>
          </dl>
          <dl className="antd-li">
            <dt className="antd-dt" onClick={showAboutMenu}>
              <span>关于我们</span>
              <span>{aboutVisible ? <UpOutlined /> : <DownOutlined />}</span>
            </dt>
            <dd className={aboutVisible ? 'open' : 'close'}>
              <ul>
                <li onClick={() => toAboutPath('/intro')}>
                  <p>公司简介</p>
                </li>
                <li onClick={() => toAboutPath('/staff')}>
                  <p>员工概况</p>
                </li>
              </ul>
            </dd>
          </dl>
          {/* <li className="antd-li" onClick={() => toLocation('/dynamic')}>
            <span>公司动态</span>
            <span>&gt;</span>
          </li> */}
          <li className="antd-li" onClick={() => toLocation('/concat')}>
            <dt className="antd-dt">
              <span>联系我们</span>
            </dt>
          </li>
        </div>
      </Drawer>
    </header>
  )
}

export default ZLHeader
