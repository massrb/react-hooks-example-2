
import WatchModal from './WatchModal'
import React, { useState, useContext } from "react";
import { DriverContext } from "./Driver";

const Buttons = ({decrement, increment, addWatch, removeWatch}) => {

const [modalIsOpen, setModalOpen] = useState(false)
const [modalData, setModalData] = useContext(DriverContext)['modal'];

const OpenModal = () => {
	setModalOpen(true)
  setModalData({show_buttons: false, reset_on_amount: false, reset_on_cycle: false})
}

const closeModal = (save=false) => {
	setModalOpen(false)
	if (save === true) {
		addWatch(true)
	}
}

return(
  <div id='button-top'>
	  <WatchModal open={modalIsOpen} closeModal={closeModal}/>
	  <button
	    onClick={decrement}
	    type="button"
	    className="btn btn-primary btn-xl"
	    style={{ marginRight: "15px" }}>
	    Subract
	  </button>
	  <button
	    onClick={increment}
	    type="button"
	    className="btn btn-primary btn-xl">
	    Add
	  </button>
	  <button
	    onClick={() => addWatch(false)} 
	    type="button"
	    className="main-button btn btn-primary btn-xl">
	    Quick Add watch
	  </button>
	  <button
	    onClick={removeWatch}
	    type="button"
	    className="main-button btn btn-primary btn-xl">
	    Remove watch
	  </button>
	  <button
	    onClick={OpenModal}
	    type="button"
	    className="main-button btn btn-primary btn-xl">
	    Add watch
	  </button>
  </div>
  )
}

export default Buttons;