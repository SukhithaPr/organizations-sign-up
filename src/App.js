import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Auth } from "./pages/auth/index"
import { ProfileOrg } from "./pages/profile-org/index"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Auth />} />
          <Route path="/org" element={<ProfileOrg />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
