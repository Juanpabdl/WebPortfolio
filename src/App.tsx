import { ToastContainer, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'; 
import MyRoutes from './routes/routes'

function App() {
  return (
    <>
      <MyRoutes/>
      <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      closeOnClick={false}
      pauseOnHover={false}
      draggable
      theme="dark"
      transition={Bounce}/>
    </>
  )
}

export default App
