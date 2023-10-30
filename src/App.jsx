import './App.css';
import Home from './pages/home';
import Login from './pages/login'
import Signup from './pages/signup';
import Borrower from './UserPages/borrower';
import Lender from './UserPages/lender';
import Loans from './UserPages/loans';
import BorrowerStatus from './UserPages/borrower_status';
import LenderStatus from './UserPages/lender_status';

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
                <Route path='/add' element={ <Addlisting/> }/>
                
                <Route path='/lender' element={ <Lender/>}/>
                <Route path='/list' element={<Loans />}/>

                <Route path='/borrowerstatus' element={<BorrowerStatus />}/>
                <Route path='/lenderstatus' element={<LenderStatus />}/>
            {/*</Route>*/}
        </Routes>

    </div>
  );
}

export default App;
