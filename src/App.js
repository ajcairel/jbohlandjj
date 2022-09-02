import './App.css';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import PhotoSlider from './components/PhotoSlider';
import Contact from './components/Contact';



function App() {
  return (
    <div className="App bg-gradient-to-tr from-red-400 via-gray-300 to-blue-500">
      {/* <NavBar /> */}
      <Welcome />
   
      <PhotoSlider />
      <Contact />
   
     
    </div>
  );
}

export default App;
