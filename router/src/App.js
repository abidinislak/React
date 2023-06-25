import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Layout from "./Layout";
import Blogs from "./Blogs";

function App() {
 return (
   <div className="App">
     <BrowserRouter>
       <Routes>
         <Route element={<Layout />} >
           <Route path="/" element={<Home />} />
           <Route path="about" element={<About />} />
           <Route   index path="contact" element={<Contact />} />
           <Route path="blogs" element={<Blogs />} />
         </Route>
       </Routes>
     </BrowserRouter>
   </div>
 )
}

export default App