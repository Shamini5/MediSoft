import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './Layout.jsx'
import './App.css';
import Home from './pages/Home.jsx'
import CreateAccount from './pages/CreateAccount.jsx';
import SignIn from './pages/SignIn.jsx'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="createaccount" element={<CreateAccount />} />
          <Route path="signin" element={<SignIn />} />  
        </Route>
      </Routes>
    
    </div>
  );
}

export default App;
