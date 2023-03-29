import Home from './routes/homepage/home.component'
import {Routes, Route} from 'react-router-dom'
import Navbar from './routes/navbar/navbar.component';


const Shop = () =>{
  return(
    <div>
      <div>
        This is SHOPPING
      </div>
    </div>
  );
}

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
      </Route>
    </Routes>
  );

};

export default App;
