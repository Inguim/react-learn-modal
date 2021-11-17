
import { useState } from 'react';
import './App.css';

import Modal from './Modal';
import Form from './Form';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form />
      </Modal>
      <button className="btn-open" type="button" onClick={() => setIsOpen((prev) => !prev)} >Modal is open: {`${isOpen}`}</button>
      <div className="fake-image">Just a example, this is a image, trust me :)</div>
      <div className="fake-image">Just a example, this is a image, trust me :)</div>
      <div className="fake-image">Just a example, this is a image, trust me :)</div>
      <div className="fake-image">Just a example, this is a image, trust me :)</div>
      <div className="fake-image">Just a example, this is a image, trust me :)</div>
    </div>
  );
}

export default App;
