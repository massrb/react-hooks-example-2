import React, { useState } from "react";

const SelectButton = ({label}) => {
  const [style, setStyle] = useState("unclicked-button");

  const changeStyle = (event) => {
    style == 'unclicked-button' ? setStyle('clicked-button') : setStyle('unclicked-button')
    event.preventDefault();
  }

  return(
  	<>
  	  <button className={style} onClick={changeStyle}>{label}</button>
  	</>
  )

}

export default SelectButton;