
import Register from "./components/register";

import {  Routes, Route } from "react-router-dom";



import Home from "./components/Home";
import Login from "./components/Login";
import { AuthContext } from "./components/context/AuthContext";










const App =() =>{
  // const [students ] = useState(["a", 'b', 'c', 'd'])
  // const [counter] = useState(1234)
  return(

    <div>


        <Routes>
          <Route path="/register" element={<Register/>}></Route>
         
        
        
          
          {/* <Route path="/application" element={<Application/>}></Route> */}
          {/* <Route path="/useReducer" element={<UseReducer/>}></Route> */}
          {/* <Route path='/propsdrilling' element={<PropsDrilling counter={counter} students={students} />} /> */}
          {/* <Route path="/CounterContext" element={<ProviderCounterContext/>}></Route> */}
          <Route path="/Home" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/AuthContext" element={<AuthContext/>}></Route>
          {/* <Route path="/Todo" element={<Todo/>}></Route> */}
          {/* <Route path='/CurrencyConverter' element={<CurrencyConverter />} /> */}
          {/* <Route path='/CounterRedux' element={<CounterRedux />} /> */}
          {/* <Route path='/UseMemo' element={<UseMemo/>} /> */}
          {/* <Route path='/UseCallback' element={<UseCallback/>} /> */}
         <Route path="/" element={<Home />} /> Default route
          {/* <Route path='/ThemeRedux' element={<ThemeRedux/>} /> */}
         
          
         
      

        </Routes>
    
    </div>

  )
}
export default App;