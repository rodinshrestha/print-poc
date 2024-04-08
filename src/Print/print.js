import React from 'react'
import './print.scss'
import './print-page.scss'

const Print = () => {
  return (
   <div className='print-section'>
    <div className='container print-container'>

    <div className='row print-wrapper'>
        <div className='col-7 order-details-wrapper'>
            col-7
        </div>
        <div className='col-4 shipping-details-wrapper'>
            <div className='shipping-details-top-wrapper'>
                <div className='print' onClick={() => window.print()}>Print</div>
            </div>

            <div className='other-shipping-information'>
                col-4
                ....
            </div>
        </div>
    </div>
    </div>
   </div>
  )
}

export default Print