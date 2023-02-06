import React from 'react'
import {useNavigate} from 'react-router-dom'

import {logo, heroImg} from "../assets";
import styles  from '../styles';
const PageHOC = () => {
  const navigate = useNavigate();

    return (
    <div className={styles.hocContainer}>PagHOC</div>
  )
}

export default PageHOC