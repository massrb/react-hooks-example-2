import Modal from 'react-modal';
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
        <button onClick={() => closeModal(false)}>close</button>
        <button onClick={() => closeModal(true)} >save</button>
        <br/>
        <br/>
        <div>Select settings for stopwatch</div>
        <br/>
        <form>
          <SelectButton name='show_buttons' label='Show Buttons' />
          <SelectButton name='reset_on_amount' label='Reset on amount change' />
          <SelectButton name= 'reset_on_cycle' label='Reset on cycle past zero' />
        </form>
      </Modal>
    </div>
  );

}

export default WatchModal;

