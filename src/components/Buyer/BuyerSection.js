import React from 'react'
import OverlayImage from './OverLayerSection/OverlayImage'
import MyTabs from './MyTabsSection/MyTabs'
import './BuyerSection.css'

function BuyerSection() {
  return (
    
    <div className='container bg  mx-auto'>
<div className='row'>
<div className='col-lg-6'>
<OverlayImage/>
    </div>
    <div className='col-lg-6 part2'>
    <MyTabs className="my-tabs"/>
    </div>
</div>
    </div>
  )
}

export default BuyerSection