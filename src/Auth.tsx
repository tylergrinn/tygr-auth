import React, { useState } from 'react';
import LoginModal from './modals/Login';
import Modal from './modals/Modal';

const toggle = (): [boolean, () => void] => {
  const [value, setValue] = useState(true);

  return [value, () => setValue(!value)];
};

export default function Auth() {
  const [modalShown, toggleModal] = toggle();

  return (
    <div>
      <Modal show={modalShown} onDismiss={toggleModal}>
        <LoginModal />
      </Modal>
      <button className="tygr-login" onClick={toggleModal}>
        Login
      </button>
    </div>
  );
}
