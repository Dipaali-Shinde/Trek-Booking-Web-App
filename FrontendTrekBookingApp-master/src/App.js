import Aos from "aos";
import { createContext, useReducer } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Booking from "./components/customer_component/Booking";
import CustLogin from "./components/customer_component/CustLogin";
import Dashboard from "./components/customer_component/Dashboard";
import TrekByname from "./components/customer_component/TrekByname";
import TrekDet from "./components/customer_component/Trekdet";

//import TrekDetails from "./components/customer_component/TrekDetails";

import Login from "./components/Login";
import CustNavBar from "./components/navbar/CustNavBar";
import Navbar from "./components/navbar/Navbar";
import Signup from "./components/SignUp";
import AddTrek from "./components/treks/AddTrek";
import EditTrek from "./components/treks/EditTrek";
import BookingByTrek from "./components/usercomponent/BookingByTrek";
import BookingsByUser from "./components/usercomponent/BookingsByUser";
import Customerlist from "./components/usercomponent/Customerlist";
import EditUser from "./components/usercomponent/EditUser";
import Home from "./components/usercomponent/Home";
import Userlist from "./components/usercomponent/Userlist";
import { initialState, reducer } from "./components/reducer/UseReduce";
import Logoutcust from "./components/customer_component/Logoutcust";
import Profile from "./components/customer_component/profile";
import CustomerBooking from "./components/customer_component/CustomerBooking";
import CustsignUp from "./components/customer_component/CustsignUp";

export const UserContext = createContext();
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Router>
        <UserContext.Provider value={{ state, dispatch }}>
          <CustNavBar />

          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/custLOGIN" element={<CustLogin />} />
            <Route
              exact
              path="/searchTrekByname/:id"
              element={<TrekByname />}
            />
            <Route
              excat
              path="/trekdetsils/:tid/:uid"
              element={<TrekDet />}
            ></Route>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/dashboard/:uid" element={<Dashboard />} />
            <Route path="/BookingPage/:bid/:date" element={<Booking />} />
            <Route path="/aboutUs" element={<AboutUs />}></Route>
            <Route path="/logout" element={<Logoutcust />} />
            <Route path="/bookinglist" element={<CustomerBooking />} />
            <Route path="/custSignup" element={<CustsignUp />} />
          </Routes>
        </UserContext.Provider>
      </Router>

      <Router>
        <Routes>
          <Route excat path="/adminLogin" element={<Login></Login>} />
          <Route exact path="/home/:id" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route exact path="/customers" element={<Customerlist />} />
          <Route exact path="/signup" element={<Signup></Signup>} />
          <Route exact path="/addtrek" element={<AddTrek />} />
          <Route exact path="/edittrek/:id" element={<EditTrek />} />
          <Route exact path="/userlist" element={<Userlist></Userlist>} />
          <Route exact path="/useredit/:id" element={<EditUser></EditUser>} />
          <Route
            exact
            path="/trekBookings/:id"
            element={<BookingByTrek></BookingByTrek>}
          />
          <Route
            exact
            path="/customerBookings/:id"
            element={<BookingsByUser></BookingsByUser>}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
