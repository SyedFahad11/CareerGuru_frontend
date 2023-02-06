import Landing from "./components/Home";
import './App.css'
import User from "./components/userPages/HomeUser"
import SignIn from "./components/SignIn";
import { Route, Routes } from 'react-router-dom';
import Register from "./components/Register";
import Profile from "./components/userPages/Profile";

function App() {
  return (
    <div>
      <Routes>
      
          <Route path='/' element={<Landing />} />
          <Route path='user' element={<User />} />
          <Route path='signin' element={<SignIn />} />
          <Route path='register' element={<Register />} />
          <Route path='user/profile' element={<Profile />} />
        
      </Routes>
      



    </div>
  );
}



export default App;

