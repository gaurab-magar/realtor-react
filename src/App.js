import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { PrivateRoute } from './Components/PrivateRoute';
import { Header } from './Components/Header';
import {Home} from './Pages/Home';
import { SignIn } from './Pages/SignIn';
import { SignUp } from './Pages/SignUp';
import { ForgotPass } from './Pages/ForgotPass';
import { Offers } from './Pages/Offers';
import { Profile } from './Pages/Profile';
import { Footer } from './Components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CreateLinsting } from './Pages/CreateLinsting';
import { Contact } from './Pages/Contact';
function App() {
  return (
    <>
    <Router>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/signin" element={<SignIn />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/forgotpass" element={<ForgotPass />}/>
          <Route path="/offers" element={<Offers />}/>
          <Route path='/create-listing' element={<CreateLinsting />} />

          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />}/>
          </Route> 
          <Route path='/createlisting' element={<PrivateRoute />}>
            <Route path="/createlisting" element={<CreateLinsting />}/>
          </Route>
        </Routes>
      <Footer />
    </Router>
    <ToastContainer position="bottom-right"/>
    </>
  );
}

export default App;
