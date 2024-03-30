import './App.css'
import ListTodoComponet from './component/ListTodoComponet'
import Headercompopnent from './component/Headercompopnent'
import FooterComponent from './component/FooterComponent'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import TodoComponent from './component/TodoComponent'
import RegisterComponent from './component/RegisterComponent'
import LoginComponent from './component/LoginComponent'
import { isUserLoggedIn } from './services/AuthService'

function App() {



  function AuthenticatedRoutes({ children }) {

    const isauth = isUserLoggedIn();


    if (isauth) { return children }

    else return <Navigate to="/"></Navigate>
  }

  return (
    <>
      <BrowserRouter>

        <Headercompopnent></Headercompopnent>

        <Routes>

          <Route path='/' element={<LoginComponent />} ></Route>
          <Route path='/todos' element={

            <AuthenticatedRoutes>
              <ListTodoComponet></ListTodoComponet>
            </AuthenticatedRoutes>

          } ></Route>
          <Route path='/add-todo' element={


            <AuthenticatedRoutes>
              <TodoComponent />
            </AuthenticatedRoutes>} ></Route>
          <Route path='/update-todo/:id' element={

            <AuthenticatedRoutes>
              <TodoComponent></TodoComponent></AuthenticatedRoutes>} ></Route>
          <Route path='/register' element={<RegisterComponent />} ></Route>
          <Route path='/login' element={<LoginComponent />} ></Route>
        </Routes>

        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
