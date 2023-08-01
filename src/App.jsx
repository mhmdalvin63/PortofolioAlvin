import './App.css';
import Navbar from './assets/components/part/navbar';
import Header from './assets/components/pages/header';
import Tentangsaya from './assets/components/pages/tentangSaya';
import Skills from './assets/components/pages/skills';
import Experience from './assets/components/pages/experience';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';


function App() {
  return (
    <div className="App">
      <div className='body'>
        <Navbar />
        <Header />
        <Tentangsaya />
        <Skills />
        <Experience />
      </div>
    </div>
  );
}

export default App;