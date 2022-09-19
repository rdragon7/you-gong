import React, { lazy, Suspense, ReactNode } from 'react'
import { RouteObject } from 'react-router-dom'

import ZLLayout from '@/pages/layout'
const ZLHome = lazy(() => import('@/pages/home'))
const ZLProduct = lazy(() => import('@/pages/product'))
const ZLDynamic = lazy(() => import('@/pages/dynamic'))

const lazyLoad = (children: ReactNode): ReactNode => {
  return <Suspense fallback={<h1>loading...</h1>}>{children}</Suspense>
}

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <ZLLayout />,
    children: [
      {
        index: true,
        element: lazyLoad(<ZLHome />)
      },
      {
        path: 'product',
        element: lazyLoad(<ZLProduct />)
      },
      {
        path: 'dynamic',
        element: lazyLoad(<ZLDynamic />)
      }
    ]
  }
]

export default routes
