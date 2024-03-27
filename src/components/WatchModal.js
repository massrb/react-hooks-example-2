import Modal from 'react-modal';
import React, { useState } from "react";
import SelectButton from './SelectButton';

const WatchModal = ({open, closeModal}) => {

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  // Modal.setAppElement('#button-top');
  Modal.setAppElement('body')
  
  return (
    <div>
      <Modal
        isOpen={open}
        style={customStyles}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h2>New Stopwatch</h2>
        <button onClick={closeModal}>close</button>
        <div>Select settings</div>
        <br/>
        <form>
          <SelectButton label='Show Buttons' />
          <SelectButton label='Reset on amount change' />
          <SelectButton label='Reset on cycle past zero' />
        </form>
      </Modal>
    </div>
  );

}

export default WatchModal;

