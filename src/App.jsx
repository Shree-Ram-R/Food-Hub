import { Routes,Route,Link } from "react-router-dom"
import Home from "./components/Home";
import Menu from "./components/Menu";
import Search from "./components/Search";
import SignIn from "./components/SignIn";
import AddCart from "./components/AddCart";
import { FaBars, FaCartArrowDown, FaHome, FaSearch, FaUser } from "react-icons/fa";
// import { FaBarsProgress, FaUserMinus } from "react-icons/fa6";
function App() {
  
  return (
    <div className="foodApp">
    <nav>
      <div className="logo">Food Hub</div>
      <ul>
        <li><Link to="/" style={{ textDecoration: 'none' ,color: "black" }}><p className="navIc"><FaHome/>Home</p></Link></li>
        <li><Link to="/Menu" style={{ textDecoration: 'none',color: "black" }}><p className="navIc"><FaBars/>Menu</p></Link></li>
        <li><Link to="/Search" style={{ textDecoration: 'none', color: "black" }}> <p className="navIc"><FaSearch/>Search</p></Link></li>
        <li><Link to="/SignIn"style={{ textDecoration: 'none', color: "black"}}><p className="navIc"><FaUser/>Sign In</p></Link></li>
        <li><Link to="/Addcart" style={{ textDecoration: 'none',color: "black" }}> <p className="navIc"><span className="cartCount">0</span><FaCartArrowDown/>Add Cart</p></Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Menu" element={<Menu/>}/>
      <Route path="/Search" element={<Search/>}/>

      <Route path="/SignIn" element={<SignIn/>}/>
      <Route path="/AddCart" element={<AddCart/>}/>
        
  
    </Routes>
      
    </div>
  )
}

export default App
