import * as React from 'react'

import ZLTitle from '@/components/Title'
import ZLLittleCardTwo from '@/components/LittleCardTwo'

import style from './style.module.less'

const ZLIndustryOne = () => {
  // state & props
  const [info1] = React.useState([
    {
      id: 1,
      icon: 'Q1',
      title: '商品从出厂到消费者手中，中间环节信息不透明，无法追溯来源。',
      desc: '改变：区块链实现多方共同记录溯源信息，消费者可查询验真。'
    },
    {
      id: 2,
      icon: 'Q2',
      title: '商品供应链过程信息存在被篡改、被伪造的风险。',
      desc: '改变：区块链技术保证溯源信息一旦记录后无法删除、不可篡改。'
    },
    {
      id: 3,
      icon: 'Q3',
      title: '发生商品质量或安全问题时难以回溯和追责。',
      desc: '改变：区块链在保证商业隐私的同时，支持全流程交易历史记录的审计、回溯。'
    }
  ])
  return (
    <div className={style.zlIndustryOneWrapper}>
      <ZLTitle title="区块链农产品溯源系统" isHurt={true} />
      <div className={style.content}>
        {info1.map((item: any) => {
          return (
            <div className={style.item} key={item.id}>
              <ZLLittleCardTwo info={item} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ZLIndustryOne
