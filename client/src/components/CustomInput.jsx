import React from 'react'
import styles from '../styles'

const regex = /^[a-zA-Z0-9]+$/

const CustomInput = ({label, placeholder, value, handleValueChange}) => {
  return (
    <>
    <label htmlfor ='name' className={styles.label}> {label} </label>

    <input type ="text"  placeholder={placeholder} value={value} onChange={(e)} =>{
      if (e.target.value === '' || regex.test(e.target.value)) {
    }




     />
  
</>
)
export default CustomInput