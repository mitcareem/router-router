import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./component/Home";

function App() {
  return (
    <BrowserRouter>
    <div>
      
        <nav>
          <Link to="/user/mehul">mehul</Link>
          <Link to="/user/naeem">naeem</Link>
        </nav>


        <Routes>
          <Route path="/user/:username" element={<Home />} />

          
        </Routes>

     
    </div>
    </BrowserRouter>

  );
}

export default App;
