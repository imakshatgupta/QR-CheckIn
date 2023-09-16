import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GuardLogin from './components/GuardLogin';
import StudentLogin from './components/StudentLogin';
import StudentSignup from './components/StudentSignup';
import AuthorityLogin from './components/AuthorityLogin';
import LandingPage from './components/LandingPage';
function App() {
  return (
    <Router>
    <div>
    <Routes>
      <Route exact path="/" element={<LandingPage/>} />
      <Route exact path="/student-login" element={<StudentLogin />} />
      <Route exact path="/student-signup" element={<StudentSignup />} />
      <Route exact path="/guard-login" element={<GuardLogin />} />
      <Route exact path="/authority-login" element={<AuthorityLogin />} />
    </Routes>
    </div>
  </Router>
  );
}

export default App;
