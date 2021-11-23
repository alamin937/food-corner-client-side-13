import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import AuthProvider from './AuthProvider/AuthProvider';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ShowFoods from './components/ShowExplore/ShowExplore';
import DashBoard from './components/DashBoard/DashBoard/DashBoard';
import MyOrder from './components/DashBoard/MyOrder/MyOrder';
import Payment from './components/DashBoard/Payment/Payment';
import ManageOrder from './components/DashBoard/ManageOrder/ManageOrder';
import MakeAdmin from './components/DashBoard/MakeAdmin/MakeAdmin';
import ManageProducts from './components/DashBoard/ManageProducts/ManageProducts';
import AddFoods from './components/DashBoard/AddFoods/AddFoods';
import Review from './components/Home/Review/Review';

function App() {
  return (
    <div className="App">
      <div>
          <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home></Home>} ></Route>
              <Route path='/home' element={<Home></Home>} ></Route>
              <Route path='/foods' element={<ShowFoods></ShowFoods>} ></Route>
              <Route path='/dashboard' element={<PrivateRoute>
                <DashBoard></DashBoard>
              </PrivateRoute>} >
                <Route path='/dashboard' element={<MyOrder></MyOrder>}></Route>
                <Route path={`/dashboard/payment`} element={<Payment></Payment>}></Route>
                <Route path={`/dashboard/review`} element={<Review></Review>}></Route>
                <Route path={`/dashboard/manageorder`} element={<ManageOrder></ManageOrder>}></Route>
                <Route path={`/dashboard/addfoods`} element={<AddFoods></AddFoods>}></Route>
                <Route path={`/dashboard/makeadmin`} element={<MakeAdmin></MakeAdmin>}></Route>
                <Route path={`/dashboard/manageproduct`} element={<ManageProducts></ManageProducts>}></Route>

              </Route>
              <Route path='/login' element={<Login></Login>} ></Route>
              <Route path='/register' element={<Register></Register>} ></Route>
              <Route path='/foods/:foodId' element={<PrivateRoute>
              <PlaceOrder></PlaceOrder>
              </PrivateRoute>} ></Route>
            </Routes>
          </BrowserRouter>
          </AuthProvider>
      </div>
    </div>
  );
}

export default App;
