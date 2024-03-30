
import './App.css'
import HelloWorld from './HelloWorld'
import DepartmentComponent from './component/DepartmentComponent'
import EmployeeComponent from './component/EmployeeComponent'
import FooterComponent from './component/FooterComponent'
import HeaderComponent from './component/HeaderComponent'
import ListDepartmentComponent from './component/ListDepartmentComponent'
import { ListEmployeeComponent } from './component/ListEmployeeComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {


  return (
    <>
      <BrowserRouter>
        <HeaderComponent />

        <Routes>
          {/* http://localhost:3000 */}
          <Route path='/' element={<ListEmployeeComponent />}  >          </Route>

          {/* http://localhost:3000/employees */}
          <Route path='/employees' element={<ListEmployeeComponent />}  >          </Route>
          <Route path='/add-employee' element={<EmployeeComponent />}  >          </Route>
          {/* http://localhost:3000/updateemployee/id */}
          <Route path='/updateemployee/:id' element={<EmployeeComponent />}  >          </Route>


          <Route path='/departments' element={<ListDepartmentComponent />} ></Route>
          <Route path='/addDepartment' element={<DepartmentComponent />} ></Route>
          <Route path='/updateButton/:id' element={<DepartmentComponent />} ></Route>

        </Routes>

        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
