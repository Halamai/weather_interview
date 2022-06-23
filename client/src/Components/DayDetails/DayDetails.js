import React from 'react';

import welle from '../../pictures/grow.svg'
import drop from '../../pictures/drop.svg'
import sann from '../../pictures/sann.svg'
import arrow from '../../pictures/arrow.svg'

import style from './DayDetails.module.scss'

const DeyDetails = (data) => { 
    return (
        <div>
            <h3 className={style.title}>Today Details</h3>
            <div className={style.detail}>
            <div className={ style.list}>
                    <img className={style.svg} src={welle} width='25px' height='25px' />
                <div>
                    <p>E {data?.data?.wind?.speed} kmh</p>
                    <p className={ style.text}>Wind</p>
                </div>
            </div>
            <div className={ style.list}>
                    <img className={ style.svg} src={drop} width='25px' height='25px' />
                <div>
                    <p>{data?.data?.main?.humidity} %</p>
                    <p className={ style.text}>Humidity</p>
                </div>
            </div>
            <div className={ style.list}>
                    <img className={ style.svg} src={sann} width='25px' height='25px' />
                <div>
                    <p>{data?.data?.main?.temp_kf}</p>
                    <p className={ style.text}>UV Index</p>
                </div>
            </div>
            <div className={ style.list}>
                    <img className={ style.svg} src={arrow} width='25px' height='25px' />
                    <div>
                        <p>{data?.data?.main?.pressure} hPa</p>
                        <p className={ style.text}>Pressure</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DeyDetails;