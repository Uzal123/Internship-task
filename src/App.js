import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Dashboard from "./Components/Dashboard/Dashboard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import EditProduct from "./Components/EditProduct/EditProduct";

function App() {
  return (
    <Router>
      <div className="">
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/editproduct" element={<EditProduct/>} />
          <Route path="/" element={<Dashboard/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
