import './App.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './Pages/Home/Home';
import AllAchievement from './Pages/AllAchievement/AllAchievement';
import Footer from './Pages/Shared/Footer/Footer';
import Dashboard from './Pages/Dashboard/Dashboard';
import NotFound from './Pages/Shared/NotFound/NotFound';
import ManagePlayerHistory from './Pages/Dashboard/ManagePlayerHistory';
import UpdatePlayerHistory from './Pages/Dashboard/UpdatePlayerHistory';
import AddPlayer from './Pages/Dashboard/AddPlayer';
import ManageAdmin from './Pages/Dashboard/ManageAdmin';
import Login from './Pages/Login/Login';
import ResetPassword from './Pages/Login/ResetPassword';
import RequireAuth from './Pages/Shared/RequireAuth';
import RequireAdmin from './Pages/Shared/RequireAdmin/RequireAdmin';
import Signup from './Pages/Signup/Signup';
import BestPlayerOfMonth from './Pages/Dashboard/BestPlayerOfMonth';
import ClubPlayers from './Pages/ClubPlayers/ClubPlayers';
import ClubMatchHistory from './Pages/Dashboard/ClubMatchHistory';
import AddClubMatchHistory from './Pages/AddClubMatchHistory/AddClubMatchHistory';
import SingllePlayerDetails from './Pages/ClubPlayers/SingllePlayerDetails';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/allachievement' element={
          <RequireAuth>
            <AllAchievement></AllAchievement>
          </RequireAuth>
        }></Route>

        {/* NESTED ROUTE OF DASHBOARD STARTS HERE */}
        <Route path='/dashboard' element={
          <RequireAuth>
            <RequireAdmin>
              <Dashboard></Dashboard>
            </RequireAdmin>
          </RequireAuth>
        }>
          <Route index element={
            <ClubMatchHistory></ClubMatchHistory>
          }></Route>
          <Route path='managehistory' element={
            <ManagePlayerHistory></ManagePlayerHistory>
          }></Route>
          <Route path='bestplayer' element={<BestPlayerOfMonth></BestPlayerOfMonth>}></Route>
          <Route path='manageadmin' element={<ManageAdmin></ManageAdmin>}></Route>
        </Route>
        {/* NESTED ROUTE OF DASHBOARD ENDS HERE */}

        <Route path='/history/:id' element={<UpdatePlayerHistory></UpdatePlayerHistory>}></Route>
        <Route path='/addplayer' element={<AddPlayer></AddPlayer>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/resetpassword' element={<ResetPassword></ResetPassword>}></Route>
        <Route path='/clubplayers' element={
          <RequireAuth>
            <ClubPlayers></ClubPlayers>
          </RequireAuth>
        }></Route>
        <Route path='/addmatchhistory' element={<AddClubMatchHistory></AddClubMatchHistory>}></Route>
        <Route path='/clubplayer/:id' element={<SingllePlayerDetails></SingllePlayerDetails>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
