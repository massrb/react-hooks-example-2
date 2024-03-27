
import WatchModal from './WatchModal'
import React, { useState } from "react";

const Buttons = ({decrement, increment, addWatch, removeWatch}) => {

const [modalIsOpen, setModalOpen] = useState(false)

const OpenModal = () => {
	setModalOpen(true)
}

const closeModal = () => {
	setModalOpen(false)
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
	    onClick={addWatch}
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