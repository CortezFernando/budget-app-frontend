import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './Components/NavBar'
import TransactionOne from './Components/TransactionOne';
import Home from './Pages/Home'
import New from "./Pages/New";
import Index from './Pages/Index'
import Edit from './Pages/Edit'
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <main>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transactions" element={<Index />}/>
          <Route path="/transactions/new" element={<New />} /> 
          <Route path="/transactions/:id" element={<TransactionOne />} />
          <Route path="/transactions/:id/edit" element={<Edit />} /> 
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
