import * as React from 'react'

import { NavLink } from 'react-router-dom'

const ZLHeader = () => {
  return (
    <div>
      <NavLink to={'/product'}>产品</NavLink>
      <NavLink to={'/dynamic'}>关于</NavLink>
    </div>
  )
}

export default ZLHeader
