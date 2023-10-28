import './App.css';
import Navbar from './components/navbar';
import Home from './pages/home';
import Login from './pages/login'
import Signup from './pages/signup';
import Borrower from './UserPages/borrower';
import Lender from './UserPages/lender';
import Loans from './UserPages/loans';
import Status from './UserPages/status';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Addlisting from './UserPages/addlisting';

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
                <Route path='/add' element={ <Addlisting/> }/>
                <Route path='/lender' element={ <Lender/>}/>
                <Route path='/borrower' element={ <Borrower/>}/>
            {/*</Route>*/}
        </Routes>

    </div>
  );
}

export default App;
