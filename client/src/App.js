
import './App.css';
import {Route , BrowserRouter,Switch,Redirect} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'

import Register from './pages/Register'
import BookingCar from './pages/BookingCar'
import 'antd/dist/antd.css';
import UserBookings from './pages/UserBookings';
import AddCar from './pages/AddCar';
import AdminHome from './pages/AdminHome';
import EditCar from './pages/EditCar';
import aboutUs from './pages/aboutUs';
import contactUs from './pages/contactUs';
import AdminLogin from './pages/AdminLogin';
import UserProfile from './pages/UserProfile';

function App() {
  return (
    <div className="App">
 
         
         
         <BrowserRouter>
             
            
             <Switch>
             <Route path='/login' exact component={Login} />
             <ProtectedRoute path='/' exact component={Home} />
             
             <Route path='/register' exact component={Register} />
             <Route path='/booking/:carid' exact component={BookingCar} />
             <Route path='/userbookings' exact component={UserBookings} />
             <Route path='/addcar' exact component={AddCar} />
             <Route path='/editcar/:carid' exact component={EditCar} />
             <Route path='/admin' exact component={AdminHome} />
             <Route path='/aboutUs' exact component={aboutUs} />
             <Route path='/contactUs' exact component={contactUs} />
             <Route path='/UserProfile' exact component={UserProfile} />
             <Route path='/AdminLogin' exact component={AdminLogin} />
             </Switch>
         </BrowserRouter>

    </div>
  );
}



export default App;

export function ProtectedRoute(props)
{


    if(localStorage.getItem('user'))
    {
      return <Route {...props}/>
    }
    else{
      return <Redirect to='/login'/>
    }

}
