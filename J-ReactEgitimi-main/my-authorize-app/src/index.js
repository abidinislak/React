import ReactDOM from 'react-dom/client';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Login from './Login';
import useAuth from './useAuth';
import Layout from './Layout';

function ProtectedRoute({children}){
  const {token, saveToken} = useAuth();
  return token ? children : <Navigate to="/login"/>
}

function App(){
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={
            <ProtectedRoute>
                <Home/>
            </ProtectedRoute> }/>
          <Route path='about' element={ 
            <ProtectedRoute>
                <About/>
            </ProtectedRoute>}/>
          <Route path='login' element={<Login/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);

