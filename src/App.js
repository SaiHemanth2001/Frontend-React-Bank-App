import './App.css';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListCustomerComponent from './components/ListCustomerComponent';
import AddCustomerComponent from './components/AddCustomerComponent';
import Login from './components/Login';
import AdminLogin from './components/AdminLogin';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Router>
      <HeaderComponent />
      <div className="container">
        <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route exact path="/Login" Component={Login}></Route>
          <Route exact path="/AdminLogin" Component={AdminLogin}></Route>
          <Route path="/customers" Component={ListCustomerComponent}></Route>
          <Route path="/add-customer" Component={AddCustomerComponent}></Route>
        </Routes>
      </div>
      <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
