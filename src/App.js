import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import MainPage from './pages/main/index.js';
import OurStudioPage from './pages/aboutStudio/index.js';
import OurGamePage from './pages/ourGames/index.js';
import OrderPage from './pages/orderGame/index.js';
import VacationPage from './pages/vacation/index.js';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element= {<MainPage/>}/>
        <Route path='/studio' element={<OurStudioPage/>}/>
        <Route path='/games' element= {<OurGamePage/>}/>
        <Route path='/order' element= {<OrderPage/>}/>
        <Route path='/vacation' element= {<VacationPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
