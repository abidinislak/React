import ReactDOM from 'react-dom/client';
import Layout from './components/ui/Layout';
import Home from './components/ui/Home';
import About from './components/ui/About';
import Contact from './components/ui/Contact';
import AdminHome from './components/admin/AdminHome';
import Register from './components/Register';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './style.css';

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        {/* UI Sayfasının Layout Maplemesi */}
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>} />
          <Route path='contact' element={<Contact/>} />
        </Route>
        {/* UI Sayfasının Layout Maplemesi */}
        
        {/* Admin Sayfası Maplemesi */}
        <Route path='admin' element={<AdminHome/>} />
        {/* Admin Sayfası Maplemesi */}

        {/* Login/Register Maplemesi */}
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        {/* Login/Register Maplemesi */}

      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <App/>
);

