import React, { useState, useContext } from "react";
import { DriverContext } from "./Driver";

const SelectButton = ({name, label}) => {
  const [style, setStyle] = useState("unclicked-button");
  const [modalData, setModalData] = useContext(DriverContext)['modal'];

  const changeStyle = (event) => {
  	let val = false
  	if (style === 'unclicked-button') {
  		setStyle('clicked-button')
  		val = true
  	} else {
  		setStyle('unclicked-button')
  	}

  	setModalData({...modalData, ...{[name]: val}})
    event.preventDefault();
  }

  return(
  	<>
  	  <button className={style} onClick={changeStyle}>{label}</button>
  	</>
  )

}

export default SelectButton;