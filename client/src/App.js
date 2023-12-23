
import './App.css';


import NavBar from './components/Navbar.jsx';
import CodeForInterview from "./components/CodeForInterview.jsx";
import AllUsers from './components/AllUsers.jsx';
import AddUsers from './components/AddUsers.jsx';
import EditUsers from './components/EditUser.jsx';


import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    <Router>
        <NavBar/>
      <Routes>
        <Route path='/' element={<CodeForInterview /> }  />
        <Route path='/all' element={<AllUsers /> }  />
        <Route path='/add' element={<AddUsers/>} />
        <Route path='/edit/:id' element={<EditUsers/>} />
        {/* <AddUsers/> */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
