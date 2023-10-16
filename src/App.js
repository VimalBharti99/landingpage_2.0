import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Work from './Components/Work';


function App() {
  return (
    <div className="App">
          <Home/>
          <About/>
          <Work/>
          <Contact/>
          <Footer/>
    </div>
  );
}

export default App;
