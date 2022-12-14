import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Dashboard from "./Routes/Dashboard/Dashboard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import EditProduct from "./Routes/EditProduct/EditProduct";



function App() {
  return (
    <Router>
      <div className="">
        <title>Dazziie</title>
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
