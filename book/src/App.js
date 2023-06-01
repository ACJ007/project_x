import { Route, Routes } from 'react-router-dom';
import './App.css';
import './Log.css';


// import Drawer_ from './components/sidebar/Drawer';
import Homepage1 from './components/Homepage1';
import Log from './components/Log';
import Create from './components/Create';
import Adlog from './components/Adlog';
import Main from './components/Main';
import AdminView from './components/AdminView';

import UsePro from './components/UsePro';
import EditPro from './components/EditPro';
import Landingpage from './components/Landingpage';

import UserHome from './components/UserHome';




function App() {
  return (
    <div className="App">

<Homepage1/>
{/* <Create/> */}
{/* <Log/> */}
{/* <Adlog/> */}
{/* <Main/> */}
{/* <AdminView/> */}
{/* <WelcomePage/> */}
{/* <UsePro/> */}
{/* <EditPro/> */}
{/* <Landingpage/> */}
<UserHome/>
{/* <Drawer_/> */}


<Routes>
          {/* <Route path="/signin" element={<Create/>}/> */}
          <Route path="/create" element={<Create/>}/>
          <Route path="/log" element={<Log/>}/>
          <Route path="/main" element={<Main/>}/>
          <Route path="/pro" element={<UsePro/>}/>
          {/* <Route path="/" element={<Landingpage/>}/> */}
</Routes>
</div>
  );
}

export default App;
