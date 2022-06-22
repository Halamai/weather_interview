import React, { useEffect, useState } from 'react'
import style from './Card.module.scss'

import api from '../../services/Services'

const Card = ({ weather }) => { 
    console.log(weather.data)
    return (
        <h2 className={style.card}>Card</h2>
    )
}

export default Card;