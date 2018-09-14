import React from 'react';
import Modal from 'react-modal';
import ReactMarkdown from 'react-markdown';

Modal.setAppElement('#root');

const ReadmeModal = ({
  readme,
  modalIsOpen,
  closeModal,
}) => {
  const { content, isError, errorMsg } = readme
  
  return isError
    ? (
      <p className="error-message">{ errorMsg }</p>
    )
    : (
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="ReactModal__Overlay"
        className="ReactModal__Content"
        closeTimeoutMS={150}
        contentLabel="README.md"
      >
        <button onClick={closeModal}>&times;</button>
        
        <ReactMarkdown
          source={content}
          escapeHtml={false}
          rawSourcePos={true}
        />
      </Modal>
    );
}

export default ReadmeModal;