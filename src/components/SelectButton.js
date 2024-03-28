import React, { useState, useContext, useEffect } from "react";
import { DriverContext } from "./Driver";

const SelectButton = ({name, label}) => {
  const [style, setStyle] = useState("unclicked-button");
  const [modalData, setModalData] = useContext(DriverContext)['modal'];

  const changeStyle = (event) => {
  	let obj = {}
  	if (style === 'unclicked-button') {
  		setStyle('clicked-button')
  		obj[name] = true
  	} else {
  		setStyle('unclicked-button')
  		 obj[name] = false
  	}
  	setModalData({...modalData, ...obj})
    event.preventDefault();
  }

  return(
  	<>
  	  <button className={style} onClick={changeStyle}>{label}</button>
  	</>
  )

}

export default SelectButton;