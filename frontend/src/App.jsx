import './App.css'
import Footer from './components/footer'
import Header from './components/Header'
import LandingPage from './screens/LandingPage'
import { Routes, Route } from 'react-router-dom'
import Login from './screens/Login'
import SignIn from './screens/SignIn'
import MyNotes from './screens/MyNotes'
import CreateNote from './screens/CreateNote'
import EditNote from './screens/EditNote'
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Header />
      <ToastContainer/>
      <main>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/mynotes' element={<MyNotes />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/createnote' element={<CreateNote/>} />
          <Route path='/editnote' element={<EditNote/>} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
