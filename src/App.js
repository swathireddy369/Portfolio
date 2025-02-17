
import './App.css';
import RoutesPage from './Routes/RoutesPage';
import { ToastContainer } from 'react-toastify';
import {BrowserRouter} from "react-router-dom";
function App() {
  return (
    <div className="App">
        {/* <ToastContainer> */}
      <BrowserRouter>
      <RoutesPage />
      </BrowserRouter>
      {/* </ToastContainer> */}
    </div>
  );
}

export default App;
