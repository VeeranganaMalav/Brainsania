import './App.css';
import Home from './Pages/Home';
import ITTraining from './Pages/ITTraining';
import Programming from './Pages/Programming';
import Registration from './Pages/Registration';
import AllRoutes from './Routes/AllRoutes';


function App() {
  return (
    <div className="App">
      <AllRoutes />
      {/* <Programming /> */}
      {/* <ITTraining /> */}
    </div>
  );
}

export default App;
