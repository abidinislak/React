import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Layout from './components/ui/Layout';
import Home from './components/ui/Home';
import AddUser from './components/ui/AddUser';
import UpdateUser from './components/ui/UpdateUser';
import Login from './components/auth/Login';
import NotFound from './components/404';
import Report from './components/ui/Report';
import useAuth from './components/auth/useAuth';

function ProtectedRoute({children}){
  const {token} =useAuth();
  return token ? children : <Navigate to="/login" />
}

function App(){

  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <ProtectedRoute>
            <Layout/>
          </ProtectedRoute>
        }>
          <Route index element={<Home/>}></Route>
          <Route path='add-user' element={<AddUser/>}/>
          <Route path='update-user' element={<UpdateUser/>}/>
          <Route path='report' element={<Report/>}/>
        </Route>

        <Route path='login' element={<Login/>} />

        <Route path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
    <App />  
);

