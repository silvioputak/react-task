import { useState } from 'react'
import Header from './components/Header'
import MultiStepForm from './components/MultiStepForm'
import Home from './components/Home'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [showModal, setShowmModal] = useState(false)

  const handleClick = () => {
    setShowmModal(!showModal)
  }
  return (
    <div >
      <Header />
      <div className={'flex flex-col items-center justify-center p-[10px] gap-[30px] w-full h-[95vh]' + (showModal ? ' bg-[rgba(0,0,0,0.5);]' : null)}>
        {showModal ? <MultiStepForm handleModal={handleClick} toast={toast}  /> : <Home handleModal={handleClick}/>}
      </div>
      <ToastContainer />
      
    </div>
  )
}

export default App
