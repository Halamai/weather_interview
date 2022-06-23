import React from 'react'
import style from './Day.module.scss'


const Day = () => { 
    const lang = navigator.language;
    let monthName = new Date().toLocaleString(lang,{ month: 'long' })
    let day = new Date().getDate();
    return (
        <div className={ style.block}>
            <h3>Today</h3>
            <div className={style.date}>
                <p>{day}</p>
                <p>{monthName}</p>
            </div>
        </div>
    )
}
export default Day;