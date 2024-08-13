import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from "react-router-dom"
import Root from './Components/Root';
import ProjectGrid from './Components/ProjectGrid'
import Resume from './Components/Resume';
import Contact from './Components/Contact';


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='/' element={<Root />} />
          <Route path='/projects' element={<ProjectGrid />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </>

  );
}

export default App;
