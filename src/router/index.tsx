import React, { lazy, Suspense, ReactNode } from 'react'
import { RouteObject } from 'react-router-dom'

import ZLLayout from '@/pages/layout'
const ZLHome = lazy(() => import('@/pages/home'))
const ZLConcat = lazy(() => import('@/pages/concat'))
const ZLCompanyIntro = lazy(() => import('@/pages/companyIntro'))
const ZLStaff = lazy(() => import('@/pages/staff'))
const ZLSolution = lazy(() => import('@/pages/solution'))
const ZLFinance = lazy(() => import('@/pages/finance'))
const ZLArithmetical = lazy(() => import('@/pages/arithmetical'))
const ZLIndustry = lazy(() => import('@/pages/industry'))
const ZLProduct = lazy(() => import('@/pages/product'))
const ZLDynamic = lazy(() => import('@/pages/dynamic'))
const ZLNotFound = lazy(() => import('@/pages/notFound'))

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
        path: 'concat',
        element: lazyLoad(<ZLConcat />)
      },
      {
        path: 'intro',
        element: lazyLoad(<ZLCompanyIntro />)
      },
      {
        path: 'staff',
        element: lazyLoad(<ZLStaff />)
      },
      {
        path: 'solution',
        element: lazyLoad(<ZLSolution />)
      },
      {
        path: 'finance',
        element: lazyLoad(<ZLFinance />)
      },
      {
        path: 'arithmetical',
        element: lazyLoad(<ZLArithmetical />)
      },
      {
        path: 'industry',
        element: lazyLoad(<ZLIndustry />)
      },
      {
        path: 'product',
        element: lazyLoad(<ZLProduct />)
      },
      {
        path: 'dynamic',
        element: lazyLoad(<ZLDynamic />)
      },
      {
        path: '*',
        element: lazyLoad(<ZLNotFound />)
      }
    ]
  }
]

export default routes
