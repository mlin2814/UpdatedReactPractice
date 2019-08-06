import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClearModal}
    contentLabel="Selected Option"
    closeTimeoutMS={200}
    className="modal"
    ariaHideApp={false}
  >
    <h3 className="modal__title">Selected Option</h3>
    {props.selectedOption && <p className="modal_body">{props.selectedOption}</p>}
    <button
      className="button"
      onClick={(e) => {
        props.handleClearModal(props.selectedOption);
      }}
    >
      Close
    </button>
  </Modal>
);

export default OptionModal;
