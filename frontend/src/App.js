import './App.css';
import  { Route, Routes } from "react-router-dom";
import GetStatus from './Components/GetStatus';

function App() {
  return (
    <>
      <Routes>
        <Route path="/amazon-status" element={<GetStatus name="Amazon" />}></Route>
        <Route path="/google-status" element={<GetStatus name="Google" />}></Route>
        <Route path="/all-status" element={<><GetStatus name="Amazon" /><GetStatus name="Google" /></>}></Route>
      </Routes>
    </>
  );
}

export default App;
