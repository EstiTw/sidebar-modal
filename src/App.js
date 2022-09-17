import React from "react";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import Home from "./Home";

import { useState, useContext } from "react";

const ModalContext = React.createContext();

function App() {
  const [isModal, setIsModal] = useState(false);

  const showModal = () => {
    setIsModal(true);
  };

  return (
    <>
      <Home />
      <Modal />
      <Sidebar />
    </>
  );
}

export default App;
