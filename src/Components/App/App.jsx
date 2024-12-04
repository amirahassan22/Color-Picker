import './App.css';
import ColorPicker from '../ColorPicker/ColorPicker';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <>
    <main>
    <ColorPicker/>
    <ToastContainer position='top-center' />
    </main>
    </>
  )
}

export default App
