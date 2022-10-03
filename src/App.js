import FrontPage from './FrontPage';
import './App.css';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      
      <Routes>
          
          <Route path="/" element={<FrontPage/>} />
          <Route path="/createevents" element={<Events/>} />
          <Route path="/viewevents" element={<View/>} />
          
        </Routes>
    </>
  );
}

export default App;
