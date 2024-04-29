
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Counter from './components/Day-02/Counter';

function App() {
  return (
    <div className="App">
 <Routes>
  <Route path='/' element= {<Home />}/>
  <Route path='/login' element = {<Login />}/>
  <Route path='/counter' element= {<Counter/>}/>
 </Routes>
    </div>
  );
}

export default App;
