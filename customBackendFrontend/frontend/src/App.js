import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import HeaderComponent from "./component/HeaderComponent";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { isUserLoggedIn } from "./services/AuthService";
import RegisterCompon from "./component/RegisterComponent";
import AdminComponent from "./component/AdminComponent";
import UserComponent from "./component/UserComponent";
import LoginCommponent from "./component/LoginCommponent";
import HomePagecomponent from "./component/HomePagecomponent";
import NotFound from "./component/NotFound";


function App() {



  function AuthenticatedRoutes({ children }) {

    const isAuth = "";
    isAuth = isUserLoggedIn();

    if (isAuth) {

      return children;

    }

    else return <Navigate to="/"  ></Navigate>




  }

  return (
    <>


      <BrowserRouter>
        <HeaderComponent />

        <Routes>






          <Route path="/admin" element={

            <AuthenticatedRoutes>


              <AdminComponent />

            </AuthenticatedRoutes>

          }></Route>
          <Route path="/user" element={

            <AuthenticatedRoutes>
              <UserComponent></UserComponent>
            </AuthenticatedRoutes>

          } ></Route>
          <Route path='/register' element={<RegisterCompon />} ></Route>


          <Route path="/home" element={<HomePagecomponent />}></Route>
          <Route path="/login" element={<LoginCommponent />}></Route>


          <Route path="*" element={<NotFound></NotFound>} ></Route>





        </Routes>



      </BrowserRouter>



    </>
  );
}

export default App;