import { Route, Routes } from 'react-router-dom';
import './App.css';
import './Log.css';
// import Drawer_ from './components/Drawer';
import Homepage1 from './components/Homepage1';
import Log from './components/Log';
import Create from './components/Create';

function App() {
  return (
    <div className="App">
{/* <Drawer_/> */}
{/* <Homepage1/> */}
{/* <Create/> */}
{/* <Log/> */}
<Routes>
          <Route path="/Create" element={<Create/>}/>
          <Route path="/Log" element={<Log/>}/>
</Routes>
</div>
  );
}

export default App;
