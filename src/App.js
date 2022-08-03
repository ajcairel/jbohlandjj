import './App.css';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import PhotoSlider from './components/PhotoSlider';
import Contact from './components/Contact';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Welcome />
      {/* <PhotoSlider /> */}
      <Contact />
   
     
    </div>
  );
}

export default App;
