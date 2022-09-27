import * as React from 'react'

import ZLTitle from '@/components/Title'
import ZLLittleCard from '@/components/LittleCard'
import ZLCardFive from '@/components/CardFive'
import ZLIcon from '@/components/Icon'

import style from './style.module.less'
import product9 from '@/assets/images/product/product9.png'
import product10 from '@/assets/images/product/product10.png'
import product11 from '@/assets/images/product/product11.png'
import product12 from '@/assets/images/product/product12.jpg'
import product13 from '@/assets/images/product/product13.jpg'
import product14 from '@/assets/images/product/product14.jpg'
import product15 from '@/assets/images/product/product15.png'
import product16 from '@/assets/images/product/product16.png'
import product17 from '@/assets/images/product/product17.png'
import product18 from '@/assets/images/product/product18.png'
import product19 from '@/assets/images/product/product19.png'
import product20 from '@/assets/images/product/product20.png'
import product21 from '@/assets/images/product/product21.png'
import product22 from '@/assets/images/product/product22.png'
import product23 from '@/assets/images/product/product23.png'
import product24 from '@/assets/images/product/product24.png'
import product35 from '@/assets/images/product/product35.png'
import product36 from '@/assets/images/product/product36.png'
import product37 from '@/assets/images/product/product37.png'
import product38 from '@/assets/images/product/product38.png'

const ZLProductInfoTwo = () => {
  return (
    <div className={style.zlProductInfoTwoWrapper}>
      <ZLTitle title="平台功能" isHurt={false} />
      <div className={style.content}>
        <div className={style.contentOne}>
          <ZLLittleCard
            icon={product9}
            title="原产地信息"
            desc="地理围栏信息 / 环境信息"
          />
          <ZLLittleCard
            icon={product10}
            title="主要生产活动记录"
            desc="生产活动事件 / 影像记录 / 组织与人员"
          />
          <ZLLittleCard
            icon={product11}
            title="达标情况"
            desc="食品安全标准 / 生产质量管理标准 / ......"
          />
        </div>
        <div className={style.contentTwo}>
          <h2 className={style.title}>新技术融合</h2>
          <div className={style.content}>
            <ZLCardFive
              imgUrl={product12}
              title={[
                '加工事件/贮存事件/打包事件',
                '创建并激活可追溯成品实体ID',
                '环境信息（温度、湿度、地点）'
              ]}
              imgTitle="加工熟成"
            />
            <ZLCardFive
              imgUrl={product12}
              title={['运单绑定', '物流出入库追踪', '防串货监控（地理围栏）']}
              imgTitle="加工熟成"
            />
          </div>
        </div>
        <div className={style.contentThree}>
          <h2 className={style.title}>终端消费环节</h2>
          <div className={style.content}>
            <div>
              <img src={product13} alt="" />
            </div>
            <div className={style.row}>
              <img src={product15} alt="" />
            </div>
            <div>
              <img src={product14} alt="" />
            </div>
          </div>
        </div>
        <div className={style.contentFour}>
          <h2 className={style.title}>角色设置-平台管理员</h2>
          <div className={style.content}>
            <ul className={style.left}>
              <li>
                <div className={style.icon}>
                  <ZLIcon icon={product16} />
                </div>
                <div className={style.desc}>
                  <span>入驻商家管理</span>
                  <br />
                  <span>
                    核实申请入驻商家的入驻资格，对商家行为全程监管。如果有违规上架，平台管理员随时可以停止商家入驻资格。
                  </span>
                </div>
              </li>
              <li>
                <div className={style.icon}>
                  <ZLIcon icon={product17} />
                </div>
                <div className={style.desc}>
                  <span>溯源商品管理及溯源标识签发</span>
                  <br />
                  <span>
                    对申请溯源的商品进行审批和管理，对于通过审批的批次签发溯源标识。
                  </span>
                </div>
              </li>
              <li>
                <div className={style.icon}>
                  <ZLIcon icon={product18} />
                </div>
                <div className={style.desc}>
                  <span>平台数据统计分析</span>
                  <br />
                  <span>
                    对平台的湖源数据及消费者验证查询数据进行统计分析，将结果整理后握供给入驻商家。
                  </span>
                </div>
              </li>
            </ul>
            <div className={style.right}>
              <img src={product19} alt="" />
            </div>
          </div>
        </div>
        <div className={style.contentFour}>
          <h2 className={style.title}>角色设置-入驻商家</h2>
          <div className={style.content}>
            <ul className={style.left}>
              <li>
                <div className={style.icon}>
                  <ZLIcon icon={product20} />
                </div>
                <div className={style.desc}>
                  <span>商品批次管理</span>
                  <br />
                  <span>
                    入驻商家根据商品批次向平台申请满原标识，并且对商品进行管理。
                  </span>
                </div>
              </li>
              <li>
                <div className={style.icon}>
                  <ZLIcon icon={product21} />
                </div>
                <div className={style.desc}>
                  <span>商品溯源码激活管理</span>
                  <br />
                  <span>
                    商家贴上潮源标识后可自行激活溯源码，激活信息自动上链，平台和商家双验证。激活信息后期不可被轻易篡改。
                  </span>
                </div>
              </li>
              <li>
                <div className={style.icon}>
                  <ZLIcon icon={product22} />
                </div>
                <div className={style.desc}>
                  <span>商品溯源信息管理</span>
                  <br />
                  <span>记录商品各流通环节的溯源信息，并且提供查询功能。</span>
                </div>
              </li>
              <li>
                <div className={style.icon}>
                  <ZLIcon icon={product23} />
                </div>
                <div className={style.desc}>
                  <span>商品溯源信息分析查询</span>
                  <br />
                  <span>
                    根据商品流通及销售数据，台动分析商品消费行为，为商家握供生产依据。
                  </span>
                </div>
              </li>
            </ul>
            <div className={style.right}>
              <img src={product19} alt="" />
            </div>
          </div>
        </div>
        <div className={style.contentFour}>
          <h2 className={style.title}>角色设置-终端消费者</h2>
          <div className={style.content}>
            <ul className={style.left}>
              <li>
                <div className={style.icon}>
                  <ZLIcon icon={product23} />
                </div>
                <div className={style.desc}>
                  <span>商品溯源信息查询</span>
                  <br />
                  <span>
                    消费者可以通过扫描溯源码的方式查询商品的溯源信息。
                  </span>
                </div>
              </li>
              <li>
                <div className={style.icon}>
                  <ZLIcon icon={product23} />
                </div>
                <div className={style.desc}>
                  <span>商品防伪信息查询</span>
                  <br />
                  <span>
                    消费者可以通过扫描溯源码和别开防伪码检验商品防伪信息。
                  </span>
                </div>
              </li>
              <li>
                <div className={style.icon}>
                  <ZLIcon icon={product24} />
                </div>
                <div className={style.desc}>
                  <span>商品增值服务</span>
                  <br />
                  <span>
                    通过扫描溯源码可以查询商品介绍，商家信息等。让消费者更加深入的了解商品信息。
                  </span>
                </div>
              </li>
            </ul>
            <div className={style.right}>
              <img src={product19} alt="" />
            </div>
          </div>
        </div>
        <div className={style.contentFive}>
          <h2 className={style.title}>溯源流程</h2>
          <div className={style.content}>
            <ul className={style.left}>
              <li>
                <div className={style.icon}>
                  <ZLIcon icon={product37} />
                </div>
                <div className={style.desc}>
                  <span>商品入驻</span>
                  <br />
                  <span>
                    生产方提交入驻申请，平台方对入驻商品进行审核。如审核通过，平台方签发溯源标签给生产方。
                  </span>
                </div>
              </li>
              <li>
                <div className={style.icon}>
                  <ZLIcon icon={product38} />
                </div>
                <div className={style.desc}>
                  <span>生产方激活标签</span>
                  <br />
                  <span>
                    生产放将溯源标签贴于包装上后，利用激活设备激活标签。标签被激活后会和商品绑定并上链。
                  </span>
                </div>
              </li>
              <li>
                <div className={style.icon}>
                  <ZLIcon icon={product35} />
                </div>
                <div className={style.desc}>
                  <span>物流商记录流通信息</span>
                  <br />
                  <span>物流商记录商品物流数据，物流数据上链。</span>
                </div>
              </li>
              <li>
                <div className={style.icon}>
                  <ZLIcon icon={product36} />
                </div>
                <div className={style.desc}>
                  <span>消费者防伪验真及溯源信息查询</span>
                  <br />
                  <span>
                    终端消费者通过溯源码和防伪码对商品进行防伪验真及溯源信息查询。
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ZLProductInfoTwo
