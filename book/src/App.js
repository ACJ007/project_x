import { Route, Routes } from 'react-router-dom';
import './App.css';
import './Log.css';
import Drawer_ from './components/Drawer';
import Homepage1 from './components/Homepage1';
import Log from './components/Log';
import Create from './components/Create';
import Adlog from './components/Adlog';
import Main from './components/Main';
import AdminView from './components/AdminView';
import WelcomePage from './components/WelcomePage';
import UsePro from './components/UsePro';



function App() {
  return (
    <div className="App">
{/* <Drawer_/> */}
{/* <Homepage1/> */}
{/* <Create/> */}
{/* <Log/> */}
<Adlog/>
{/* <Main/> */}
{/* <AdminView/> */}
{/* <WelcomePage/> */}
{/* <UsePro/> */}
<Routes>
          <Route path="/Create" element={<Create/>}/>
          <Route path="/Log" element={<Log/>}/>
          <Route path="/Main" element={<Main/>}/>
</Routes>
</div>
  );
}

export default App;
