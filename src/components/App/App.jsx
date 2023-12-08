import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Modal from "../Modal/Modal";
import { useModal } from "../../hooks/useModal";

const App = () => {
  const {isOpen, open, close } = useModal();

  return (
    <div>
      <Header onMenuOpen={open}/>
      <Main />
      <Footer />

      <Modal isOpen={isOpen} onClose={close}/>
    </div>
  );
}

export default App;
