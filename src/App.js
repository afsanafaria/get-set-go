import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./shared/Header/Header";
import Services from "./components/Services/Services";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./shared/Footer/Footer";
import Login from "./pages/Login/Login";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AuthProvider from "./context/AuthProvider";
import AddNewService from "./pages/AddNewService/AddNewService";
import ManageAllOrders from "./pages/ManageAllOrders/ManageAllOrders";
import MyOrders from "./pages/MyOrders/MyOrders";


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/"> <Home></Home></Route>
            <Route path="/home"> <Home></Home></Route>
            <Route path="/services"> <Services></Services> </Route>
            <Route path="/login"> <Login></Login></Route>
            <PrivateRoute path="/addNewService"> <AddNewService></AddNewService></PrivateRoute>
            <PrivateRoute path="/myOrders"> <MyOrders></MyOrders></PrivateRoute>
            <PrivateRoute path="/manageAllOrders"> <ManageAllOrders></ManageAllOrders></PrivateRoute>
            <PrivateRoute path="/placeorder/:serviceId"> <PlaceOrder></PlaceOrder> </PrivateRoute>
            <Route path="*"> <NotFound></NotFound> </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
