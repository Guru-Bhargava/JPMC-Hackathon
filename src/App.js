import "./App.css";
// import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import User from "./components/User";
import Manager from "./components/Manager";



function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="/manager" element={<Manager />} />
      </Routes>
    </div>
  );
}

export default App;
