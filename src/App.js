import './App.css';
import {Routes, Route} from 'react-router-dom'
import Particles from "react-tsparticles";
import { loadFull } from 'tsparticles';
import Home from './containers/home';
import Skills from './containers/skills';
import About from './containers/about';
import Resume from './containers/resume';
import Contact from './containers/contact';
import Portfolio from './containers/portfolio';
import Navbar from './components/navbar';
import particles from './utils.js/particles';

function App() {
const handleInit = async(main)=>{
    await loadFull(main)
}

return (
<div className="App">
    {/* particles js */}
    <Particles id='particles' options={particles} init={handleInit}/>


    {/* navbar */}
    <Navbar/>

    {/* main page content */}
    <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/resume' element={<Resume />}/>
        <Route path='/skills' element={<Skills />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/portfolio' element={<Portfolio />}/>
    </Routes>

</div>
);
}

export default App;
