import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Screen/Home'
import SignUp from './Screen/signup'
import Login from './Screen/Login';
import SignUpInstractor from './Screen/signupinstractor'
import Aid from './Screen/Aid'
import Profilestudent from './Screen/profilestudent';
import Profile from './Screen/Profile'; 
import Teachers from './components/Teachers';
function App() {
  return (
    <div className="App">
  <Routes>
  <Route path="/" element={<Home/>} />
  <Route path='/login' element={<Login/>}/>
  <Route path="/signup" element={<SignUp/>} />
  <Route path="/signupinstractor" element={<SignUpInstractor/>} />
  <Route path="/Aid" element={<Aid/>} />
  <Route path="/profile/:id" element={<Profile/>} />
  <Route path="/profilestudent/:id" element={<Profilestudent/>} /> 
  <Route path="/Teachers/:id" element={<Teachers/>}  />
  
  </Routes>
    </div>
  );
}

export default App;
