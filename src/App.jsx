import './App.css';
import Navbar from './components/navbar';
import Home from './pages/home';
import Login from './pages/login'
import Signup from './pages/signup';
import Borrower from './UserPages/borrower';
import Loans from './UserPages/loans';
import Status from './UserPages/status';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './context/AuthProvider';
import RequiredAuth from './components/RequiredAuth';

function App() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />

            {/*<Route element={<RequiredAuth />}>*/}
                <Route path='/borrower' element={<Borrower />}/>
                <Route path='/list' element={<Loans />}/>
                <Route path='/status' element={<Status />}/>
            {/*</Route>*/}
        </Routes>

    </div>
  );
}

export default App;
